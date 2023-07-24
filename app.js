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





//routing starts here------------------------------->

//home page      
app.get('/', (req, res) => {
  res.render('index') 
}) 

//weather page
app.get('/Weather', (req, res) => {
  res.render('weather') 
})
                 
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.render('404') ;
});


app.use(require('./router/router')) //routers here
app.use(require('./form_app'))
 


//port listening here
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
