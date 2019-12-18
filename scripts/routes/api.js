var express = require('express');
var router = express.Router();

var git = require('../controllers/git');

router.get('/git/getCommits', git.getCommits);

module.exports = router;