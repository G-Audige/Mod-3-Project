const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');

router.get('/book');
router.post('book/page/:id');

module.exports = router;
