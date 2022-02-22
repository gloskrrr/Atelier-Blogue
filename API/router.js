const express = require('express');
const passport = require('passport');

const ctrlAuth = require('./controllers/authentification');
const mdlAuth = require('./middlewares/authentification');

const ctrlMessages = require('./controllers/messages');

let router = express.Router()

router.route('/').get(function(req,res) {res.sendStatus(204);});

router
.route('/login')
.post(mdlAuth.isAnonymous, mdlAuth.loginIsValid, passport.authenticate('local'),  ctrlAuth.login)

//Ajouter méthodes middlewares avant méthodes controllers
router
.route('/messages')
.get(ctrlMessages.getAll)

router
.route('/messages/:id')
.get(ctrlMessages.getOne)

router.route('/messages/create')
.post(ctrlMessages.create)

router.route('/messages/update/:id')
.put(ctrlMessages.update)

router.route('/messages/delete/:id')
.delete(ctrlMessages.remove)

module.exports = router;
