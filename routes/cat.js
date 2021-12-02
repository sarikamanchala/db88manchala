var express = require('express');
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
      return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
var cat_controlers = require('../controllers/cat');

/* GET home page. */
router.get('/', cat_controlers.cat_view_all_Page);
router.get('/detail', cat_controlers.cat_view_one_Page); 

/* GET create cat page */ 
router.get('/create',secured, cat_controlers.cat_create_Page); 

/* GET create update page */ 
router.get('/update', secured,cat_controlers.cat_update_Page); 

/* GET create cat page */ 
router.get('/delete',secured, cat_controlers.cat_delete_Page); 
 
module.exports = router;


