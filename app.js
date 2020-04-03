//handle express 
var express = require ('express');
const mongoose = require('mongoose');

//define server
var app = express();

// Imports routes for the products
const product = require('./routes/product.route');

// Imports routes for the Books
const book = require('./routes/book.route');

// connect to db
const dev_db_url="mongodb+srv://nikki:nikki123@cluster0-7by9s.mongodb.net/test?retryWrites=true&w=majority"
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console,'MonmgoDB connection error: '));

//bodyparser if any
var bodyParser = require('body-parser');

//use the bodyParser so that it adds the body to the request
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//configure server to handle post request for product
app.use("/products", product);

//configure server to handle post request for Books
app.use("/books", book);

//get the server running
app.listen(3000, function(err)
{
    if (err)
    {
        console.log("Error while running server" + err);
    }
    else
        console.log("Server is running");
});

function createProduct(req, res)
{
    console.log("Creating a product");
}

function getProduct(req, res)
{
    console.log("Get the product");
}
