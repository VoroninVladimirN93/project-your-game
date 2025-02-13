const { Deck } = require("../db/models");

class DeckService {
  static async getAll() {
    return await Deck.findAll();
  }
}

module.exports = DeckService;
