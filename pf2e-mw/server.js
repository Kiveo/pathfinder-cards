require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', (err) => console.log(err))
db.once('open', () => console.log("Connection successful"))

app.use(express.json());

// routes
const cardsRouter = require('./routes/cards');
app.use('/cards', cardsRouter);

app.listen(3001, () => console.log("Server listening..."));