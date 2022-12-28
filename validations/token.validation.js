const { verify } = require("jsonwebtoken");
require("dotenv").config();

async function verifyToken(req, res, next) {
  var token = req.headers.authorization?.split(" ")[1];

  try {
    if (token) {
      req.infoToken = verify(token, process.env.SECRET);
    return next();
    } else {
      res.status(403).json({ message: "Por favor inserir token" });
    }
  } catch (error) {
    res.status(401).json({ message: "Por favor, inserir um token válido" });
  }
}

module.exports = verifyToken;
