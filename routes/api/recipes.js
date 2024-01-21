const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');

router.get('/book', recipesCtrl.book);
router.post('/book/recipes/:id', recipesCtrl.addToBook);
router.delete('/book/recipes/:id/delete', recipesCtrl.removeRecipeFromBook);

module.exports = router;
