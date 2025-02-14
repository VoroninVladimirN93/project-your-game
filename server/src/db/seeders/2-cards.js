"use strict";
const { Card } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Card.bulkCreate([
      // 📽️ Кино и мультфильмы
      {
        question: "В каком мультфильме главный герой – зелёный огр?",
        answer: "Шрек",
        deckId: 1,
        points: 100,
        urlImage: null,
      },
      {
        question:
          "В какой франшизе есть персонажи Люк Скайуокер и Дарт Вейдер?",
        answer: "Звёздные войны",
        deckId: 1,
        points: 200,
        urlImage: null,
      },
      {
        question: 'Какой фильм получил "Оскар" за лучший фильм в 2023 году?',
        answer: "Всё везде и сразу",
        deckId: 1,
        points: 300,
        urlImage: null,
      },

      // 🎵 Музыка
      {
        question: 'Как зовут солиста группы "Queen"?',
        answer: "Фредди Меркьюри",
        deckId: 2,
        points: 100,
        urlImage: null,
      },
      {
        question: 'Какая российская певица исполнила хит "Ариведерчи"?',
        answer: "Алла Пугачёва",
        deckId: 2,
        points: 200,
        urlImage: null,
      },
      {
        question:
          'Какой музыкальный инструмент называют "королём инструментов"?',
        answer: "Орган",
        deckId: 2,
        points: 300,
        urlImage: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cards", null, {});
  },
};
