const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');

router.get('/', recipesCtrl.recipes);
router.post('/:id', recipesCtrl.findRecipe);
module.exports = router;
