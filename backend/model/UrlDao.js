const Url = require('./Url');

class UrlDao {

  constructor() {}
  
  // function to create a new Url object
  async create(longUrl, shortUrl) {
    const url = await Url.create({ longUrl, shortUrl });
    return url;
  }

  // function to get all urls
  async read(id) {
    const urls = await Url.findById(id);
    console.log(urls)
    return urls;
  }

  async readAll() {
    const urls = await Url.find({});
    return urls;
  }

  async update(id, longUrl, shortUrl) {
    const url = await Url.findByIdAndUpdate(
      id,
      { longUrl, shortUrl },
      { new: true, runValidators: true }
    );
    return url;
  }

}

module.exports = UrlDao;