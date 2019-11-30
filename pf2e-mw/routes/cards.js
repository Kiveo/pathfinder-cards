const express = require('express');
const router = express.Router();
const Card = require('../models/card');

// -- CRUD -- 
// GET all
router.get('/', async (req, res) => {
  if (req.query.search) {
    Card.find({ $text: { $search: req.query.search } }, function (error, cards) {
      if (error) {
        res.send(error);
      }
      res.json(cards);
    });
  } else {
    try {
      const cards = await Card.find();
      res.json(cards);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
});

// GET single 
router.get('/:id', getCard, (req, res) => {
  res.json(res.card);
});

// POST 
router.post('/', async (req, res) => {
  const card = new Card({
    name: req.body.name,
    description: req.body.description
  });
  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update single   
router.patch('/:id', getCard, async (req, res) => {
  if (req.body.name != null) {
    res.card.name = req.body.name
  }
  if (req.body.description != null) {
    res.card.description = req.body.description
  }
  try {
    const updatedCard = await res.card.save();
    res.json(updatedCard);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});

// Delete single
router.delete('/:id', getCard, async (req, res) => {
  try {
    await res.card.remove();
    res.json({ message: "Card deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

// -- Helpers --
// MW getter  
async function getCard(req, res, next) {
  let card;
  try {
    card = await Card.findById(req.params.id)
    if (card === null) {
      return res.status(404).json({ message: "Card not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
  res.card = card;
  next();
}

module.exports = router;