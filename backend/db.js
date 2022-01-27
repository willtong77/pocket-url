require("dotenv").config();
const mongoose = require('mongoose');

const password = '5nvbuCyIE6nRSVfu';
const dbname = 'pocketurl-db';
const URI = `mongodb+srv://will:${password}@pocketurl-api.qyulk.mongodb.net/${dbname}?retryWrites=true&w=majority`