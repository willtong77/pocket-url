const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const app = express();
const db = require('./data/db.js');
const port = 4567;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./routes/url')(app);

db.connect();

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

module.exports = router;