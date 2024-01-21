const Recipe = require('../../models/book');

module.exports = {
  addToBook,
  book,
  removeRecipeFromBook,
};

async function book(req, res) {
  try {
    const book = await Recipe.getBook(req.user._id);
    res.status(200).json(book);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
async function addToBook(req, res) {
  console.log('Add to book');
  try {
    const book = await Recipe.getBook(req.user._id);
    await book.addRecipeToBook(req.params.id, req.body);
    res.status(200).json(book);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
async function removeRecipeFromBook(req, res) {
  try {
    const book = await Recipe.getBook(req.user._id);
    await book.removeRecipeFromBook(req.params.id);
    res.status(200).json(book);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
