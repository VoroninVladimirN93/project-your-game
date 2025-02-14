const { Deck, Card } = require("../db/models");

class DeckService {
  static async getAll() {
    return await Deck.findAll({ include: [{ model: Card }] });
  }
}

module.exports = DeckService;
