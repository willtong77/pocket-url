const Url = require('../model/Url');

class UrlDao {

  constructor() {}
  
  // function to create a new Url object
  async create(longUrl, shortId) {
    const url = await Url.create({ longUrl: longUrl, shortId: shortId });
    return url;
  }

  // function to get a Url object
  async readOne(inShortUrl) {
    const url = await Url.findOne({ shortId: inShortUrl })
    return url; // will return null if no user matches the query
  }
}

module.exports = UrlDao;