const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');  //called on terminal using npm install --save body-parser

const app = express();  //initializes a new object in the constant app

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));//added last


app.use('/admin', adminData.routes); //this imports the routes export in admin.js
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found', path: ''});
});

app.listen(process.env.PORT || 3000);

console.log('listening on 3000');