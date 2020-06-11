const express = require('express');

const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// import routes from auth.js
const authRoute = require('./routes/auth');

dotenv.config();

// connect to db
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to db!')
);
var db = mongoose.connection;
db.createCollection('log', { capped: true, size: 5242880, max: 5000 });

// Middleware
app.use(express.json());
// Route middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server up and running'));
