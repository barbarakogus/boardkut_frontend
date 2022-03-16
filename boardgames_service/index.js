const express = require('express');
const repository = require('./data/repository');

const app = express();
const port = 3000;
app.use(express.json());

// Don't change the code above this line!

app.get('/', async (req, res) => {
  const boardgames = await repository.getAllProducts();
  res
    .json(boardgames)
    .status(200)
});

// Don't change the code below this line!

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports.app = app;
