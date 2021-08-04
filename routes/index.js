var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});
router.get('/home/index',(req, res, next) => {
  res.render('index', { title: 'Home' });
});
router.get('/about/index',(req, res, next)=>{
  res.render('about', { title: 'About' });

});
router.get('/project/index',(req, res, next)=>{
  res.render('project', { title: 'Project' });
});
router.get('/contact/index',(req, res, next)=>{
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
