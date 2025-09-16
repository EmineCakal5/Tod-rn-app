const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
const port = process.env.DB_PORT || 3333;

app.use(cors());

// Body Parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

routes = require('./routes');
routes(app);

app.listen(port, () => {
  console.info(`Theatrical App listening at http://localhost:${port}`);
});
