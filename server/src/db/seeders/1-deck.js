"use strict";
const { Deck } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Deck.bulkCreate([
      {
       id:1,  title: " Кино и мультфильмы",
      },
      { id:2, title: " Музыка" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Decks", null, {});
  },
};
