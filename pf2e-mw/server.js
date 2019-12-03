require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds351628.mlab.com:51628/heroku_0ckwtrmz", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', (err) => console.log(err))
db.once('open', () => console.log("Connection successful"))

app.use(express.json());

// routes
const cardsRouter = require('./routes/cards');
app.use('/cards', cardsRouter);
app.use('/', (req, res, next) => {
  res.redirect('/cards')
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('pf2e-cards-ui/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join('build', 'index.html'));
  });
}

app.listen(port, () => console.log("Server listening..."));