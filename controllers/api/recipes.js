const Recipe = require('../../models/recipe');

module.exports = {
  recipes,
  findRecipe,
};

async function recipes(req, res) {
  try {
    const book = await Recipe.getBook(req.user._id);
    res.status(200).json(book);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
async function findRecipe(req, res) {
  try {
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
