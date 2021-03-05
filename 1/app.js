const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use(express.static('assets'));

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  }),
);

app.use('/', userRoutes);
app.use('/posts', postRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on : http://localhost:${port}`);
});
