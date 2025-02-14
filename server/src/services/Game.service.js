const { Game, User } = require("../db/models");

class GameService {
  static async getAll() {
    return await Game.findAll({ include: [{ model: User }] });
  }

  static async getById(id) {
    return await Game.findOne({
      where: { id },
      include: [{ model: User }],
    });
  }
}

module.exports = GameService;
