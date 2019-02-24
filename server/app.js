require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
const posts = require('./routes/posts');
app.use('/api/posts', posts);

// MongoDB connection setup
const keys = require('../keys');
mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, err => {
  if (err) console.log('Error while connectiong to MongoDB', err);

  console.log('Connected to MongoDB successfully ...');
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is running on port ${port}`));
