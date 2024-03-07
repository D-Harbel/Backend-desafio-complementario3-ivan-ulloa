const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { isAdmin } = require('../middleware/authorization');

module.exports = function (io) {
    router.post('/premium/:uid', isAdmin, UserController.changeUserRole);
    return router;
}
