const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/authentication');
const { list, create, createForm, update, updateForm, remove } = require('../controllers/post');

router.get('/', middleware.authentication, list);
router.post('/create', middleware.authentication, create);
router.get('/create', middleware.authentication, createForm);
router.post('/update/:id_post', middleware.authentication, update);
router.get('/update/:id_post', middleware.authentication, updateForm);
router.get('/remove/:id_post', middleware.authentication, remove);

module.exports = router;
