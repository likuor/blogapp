// const path = require('path');
const express = require('express');
const app = express();
const PORT = 8080;
// const PORT = 'https://blogapp-back.onrender.com';
const mongoose = require('mongoose');
require('dotenv').config();
const articleRoute = require('./routes/articles');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const cors = require('cors');

mongodb: mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB conneted');
  })
  .catch((err) => {
    console.log('ERROR MONGOOSE CONNECTING', err);
  });

//middleware
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', articleRoute);

app.listen(PORT, () => {
  console.log('Server is lstening');
});
