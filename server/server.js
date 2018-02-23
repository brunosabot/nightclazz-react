const express = require('express');
const bodyParser = require("body-parser");

const cors = require('./cors');
const conf = require('./server.json');
const beers = require(conf.beers);

const app = express();
const context = '/api/v1';
const router = express.Router();
let basket = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);

router.get('/beers', (req, res) => {
  res.send(beers);
});

router.get('/basket', (req, res) => {
  res.send(basket);
});

router.post('/basket', (req, res) => {
  basket.push(req.body);

  beers.forEach(beer => {
    if (beer.label.toUpperCase() === req.body.label.toUpperCase()) {
      if (beer.stock > 0) {
        beer.stock--;
      } else {
        res.sendStatus(500);
      }
    }
  });

  res.status(201).send(basket);
});

router.post('/basket/confirm', (req, res) => {
  basket = [];
  res.sendStatus(200);
});

app.use(context, router);

app.listen(conf.port, () => {
  console.log('Express server listening on port ', conf.port);
});
