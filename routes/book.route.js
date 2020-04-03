//Get the handler for Express Framework
const express = require('express');

//Get the router from Express Framework
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const book_controller = require('../controllers/book.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', book_controller.test);

router.post('/addBook', book_controller.addBook);

//router.post('/create')

module.exports = router;