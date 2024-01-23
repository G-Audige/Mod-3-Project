const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
  {
    name: { type: String },
    recipe: { type: String },
    qty: { type: Number, default: 1 },
    bought: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);
const shoppingListSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String },
    ingredients: [ingredientSchema],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

shoppingListSchema.statics.getList = function (userId) {
  const list = this;
  return list.findOneAndUpdate(
    { user: userId },
    { user: userId },
    { upsert: true, new: true }
  );
};
shoppingListSchema.methods.addItemToList = function (ingData) {
  const list = this;
  // console.log(ingData);
  const item = mongoose.model('Ingredient', ingredientSchema)(ingData);
  // console.log(item);
  list.ingredients.push(item);
  return list.save();
};
shoppingListSchema.methods.removeItemFromList = async function (id) {
  const list = this;
  list.findbyIdAndRemove({ _id: id });
  return list.save();
};
shoppingListSchema.methods.setBought = async function (id) {
  const list = this;
  console.log(list.ingredients[0]);
  const ingr = list.ingredients.find((ingr) => {
    ingr._id.equals(id);
  });
  console.log(ingr);
  if (ingr) {
    ingr = !ingr;
  }
  return list.save();
};

module.exports = mongoose.model('ShoppingList', shoppingListSchema);
