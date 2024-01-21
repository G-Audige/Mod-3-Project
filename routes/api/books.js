const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');

router.get('/books', booksCtrl.book);
router.post('/books/recipes/:id', booksCtrl.addToBook);
router.delete('/books/recipes/:id/delete', booksCtrl.removeRecipeFromBook);

module.exports = router;
