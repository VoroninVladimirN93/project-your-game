const { Deck, Card } = require("../db/models");

class DeckService {
  static async getAll() {
    return await Deck.findAll({
      include: [
        {
          model: Card,
          // Сортировка карт по полю points от большего к меньшему
          order: [['id', 'ASC']],
        },
      ],
    });
  }
}

module.exports = DeckService;
