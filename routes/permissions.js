var express = require('express');
var router = express.Router();

/* GET permissions. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('permissions', {title:'This is a permissions'});
});

module.exports = router;


