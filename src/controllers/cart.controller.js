const Cart = require("../models/cart.model");
const Product = require("../models/product.model");

// cart will first create at ATC event 
// need to create a new first time create function


async function calculateTotal(products) {
    let total = 0;
    // Use Promise.all to wait for all asynchronous operations to complete
    await Promise.all(products.map(async (productId) => {
        try {
            const response = await Product.findById(productId);
            total += response.price;
            console.log(total);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }));
    return total;
}

async function create(req, res) {
    const { userId, products, cartTotal, productsQty, orderId } = req.body;

    await Cart.create({
        userId,
        orderId: null,
        products,
        cartTotal: await calculateTotal(products),
        productsQty: products.length
    })
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.status(500).send("Server error")
        })
}

async function find(req, res) {
    await Cart.find()
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(500).send("Server error");
        })
}

async function findById(req, res) {
    const { id } = req.params
    await Cart.findById(id)
        .then((response) => {
            res.json(response);
        })
        .catch((error) => {
            res.status(500).json(error.message);
        })
}

async function editById(req, res) {
    const { id } = req.params;
    const { products, orderId } = req.body;

    try {
        const cartTotal = await calculateTotal(products);
        const productsQty = products.length;

        const updatedCart = await Cart.findByIdAndUpdate(id, {
            orderId,
            products,
            cartTotal,
            productsQty
        });

        res.json(updatedCart);

    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = { create, find, findById, editById };