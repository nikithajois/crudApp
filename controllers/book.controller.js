const Book = require('../models/book.model');

exports.test = function(req,res)
{
    res.send('Greetings from the Books Test controller!');
};

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