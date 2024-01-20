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
  } catch {
    res.status(400).json({ msg: e.message });
  }
}
