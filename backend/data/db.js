require("dotenv").config();
const mongoose = require('mongoose');

const password = process.env.DB_ADMIN_PASSWORD;
const dbname = 'pocketurl-db';
const URI = `mongodb+srv://will:${password}@pocketurl-api.qyulk.mongodb.net/${dbname}?retryWrites=true&w=majority`

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

async function connect() {
  await mongoose.connect(URI, option);

  mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB!');
  });

  mongoose.connection.on('error', (err) => {
    console.log(err);
    console.log('5')
  })
}

module.exports = { connect };