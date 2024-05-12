const Razorpay = require("razorpay");
const crypto = require("crypto");
const Order = require("../models/order.model");
const Payment = require("../models/payment.model");
const Cart = require("../models/cart.model");

const rzpInstance = new Razorpay({
    key_id: "rzp_test_WjPr3q53KqexNz",
    key_secret: "AAoAJKk8GkDe5TdYibuhx6Qb"
});

async function create(req, res) {
    const { amount } = req.body;

    const options = {
        amount: amount * 100,
        currency: "INR",
        receipt: 'receipt_order_1',
    }

    try {
        const order = await rzpInstance.orders.create(options)
        res.json(order)

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}


async function verify(req, res) {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    // constructing a expected string
    const expectedSiginature = crypto
        .createHmac('sha256', "AAoAJKk8GkDe5TdYibuhx6Qb")
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

    if (razorpay_signature === expectedSiginature) {
        res.json({ status: 'success', message: 'Payment successful' });

        try {
            const order = await Order.findById();
            const payment = await Payment.create({
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                amount,
                currency,
            })
            const savedOrder = await Order.findByIdAndUpdate(id, {
                status: "completed",
                paymentId: razorpay_payment_id,
            })

        } catch (error) {
            res.status(500).json({ status: 'error', message: "server error" });
        }

    } else {
        res.status(400).json({ status: 'error', message: 'Invalid signature' });
    }
}

module.exports = { create, verify };