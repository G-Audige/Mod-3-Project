const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');

router.get('/recipes', recipesCtrl.recipes);
router.post('/recipes/:id', recipesCtrl.findRecipe);
module.exports = router;
