const express = require('express');
const port = process.env.port || 4001;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello ninjs commerce");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});