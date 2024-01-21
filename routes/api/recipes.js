const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');

router.get('/book', recipesCtrl.book);
router.post('book/page/:id', recipesCtrl.addToBook);

module.exports = router;
