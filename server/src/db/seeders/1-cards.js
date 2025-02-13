'use strict';
const {Card} = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Card.bulkCreate([
    // 📽️ Кино и мультфильмы
    {
      question: 'В каком мультфильме главный герой – зелёный огр?',
      answer: 'Шрек',
      deck_id: 1, 
      points: 100,
      url_image: null,
    },
    {
      question: 'В какой франшизе есть персонажи Люк Скайуокер и Дарт Вейдер?',
      answer: 'Звёздные войны',
      deck_id: 1,
      points: 200,
      url_image: null,
    },
    {
      question: 'Какой фильм получил "Оскар" за лучший фильм в 2023 году?',
      answer: 'Всё везде и сразу',
      deck_id: 1,
      points: 300,
      url_image: null,
    },

    // 🎵 Музыка
    {
      question: 'Как зовут солиста группы "Queen"?',
      answer: 'Фредди Меркьюри',
      deck_id: 2,
      points: 100,
      url_image: null,
    },
    {
      question: 'Какая российская певица исполнила хит "Ариведерчи"?',
      answer: 'Алла Пугачёва',
      deck_id: 2,
      points: 200,
      url_image: null,
    },
    {
      question: 'Какой музыкальный инструмент называют "королём инструментов"?',
      answer: 'Орган',
      deck_id: 2,
      points: 300,
      url_image: null,
    }
  ]);
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('People', null, {});
 
  }
};
