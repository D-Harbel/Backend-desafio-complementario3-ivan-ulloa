const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { redirectToHomeIfAdmin } = require('../middleware/authorization');


module.exports = function (io) {
    router.post('/', cartController.createCart);
    router.get('/:cid', cartController.getCartById);
    router.post('/:cid/product', redirectToHomeIfAdmin,  cartController.addProductToCart);
    router.post('/:cid/product/:pid', redirectToHomeIfAdmin,  cartController.addQuantityToCart);
    router.delete('/:cid/products/:pid', redirectToHomeIfAdmin,  cartController.deleteProductFromCart);
    router.put('/:cid', cartController.updateCart);
    router.put('/:cid/products/:pid', cartController.updateProductInCart);
    router.delete('/:cid', cartController.deleteAllProductsInCart);
    router.post('/:cid/purchase', redirectToHomeIfAdmin, cartController.purchaseCart);

    return router;
}
