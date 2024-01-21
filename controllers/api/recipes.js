const Recipe = require('../../models/recipe');

module.exports = {
  addToBook,
  book,
};

async function book(req, res) {
  try {
    const book = await Recipe.getBook(req.user._id);
    res.status(200).json(book);
  } catch {
    res.status(400).json({ msg: e.message });
  }
}
async function addToBook(req, res) {
  try {
    const book = await Recipe.getBook(req.user_id);
    await book.addRecipeToBook(req.params.id);
    res.status(200).json(book);
  } catch {
    res.status(400).json({ msg: e.message });
  }
}
async function removeRecipeFromBook(req, res) {
  try {
    const book = await Recipe.getBook(req.user_id);
    await status(200).json(book);
  } catch {
    res.status(400).json({ msg: e.message });
  }
}
