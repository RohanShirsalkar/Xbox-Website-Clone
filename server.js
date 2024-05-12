const express = require("express");
const app = express();
const port = 3100;
const connectDb = require("./config/db");
const productRoutes = require("./src/routes/product.route")
const userRoutes = require("./src/routes/user.route");
const cartRoutes = require('./src/routes/cart.route');
const orderRoutes = require('./src/routes/order.route');
const paymentRoutes = require('./src/routes/payment.route');
const path = require("path");
const cors = require("cors")

connectDb();
app.use(cors());
app.use(express.json());
app.use("/media", express.static(path.join(__dirname, 'public')));

app.use("/product", productRoutes);
app.use("/user", userRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);
app.use("/payment", paymentRoutes);

app.listen(port, () => {
    console.log("server is running on port " + port);
});