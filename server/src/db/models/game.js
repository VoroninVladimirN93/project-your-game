'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    
    static associate({User, Deck}) {
      Game.belongsTo(User, { foreignKey: 'userId' });
      Game.hasMany(Deck, { foreignKey: 'gameId' });
    }
  }
  Game.init({
    score: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};