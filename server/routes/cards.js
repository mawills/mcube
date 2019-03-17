var express = require('express');
const axios = require('axios');
var router = express.Router();

/* GET a card */
router.post('/', (req, res) => {
    axios
        .get(`https://api.scryfall.com/cards/named?fuzzy=${req.body.cardName}`)
        .catch(error => {
            console.log(error);
            res.json({ message: 'Error looking up card.' });
        });
    res.json({ message: req.body.cardName });
});

module.exports = router;
