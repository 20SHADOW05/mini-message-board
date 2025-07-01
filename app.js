const express = require('express');
const app = express();

const path = require('node:path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/indexRoute');
const newRouter = require('./routes/newRoute');
const messageRouter = require('./routes/messageRoute');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/message', messageRouter)

app.listen(3000);