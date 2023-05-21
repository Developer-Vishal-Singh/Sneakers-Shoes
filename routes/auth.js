const express = require('express');
const router = express.Router();
const User = require('../model/user');
const passport = require('passport');


// router.get('/fakeUser', async (req, res) => {
//     const user = new User({ email: 'vishalsigh002@gmail.com', username: 'Vishal_Singh' });
//     const newUser = await User.register(user, 'vishal123');
//     res.send(newUser);
// })


// Get the singUp form
router.get('/register', (req, res) => {
    res.render('auth/signup');
})

router.post('/register', async (req, res) => {
    try {
        const user = new User({ username: req.body.username, email: req.body.email });
        console.log(user);
        const newUser = await User.register(user, req.body.password);
        req.flash('success', 'Registered Successfully,Please Login to Continue');
        res.redirect('/products');
    }
    catch (e) {
        console.log("ERROR")
        res.redirect('/register');
    }
})



//Get the signin form
router.get('/login', async (req, res) => {
    res.render('auth/signin');
})

router.post('/login',
    passport.authenticate('local',
        {
            failureRedirect: '/login',
            failureFlash: true
        }
    ), (req, res) => {
        // console.log(req.user);
        req.flash('success', `Welcome Back!! ${req.user.username}`)
        res.redirect('/products');
    });


router.get('/userProfile', (req, res) => {
    res.render('auth/userProfile');
})



// Logout the user from the current session
router.get('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/login');
    });
});




module.exports = router;