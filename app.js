const express = require("express");
const path = require('path');
const app = express();
const PORT = 3000;
const ejs = require('ejs')

app .use(express.urlencoded({extended:true}));
let publicPath = path.join(__dirname,"public");
app.use(express.static(publicPath));

app.set('view engine','ejs');

app.get('/ejs',function(req,res){
  // res.send(html);
  res.render('hello.ejs',{
    name:"Tanishq Kochar"
  });
})

app.get('/contact', function (req,res){
  res.render('contact.ejs');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
