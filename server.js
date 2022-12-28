const express = require('express');
const router = require("./src/routes")
const sequelize = require("./src/config/configDataBase");
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const port = 4000


app.use(morgan(''))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)

app.listen(
  port,
  console.table({
    ports: port,
    DB: sequelize.config.host,
  })
);