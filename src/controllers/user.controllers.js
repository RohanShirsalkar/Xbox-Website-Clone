const User = require("../models/user.model");

async function register(req, res) {
    const { name, email, password } = req.body;
    try {
        const userAvailable = await User.findOne({ email });
        if (!name || !email || !password) {
            res.status(400).send("All fields are required");
        }
        if (userAvailable) {
            res.status(400).send("User already exists");
        } else {
            const user = await User.create({ name, email, password });
            res.json(user);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    };
};


async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!email || !password) {
            res.status(400).send("All fields are required")
        }
        if (user?.password === password) {
            res.send("User FOund and password matched");
        } else {
            res.status(400).send("Invalid login details");
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error ' });
    };
}


module.exports = { register, login };