'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
   
    static associate({Game, Card}) {
      Deck.belongsTo(Game, { foreignKey: 'gameId' });
      Deck.hasMany(Card, { foreignKey: 'deckId' });
    }
  }
  Deck.init({
    title: DataTypes.STRING,
    gameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};