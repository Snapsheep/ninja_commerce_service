const express = require('express');
const mongodb = require('./config/db');

const port = process.env.port || 4003;

const app = express();

const userRoutes = require('./routes/user.routes');

mongodb.connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello ninjs commerce");
});

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});