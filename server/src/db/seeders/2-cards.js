"use strict";
const { Card } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Card.bulkCreate([
      // 📽️ Кино
      {
        question: "Какой актер сыграл роль Тони Старка в фильмах Marvel?",
        answer: "Роберт Дауни-младший",
        deckId: 1,
        points: 100,
        urlImage: null,
      },
      {
        question:
          "В какой франшизе есть персонажи Люк Скайуокер и Дарт Вейдер?",
        answer: "Звездные войны",
        deckId: 1,
        points: 200,
        urlImage: null,
      },
      {
        question: 'Какой фильм получил "Оскар" за лучший фильм в 2023 году?',
        answer: "Все везде и сразу",
        deckId: 1,
        points: 300,
        urlImage: null,
      },
      {
        question: "В каком году вышел первый фильм о Гарри Поттере?",
        answer: "2001",
        deckId: 1,
        points: 400,
        urlImage: null,
      },
      {
        question: 'Какой режиссер снял фильм "Криминальное чтиво"?',
        answer: "Квентин Тарантино",
        deckId: 1,
        points: 500,
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
        answer: "Алла Пугачева",
        deckId: 2,
        points: 200,
        urlImage: null,
      },
      {
        question:
          'Какой музыкальный инструмент называют "Королём инструментов"?',
        answer: "Орган",
        deckId: 2,
        points: 300,
        urlImage: null,
      },
      {
        question: 'Какой певец известен как "Король поп-музыки"',
        answer: "Майкл Джексон",
        deckId: 2,
        points: 400,
        urlImage: null,
      },
      {
        question: 'Какой композитор написал "Лунную сонату"?',
        answer: "Людвиг ван Бетховен",
        deckId: 2,
        points: 500,
        urlImage: null,
      },
      // Мультфильмы
      {
        question: "В каком мультфильме главный герой – зелёный огр?",
        answer: "Шрек",
        deckId: 3,
        points: 100,
        urlImage: null,
      },
      {
        question:
          'В каком мультфильме звучит фраза: "Ребята, давайте жить дружно!"',
        answer: "Кот Леопольд",
        deckId: 3,
        points: 200,
        urlImage: null,
      },
      {
        question: 'Как звали злодея из мультсериала "Черепашки-ниндзя"?"',
        answer: "Шреддер",
        deckId: 3,
        points: 300,
        urlImage: null,
      },
      {
        question: 'Как звали дракона из мультфильма "Как приручить дракона"?',
        answer: "Беззубик",
        deckId: 3,
        points: 400,
        urlImage: null,
      },
      {
        question: 'Как звали панду из мультфильма "Кунг-фу Панда"?',
        answer: "По",
        deckId: 3,
        points: 500,
        urlImage: null,
      },
      // Сериалы
      {
        question: 'В каком сериале звучит фраза: "Winter is coming"?',
        answer: "Игра престолов",
        deckId: 4,
        points: 100,
        urlImage: null,
      },
      {
        question: 'Как звали главного героя сериала "Во все тяжкие"?',
        answer: "Уолтер Уайт",
        deckId: 4,
        points: 200,
        urlImage: null,
      },
      {
        question:
          "В каком сериале главные герои живут в квартире 20 на улице Оксфорд?",
        answer: "Друзья",
        deckId: 4,
        points: 300,
        urlImage: null,
      },
      {
        question: 'Как звали главного героя сериала "Теория Большого взрыва"?',
        answer: "Шелдон",
        deckId: 4,
        points: 400,
        urlImage: null,
      },
      {
        question: 'Фамилия главны героев сериала "Сверхъестественное"?',
        answer: "Винчестер",
        deckId: 4,
        points: 500,
        urlImage: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cards", null, {});
  },
};
