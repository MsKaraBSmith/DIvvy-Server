const User = require("./user");
const Menu = require("./menu");
const Ingredients = require("./ingredients");
// create individual files for your models and import them here

// Setup Associations

User.hasMany(Menu);
Menu.belongsTo(User);

Menu.hasOne(Ingredients);
Ingredients.belongsTo(Menu);

module.exports = {
  User,
  Menu,
  Ingredients,
};
