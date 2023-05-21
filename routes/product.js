// const mongoose  = require('mongoose');
const express = require('express');
const router = express.Router();

const Product = require('../model/product');
const Review = require('../model/review');

const { isLoggedIn } = require('../middleware');


router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.render('products/index', { products });
    } catch (e) {
        console.log("Something Went wrong");
        res.render('error');
    }
})

// Display all the products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.render('products/index', { products });
    } catch (e) {
        console.log("Something Went wrong");
        res.render('error');
    }

})

// Get the form for new product
router.get('/products/new', isLoggedIn, (req, res) => {
    res.render('products/new');
})

// Create New Product
router.post('/products', isLoggedIn, async (req, res) => {
    try {
        // console.log(req.body.product);
        await Product.create(req.body.product);
        res.redirect('/products');
    }
    catch (e) {
        console.log(e.message);
        res.render('error');
    }

})


// Show particular product
router.get('/products/:id', async (req, res) => {
    try {
        // const id = req.params;
        const product = await Product.findById(req.params.id).populate('reviews');
        // console.log(product);
        res.render('products/show', { product });
    }
    catch (e) {
        console.log(e.message);
        res.redirect('/error');
    }

})


// Get the edit form
router.get('/products/:id/edit', isLoggedIn, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.render('products/edit', { product });
    }
    catch (e) {
        console.log(e.message);
        res.redirect('/error');
    }
})


// Upadate the particular product
router.patch('/products/:id', isLoggedIn, async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body.product);
        res.redirect(`/products/${req.params.id}`)
    }
    catch (e) {
        console.log(e.message);
        res.redirect('/error');
    }
})


// Delete a particular product
router.delete('/products/:id', isLoggedIn, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.redirect('/products');
    }
    catch (e) {
        console.log(e.message);
        res.redirect('/error');
    }
})





// Creating a New Comment on a Product
router.post('/products/:id/review', isLoggedIn, async (req, res) => {

    try {
        const product = await Product.findById(req.params.id);
        const review = new Review({
            user: req.user.username,
            ...req.body
        });
        product.reviews.push(review);

        await review.save();
        await product.save();
        res.redirect(`/products/${req.params.id}`);
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot add review to this Product');
        res.redirect('/error');
    }

})




router.get('/error', (req, res) => {
    res.status(404).render('error');
})


module.exports = router;