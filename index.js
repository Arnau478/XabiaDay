const express = require('express');
const app = express();
const morgan = require('morgan');
const engine = require('ejs-mate');
const path = require('path');

//Settings
app.set('port', process.env.PORT || 80);
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(morgan('dev'));

//Routes
app.use(require('./routes/index'));

//Create server
app.listen(app.get('port'));