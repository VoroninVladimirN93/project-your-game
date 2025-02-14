const DeckService = require("../services/Deck.service");
const formatResponse = require("../utils/formatResponse");

class DeckController {
  static async getAll(req, res) {
    try {
      const allDeck = await DeckService.getAll();
      res.status(200).json(formatResponse(200, "Success", allDeck));
    } catch (error) {
      res
        .status(500)
        .json(
          formatResponse(500, "Internal server error", null, error.message)
        );
    }
  }
}

module.exports = DeckController;
