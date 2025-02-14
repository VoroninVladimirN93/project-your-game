const CardService = require("../services/Card.service");
const formatResponse = require("../utils/formatResponse");
// const TaskValidator = require("../utils/Task.validator");

class CardController {
  static async getAll(req, res) {
    try {
      const allCards = await CardService.getAll();
      res
        .status(200)
        .json(formatResponse(200, "Cards retrieved successfully", allCards));
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
      const card = await CardService.getById(id);
      if (!card) {
        return res
          .status(404)
          .json(formatResponse(404, "Card not found", null));
      }
      res
        .status(200)
        .json(formatResponse(200, "Card retrieved successfully", card));
    } catch (error) {
      res
        .status(500)
        .json(
          formatResponse(500, "Internal server error", null, error.message)
        );
    }
  }
}

module.exports = CardController;
