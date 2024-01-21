const Recipe = require('../../models/recipe');

module.exports = {
  recipe,
};

async function recipe(req, res) {
  try {
    const book = await Recipe.getBook(req.user._id);
    res.status(200).json(book);
  } catch {
    res.status(400).json({ msg: e.message });
  }
}
