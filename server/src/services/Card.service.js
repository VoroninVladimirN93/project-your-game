const { Card, Deck } = require("../db/models");

class CardService {
  static async create(data) {
    return await Card.create(data);
  }

  static async getAll() {
    return await Card.findAll({ include: [{ model: Deck }] });
  }

  static async getById(id) {
    return await Card.findOne({
      where: { id },
      include: [{ model: Deck }],
    });
  }
}

module.exports = CardService;
