const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');

router.get('/', booksCtrl.book);
router.post('/recipes', booksCtrl.addToBook);
router.delete('/recipes/:id/delete', booksCtrl.removeRecipeFromBook);

module.exports = router;
