var express = require('express');
var router = express.Router();

/* GET users listing. */
///router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  //res.render("list",{title:"some text"});

//});

///module.exports = router;

router.get('/json-list', async function(req, res, next){
  const users = require('../services/languages');
  //res.render('permissions', {title: 'json-list'});

  try{
    res.json(await users.getMultiple2(req.query.page));
  }
  catch(err){
    console.error('Error' + err.message);
    next(err);
  }
});

module.exports = router;