const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/authentication');

const { login, loginForm, logout, dashboard } = require('../controllers/user');

router.get('/', loginForm);
router.get('/login', loginForm);
router.post('/login', login);
router.get('/dashboard', middleware.authentication, dashboard);
router.get('/logout', middleware.authentication, logout);

module.exports = router;
