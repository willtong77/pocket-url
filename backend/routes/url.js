const UrlDao = require('../data/UrlDao');
const urls = new UrlDao();

module.exports = function(app) {
  // GET
  app.get('/urls', async (req, res) => {
    const shortId = req.query.shortId;
    if (!shortId) {
      res
        .status(400)
        .json({
          message:'You must query the database based on a shortUrl.'
        })
    } else {
      try {
        const data = await urls.readOne(shortId);
        res.json({ data: data });
      } catch (err) {
        res.json({ data: null });
        console.log(err);
      }
    }
  });

  // GET REDIRECT
  app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const url = await urls.readOne(shortId);
    try {
      res.redirect(url.longUrl);
    } catch (err) { errorHandler(res, 500, err); }
  })
  
  // POST
  app.post('/urls/:short/', async function(req, res) {
    const { long } = req.body;
    if (!req.params.short || !long) {
      res.status(800).json({ message: "need long and short man!!!" })
      return;
    }
    
    const data = await urls.create(long, req.params.short);
    res.status(201).json({ data });
  });
}