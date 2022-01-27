const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
  longUrl: { type: String, required: true},
  shortUrl: { type: String, required: true},
})

const Url = mongoose.model('Url', UrlSchema);

module.exports = Url;