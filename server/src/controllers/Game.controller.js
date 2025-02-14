const GameService = require("../services/Game.service");
const formatResponse = require("../utils/formatResponse");

class GameController {
  static async getAll(req, res) {
    try {
      const allGames = await GameService.getAll();
      res
        .status(200)
        .json(formatResponse(200, "Cards retrieved successfully", allGames));
    } catch (error) {
      res
        .status(500)
        .json(
          formatResponse(500, "Internal server error", null, error.message)
        );
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const game = await GameService.getById(id);
      if (!game) {
        return res
          .status(404)
          .json(formatResponse(404, "Card not found", null));
      }
      res
        .status(200)
        .json(formatResponse(200, "Card retrieved successfully", game));
    } catch (error) {
      res
        .status(500)
        .json(
          formatResponse(500, "Internal server error", null, error.message)
        );
    }
  }
}

module.exports = GameController;
