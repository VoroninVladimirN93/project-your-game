"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate({ Card }) {
      Deck.hasMany(Card, { foreignKey: "deckId" });
    }
  }
  Deck.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Deck",
    }
  );
  return Deck;
};
