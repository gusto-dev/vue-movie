const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const axios = require('axios');

const ID_KEY = 'lDQyJS7aYFZX8hiMLPKR';
const SECRET_KEY = '0o0GGlYStb';

app.use(cors());

app.use(bodyParser.json());

app.use('/search', (req, res) => {
  const params = {
    query: req.query.query,
    display: req.query.display,
    start: req.query.start,
    genre: req.query.genre,
    country: req.query.country,
    yearfrom: req.query.yearfrom,
    yearto: req.query.yearto,
  };
  axios
    .get('https://openapi.naver.com/v1/search/movie.json', {
      params: params,
      headers: {
        'X-Naver-Client-Id': ID_KEY,
        'X-Naver-Client-Secret': SECRET_KEY,
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then(function (response) {
      const items = response.data.items;
      res.send({ items: items });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
