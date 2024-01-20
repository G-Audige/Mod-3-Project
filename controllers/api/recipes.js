const Recipe = require('../../models/recipe');

module.exports = {
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
async function addToBook(req, res) {}
