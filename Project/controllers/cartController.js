const Product = require('../models/Product');

let cart = {};

exports.getCart = async (req, res) => {
    res.json(cart);
};

exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }
        if (cart[productId]) {
            cart[productId].quantity += quantity;
        } else {
            cart[productId] = { ...product.toObject(), quantity };
        }
        res.json(cart);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateCart = async (req, res) => {
    const { productId, quantity } = req.body;
    if (!cart[productId]) {
        return res.status(404).json({ msg: 'Product not in cart' });
    }
    if (quantity <= 0) {
        delete cart[productId];
    } else {
        cart[productId].quantity = quantity;
    }
    res.json(cart);
};

exports.clearCart = async (req, res) => {
    cart = {};
    res.json(cart);
};