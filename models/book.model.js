//Mongoose is an ODM (Object to Document Mapper)
const mongoose = require('mongoose');

//Get the schema creater functiom
const Schema = mongoose.Schema;

let BooksSchema = new Schema({
    name: {type: String, required: true, max: 100},
    author: {type: String, required: true, max:100},
});

// Export the model
module.exports = mongoose.model('Book', BooksSchema);