const Order = require('../models/order.model');
const Cart = require('../models/cart.model');
const Product = require('../models/product.model');
const User = require('../models/user.model');

// function not exported
const getProducts = async (cartObj) => {
    try {
        const products = await Promise.all((cartObj?.products || []).map(async (productId) => {
            const product = await Product.findById(productId);
            return {
                productType: product.productType,
                title: `${product.title_1} ${product.title_2}`,
                price: product.price
            };
        }));

        return products;
    } catch (error) {
        console.error(`Error getting formatted products: ${error.message}`);
        throw error;
    }
};

// 
// WHAT THIS CONTROLLER DO ?
// 
// #1 creates new order 
// #2 updates order count
// #3 updates order id in cart
// #4 finds products and update products
// 
async function create(req, res) {
    const { userId, cartId, shippingAddress } = req.body;

    try {
        const cart = await Cart.findById(cartId);
        const ordersCount = 100 + (await Order.find()).length;
        const user = await User.findById(userId);

        if (!cart) {
            return res.status(500).send("Cart not found");
        }

        const products = await getProducts(cart);

        const order = new Order({
            orderNumber: ordersCount + 1,
            userId,
            customer: user?.name,
            status: "pending",
            cartId,
            paymentMode: null,
            paymentId: null,
            products,
            productsQty: cart?.productsQty,
            orderTotal: cart?.cartTotal,
            shippingAddress: {}
        });

        try {
            const savedOrder = await order.save();
            await Cart.findByIdAndUpdate(cartId, { orderId: savedOrder._id });

            res.json({
                message: "Order created",
                order: savedOrder
            });

        } catch (error) {
            res.status(500).json(error.message);
        }

    } catch (error) {
        res.status(500).json(error.message);
    }
}

// 
// WHAT THIS CONTROLLER DO ?
// 
// #1 updates shipping address
// #2 updates payment mode
// 
async function editById(req, res) {

    const { id } = req.params;
    const { products, shippingAddress, paymentMode } = req.body;

    try {
        const order = await Order.findById(id);

        if (!order) {
            res.send("Order not found");
        }

        try {
            const savedOrder = await Order.findByIdAndUpdate(id, {
                shippingAddress,
                paymentMode
            })

            res.json({
                message: "Order created",
                order: savedOrder
            });

        } catch (error) {
            res.status(500).json(error.message);
        }

    } catch (error) {
        res.status(500).json(error.message);
    }
}


// 
// WHAT THIS CONTROLLER DO ?
// 
// #1 completes the purchase 
// #2 updates payment id and changes payment status
// 
async function placeOdrer(req, res) {

}

async function find(req, res) {
    try {
        const orders = await Order.find();
        res.json(orders);

    } catch (error) {
        res.status(500).json(error.message);
    }
}

async function findById(req, res) {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
        res.json(order);

    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = { create, editById, find, findById };