//Get the handler for Express Framework
const express = require('express');

//Get the router from Express Framework
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const book_controller = require('../controllers/book.controller');

// a simple test url to check that all of our files are communicating correctly.
router.post('/create', book_controller.addBook);

router.get('/:id', book_controller.bookDetails);

router.put('/:id/update', book_controller.updateBook);

router.delete('/:id/delete', book_controller.deleteBook)

module.exports = router;