var express = require('express');
var router = express.Router();
const controller =require('../controllers/products');
const controller1 =require('../controllers/users');
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
  router.get('/tables', controller1.user);

  router.get('/products',controller.product1);

  router.get('/add-product', function(req, res, next) {
    res.render('manager/add-product');
  });

  router.get('/blank', function(req, res, next) {
    res.render('manager/blank');
  });
module.exports = router;
