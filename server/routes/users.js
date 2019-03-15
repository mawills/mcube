var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send({ message: 'you are connected' });
});

module.exports = router;
