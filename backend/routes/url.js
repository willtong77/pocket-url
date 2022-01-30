const UrlDao = require('../model/UrlDao');
const express = require('express');
const router = express.Router();

const urls = new UrlDao();

router.get('/api/urls', (req, res) => {
  const url = req.query.shortUrl;
  urls
    .read(url)
    .then((urls_resp) => res.json({ data: urls_resp }))
    .catch((err) => {
      console.log(err);
      console.log('1');
    });
});

router.get('/api/urls/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl;
  urls
    .read(id)
    .then((url) => res.json({ data: longUrl }))
    .catch((err) => {
      console.log(err);
      console.log('2');
    });
});

router.post('/api/urls', (req, res) => {
  const longUrl = req.body.longUrl;
  const shortUrl = req.body.shortUrl;
  urls
    .create(longUrl, shortUrl)
    .then((url) => res.status(201).json({ data: note }))
    .catch((err) => {
      console.log(err);
      console.log('3');
    });
});

router.put('/api/urls/:id', (req, res) => {
  const id = req.params.id;
  const longUrl = req.body.longUrl;
  const shortUrl = req.body.shortUrl;

  urls
    .update(id, longUrl, shortUrl)
    .then((url) => 
      url
        ? res.json({ data: url })
        : console.log(res, 404, 'Resource not found')
    )
    .catch((err) => {
      console.log(err);
      console.log('4')
    });
});