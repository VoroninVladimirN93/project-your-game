'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
  
    static associate({Deck}) {
      Card.belongsTo(Deck, { foreignKey: 'deckId' });
    }
  }
  Card.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    deckId: DataTypes.INTEGER,
    points: DataTypes.INTEGER,
    urlImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};