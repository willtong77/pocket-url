const Url = require('./model/Url');
const express = require("express");
const app = express();
const port = 4567;

Url.create(
  {
    longUrl: 'https://cs280fall20.github.io/api/step_2.html',
    shortUrl: 'https://cs280fall20.github.io/api/step_2.html',
  },
  (err, url) => {
    if (err) console.log(err);
    console.log(url);
  }
)

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
})

