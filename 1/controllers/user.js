const { User } = require('../models');

exports.login = (req, res) => {
  User.findOne({
    where: { email: req.body.email, password: req.body.password },
  })
    .then((data) => {
      req.session.isAuth = true;
      req.session.name = data.name;
      req.session.email = data.email;
      req.session.userId = data.id;
      res.redirect('/dashboard');
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.loginForm = (req, res) => {
  res.render('user/login');
};

exports.logout = (req, res) => {
  delete req.session.isAuth;
  delete req.session.name;
  delete req.session.email;
  res.redirect('/login');
};

exports.dashboard = (req, res) => {
  res.render('user/dashboard', { session: req.session });
};
