if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}


require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./model/user');


const seedDB = require('./seedDB');


// Routes
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');





//Database Connection
mongoose.connect(process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch(err => {
        console.log("Ohh No ERROR");
        console.log(err);
    });




app.set('view engine', 'ejs');     //set ejs as templating engine
app.set('views', path.join(__dirname, '/views'));    //views folder set (default behaviour of render is see in views folder) 
app.use(express.static(path.join(__dirname, '/public')));   //Know the express for static file server in public directory
app.use(express.urlencoded({ extended: true }));  //middleware for parsing the req.body
app.use(methodOverride('_method'));   //For use method ovveride htttp verbs( like post to delete ,post to patch/put) 



// DataBase seed Stuff
// seedDB();





//Session
const sessionConfig = {
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionConfig));
app.use(flash());

//initialising the passport and session for storing the users info
app.use(passport.initialize());
app.use(passport.session());

//Configuring the passport to use local strategy
passport.use(new LocalStrategy(User.authenticate()));


// The serialize and deserialize code can be slightly different if you are not using passport-local-mongoose with the passport.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
})


// app.get('/', (req, res) => {
//     res.render('../views/products/index', { products });
// })



// Routes Access
app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);





app.listen(process.env.PORT || 3000, () => {
    console.log("Server running at port 3000")
})