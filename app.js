const express = require("express");
const path = require('path');
const app = express();
const PORT = 3000;
const ejs = require('ejs')

app .use(express.urlencoded({extended:true}));
let publicPath = path.join(__dirname,"public");
app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
