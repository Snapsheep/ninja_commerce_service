const express = require('express');
const mongodb = require('./config/db');
const port = process.env.port || 4002;

const app = express();

const orderRoutes = require('./routes/order.routes');

mongodb.connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello ninjs commerce");
});

app.use('/orders', orderRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});