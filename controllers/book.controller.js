const Book = require('../models/book.model');

exports.addBook = (req,res) =>
{
    let book = new Book(
        {
            name: req.body.name,
            author: req.body.author
        }  
    );

    book.save(function(err){
        if (err) {
            return next(err);
        }
        res.send('Books added successfully')
    })
};

exports.bookDetails = function (req, res) {

    //find the book with id “id” , if its present, return it
    Book.findById(req.params.id, function (err, book) {
        if (err)
        {
            console.log(err);
            res.status(400).send(JSON.stringify(err));
        } 
        else
        {
            if (book) 
            {
                console.log("Book Retrived " + book);
                res.send(book);
            }
            else
                res.status(400).send("No books found"); 
        }
    })
};


exports.updateBook = function (req, res) {
    Book.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, book) {
        if (err) return next(err);
        res.send('Book udpated.');
    });
};

exports.deleteBook = function (req, res) {
    Book.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
