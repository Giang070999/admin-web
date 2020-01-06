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

  router.get('/add-product', controller.add_product);
 
  router.get('/product_detail', controller.product_detail);


  router.get('/blank', function(req, res, next) {
    res.render('manager/blank');
  });

  
router.get('/:page',controller.product);

router.get('/low_price/:page',controller.product_low_price);

router.get('/hight_price/:page',controller.product_hight_price);

router.get('/:type/:page',controller.product_type);

module.exports = router;
