var express = require('express');
var router = express.Router();

router.get('/',(req, res, next)=>{
    res.render('project/index', { title: 'about' });
  
  });
  
  module.exports = router;