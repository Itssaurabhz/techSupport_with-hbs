
const express= require("express")
const app=express()
const port = process.env.PORT || 80
const hbs = require('express-hbs');

//setting views engine as hbs
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
})); 
   //for rendering css from public dir....     
app.use(express.static('public'));


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(require('./router/router')) //routers here
app.use(require('./form_app'))

// //routing starts here------------------------------->

// //home page      
// app.get('/', (req, res) => {
//   res.render('index') 
// }) 

// //quote page
// app.get('/quote', (req, res) => {
//   res.render('quote') 
// })

// //about page
// app.get('/about', (req, res) => {
//   res.render('about') 
// })
// //service page
// app.get('/service', (req, res) => {
//   res.render('service') 
// })
// //contact page
// app.get('/contact', (req, res) => {
//   res.render('contact') 
// })                
// //The 404 Route (ALWAYS Keep this as the last route)
// app.get('*', function(req, res){
//   res.render('404') ;
// });


//port listening here
app.listen(port, () => {
  console.log(`TechSolution app listening on port ${port}`)
}) 