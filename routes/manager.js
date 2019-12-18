var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/charts', function(req, res, next) {
  res.render('manager/charts');
});

/* GET login page. */
router.get('/login', function(req, res, next) {
    res.render('manager/login');
  });

  router.get('/register', function(req, res, next) {
    res.render('manager/register');
  });
  router.get('/tables', function(req, res, next) {
    res.render('manager/tables');
  });
  router.get('/products', function(req, res, next) {
    res.render('manager/products');
  });


  router.get('/blank', function(req, res, next) {
    res.render('manager/blank');
  });
module.exports = router;
