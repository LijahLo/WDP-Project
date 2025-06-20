// app.js 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/magesDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB...', err));