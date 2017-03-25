var express = require('express');
var router = express.Router();
var models = require('../models');

function isAuthenticated(req, res, next) {
  if (req.session.username)
    return next()
  // else
  // res.redirect('/client/login')

  req.session.username = 'kangle89' // supaya tidak login melulu
  req.session.userid = 12345 // supaya tidak login melulu
  next() // supaya tidak login melulu
}

router.get('/', isAuthenticated, function(req, res, next) {
  res.redirect('/client/dashboard')
});

// login
router.get('/login', function(req, res, next) {
  res.render('client/client_login', {})
  res.end()
});

router.post('/login', function(req, res, next) {
  let username = req.body.username
  let password = req.body.password

  req.checkBody('username', 'Caution !! Username is required').notEmpty();
  req.checkBody('password', 'Caution !! Password is required').notEmpty();

  let errors = req.validationErrors();

  if (errors) {
    res.render('client/client_login', { errors: errors })
  } else {

    // cek password
    models.Client.findOne({ where: { username: username }})
      .then(client => {
        if (client) {
          if (password === client.password) {
            req.session.username = username
            req.session.userid = client.userid
            res.redirect('/client/dashboard')
          } else {
            res.send('Password is not match')
          }
        } else {
          res.send('Client not found')
        }
      })
      .catch(err => res.send(err.message))

  }

});

// logout
router.get('/logout', function(req, res) {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/client/login');
    }
  });

});

// dashboard
router.get('/dashboard', isAuthenticated, function(req, res, next) {

  models.Trx.sum('balance', { where: { type: 1, status: 2, userid: req.session.userid }})
    .then(sum => {
      res.render('client/client_dashboard', { sum: sum })
    })
    .catch(err => res.send(err.message))

});

// deposit
router.get('/deposit', isAuthenticated, function(req, res, next) {

  models.Trx.findAll({ where: { userid: req.session.userid }, order: 'id DESC'})
    .then(trxes => {
      let data = {}
      if (trxes.length) {
        data.trxes = trxes
      } else {
        data.trxes = []
      }
      res.render('client/client_deposit', data)
    })
    .catch(err => res.send(err.message))

});

// create
router.get('/deposit/create', isAuthenticated, function(req, res, next) {
  res.render('client/client_deposit_create', {})
});

router.post('/deposit/create', isAuthenticated, function(req, res, next) {
  let data = {
    balance: req.body.balance,
    type: 1,
    userid: req.session.userid,
    status: 3
  }
  models.Trx.create(data)
    .then(() => {
      res.redirect('/client/deposit')
    })
    .catch(err => res.send(err.message))

});

// update
router.get('/deposit/edit/:id', isAuthenticated, function(req, res, next) {
  models.Trx.findOne({ where: { id: req.params.id }})
    .then((trx) => {
      res.render('client/client_deposit_edit', { trx: trx })
    })
    .catch(err => res.send(err.message))

});

router.post('/deposit/edit/:id', isAuthenticated, function(req, res, next) {
  let data = {
    balance: req.body.balance,
  }
  models.Trx.update(data, { where: { id: req.params.id }})
    .then(() => {
      res.redirect('/client/deposit')
    })
    .catch(err => res.send(err.message))

});

router.get('/deposit/confirm/:id', isAuthenticated, function(req, res, next) {
  models.Trx.update({ status: 2 }, { where: { id: req.params.id }})
    .then(() => {
      res.redirect('/client/deposit')
    })
    .catch(err => res.send(err.message))

});

// delete
router.get('/deposit/delete/:id', isAuthenticated, function(req, res, next) {
  models.Trx.destroy({ where: { id: req.params.id }})
    .then(() => {
      res.redirect('/client/deposit')
    })
    .catch(err => res.send(err.message))

});

module.exports = router;
