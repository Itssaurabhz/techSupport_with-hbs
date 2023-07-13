const express = require('express');
const router = express();

//routing starts here------------------------------->

//home page      
router.get('/', (req, res) => {
    res.render('index') 
  }) 
  
  //quote page
  router.get('/quote', (req, res) => {
    res.render('quote') 
  })
  
  //about page
  router.get('/about', (req, res) => {
    res.render('about') 
  })
  //service page
  router.get('/service', (req, res) => {
    res.render('service') 
  })
  //contact page
  router.get('/contact', (req, res) => {
    res.render('contact') 
  })
  
  

  
  //The 404 Route (ALWAYS Keep this as the last route)
  router.get('*', function(req, res){
    res.render('404') ;
  });
  


module.exports = router;