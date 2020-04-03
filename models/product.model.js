//mongoose is an ODM (Object to Document Mapper)
const mongoose = require('mongoose');

//Get a  pointer to schema definition
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);