const Order = require('../models/Order');
const Product = require('../models/Product');

let cart = {};

exports.createOrder = async (req, res) => {
    const { userId } = req.body;
    try {
        const products = Object.values(cart).map(item => ({
            product: item._id,
            quantity: item.quantity,
        }));
        const total = Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

        const newOrder = new Order({
            user: userId,
            products,
            total,
        });

        const order = await newOrder.save();
        cart = {}; 
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};