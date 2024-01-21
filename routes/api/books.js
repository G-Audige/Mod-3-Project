const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');

router.get('/book', booksCtrl.book);
router.post('/book/recipes/:id', booksCtrl.addToBook);
router.delete('/book/recipes/:id/delete', booksCtrl.removeRecipeFromBook);

module.exports = router;
