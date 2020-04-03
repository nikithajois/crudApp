//Get the handler for Express Framework
const express = require('express');

//Get the router from Express Framework
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

//router.post('/create')
router.post('/create', product_controller.product_create);

module.exports = router;