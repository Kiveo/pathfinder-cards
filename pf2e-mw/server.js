require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
//Static file declarationapp.use(express.static(path.join(__dirname, 'pf2e-cards-ui/build')));
//production modeif(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'pf2e-cards-ui/build')));  
//  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'pf2e-cards-ui/build/index.html'));  })}
//build modeapp.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/pf2e-cards-ui/public/index.html'));})
//start serverapp.listen(port, (req, res) => {  console.log( `server listening on port: ${port}`);})

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
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
app.listen(port, () => console.log("Server listening..."));