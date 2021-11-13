const { DataTypes } = require("sequelize");
const db = require("../db");

const Ingredients = db.define("ingredients", {
    ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true,
    },
    groupName: {
        type: DataTypes.STRING,
        allowNull: false
    },

});

module.exports = Ingredients;