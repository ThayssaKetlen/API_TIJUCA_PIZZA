const { sign } = require("jsonwebtoken");
require("dotenv").config();

class TokenServices {
  async gerarToken(info) {
    return sign(info, process.env.SECRET, {
      expiresIn: "1h",
    });
  }
  async validateToken() {
    const token = json(token);
  }
}

module.exports = new TokenServices();
