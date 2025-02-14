"use strict";
const { Deck } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Deck.bulkCreate([
      {
        id: 1,
        title: " Кино",
      },
      { id: 2, title: " Музыка" },
      { id: 3, title: " Мультфильмы" },
      { id: 4, title: " Сериалы" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Decks", null, {});
  },
};
