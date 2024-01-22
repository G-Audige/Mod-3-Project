const express = require('express');
const router = express.Router();
const listsCtrl = require('../../controllers/api/shoppingList');

router.get('/', listsCtrl.list);
router.post('/items', listsCtrl.addToList);
router.delete('/items/:id/delete', listsCtrl.removeFromList);

module.exports = router;
