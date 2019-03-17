var express = require('express');
const axios = require('axios');
var router = express.Router();

/* GET a card */
router.post('/', (req, res) => {
    axios
        .get(`https://api.scryfall.com/cards/named?fuzzy=${req.body.cardName}`)
        .catch(res.json({ message: 'Error looking up card' }))
        .then(scryfallData => {
            console.log(scryfallData.data);
        });
    res.json({ message: req.body.cardName });
});

module.exports = router;
