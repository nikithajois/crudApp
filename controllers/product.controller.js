const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = (req, res) => {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.productDetails = function (req, res) {

    //find the book with id “id” , if its present, return it
    Product.findById(req.params.id, function (err, product) {
        if (err)
        {
            console.log(err);
            res.status(400).send(JSON.stringify(err));
        } 
        else
        {
            if (product) 
            {
                console.log("Product details " + product);
                res.send(product);
            }
            else
                res.status(400).send("No products found"); 
        }
    })
};


exports.updateProduct = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('The product is udpated.');
    });
};

exports.deleteProduct = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
