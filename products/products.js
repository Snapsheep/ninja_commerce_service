const express = require('express');
const mongodb = require('./config/db');
const port = process.env.port || 4001;

const app = express();

const productRoutes = require('./routes/product.routes');

mongodb.connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello ninjs commerce");
});

app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});