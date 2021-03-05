const { Post } = require('../models/index');

exports.list = (req, res) => {
  console.log('masuk');
  Post.findAll({ order: [['id', 'ASC']] })
    .then((data) => {
      console.log(data);
      res.render('post/list', { data: data, session: req.session });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.create = (req, res) => {
  Post.create(req.body)
    .then((data) => {
      res.redirect('/posts');
    })
    .catch((err) => {
      res.send(err.stack);
    });
};

exports.createForm = (req, res) => {
  res.render('post/add', { session: req.session });
};

exports.update = (req, res) => {
  Post.update(req.body, { where: { id: req.params.id_post } })
    .then((data) => {
      res.redirect('/posts');
    })
    .catch((err) => {
      res.send(err.errors[0].message);
    });
};

exports.updateForm = (req, res) => {
  Post.findOne({ where: { id: req.params.id_post } })
    .then((data) => {
      res.render('post/edit', {
        data: data,
        id: req.params.id_post,
        session: req.session,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.remove = (req, res) => {
  Post.destroy({ where: { id: req.params.id_post } })
    .then((data) => {
      res.redirect('/posts');
    })
    .catch((err) => {
      res.send(err);
    });
};
