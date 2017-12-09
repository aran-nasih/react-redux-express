var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "i'm from express"
  }, {
  	id: 2,
  	username: "me too"
  }]);
});

module.exports = router;