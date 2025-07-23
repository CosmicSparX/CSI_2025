const express = require('express');
const router = express.Router();
const { getCart, addToCart, updateCart, clearCart } = require('../controllers/cartController');

router.get('/', getCart);
router.post('/', addToCart);
router.put('/', updateCart);
router.delete('/', clearCart);

module.exports = router;