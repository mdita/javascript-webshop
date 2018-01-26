var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var Order = require('../models/order');
var Review = require('../models/review');
var User = require('../models/user');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET users listing. */
router.get('/', function(req, res, next) {
	var noOfOders,
	    noOfUsers,
	    noOfComments;

  	Order.find(function(err,docs) {
  		noOfOders = docs.length;

  		Review.find(function(err,docs) {
  			noOfComments = docs.length;

  			User.find(function(err,docs) {
  				noOfUsers = docs.length;

  				res.render('admin/index', { title: 'Dashboard', noOfOders: noOfOders, noOfComments: noOfComments, noOfUsers: noOfUsers});
  			})
  		});
  	});


  	//console.log(noOfOders);
});

router.get('/signin', function(req, res, next) {
  var messages = req.flash('error');
  var successMsg = req.flash('success')[0];

  res.render('admin/signin', { title: 'Admin Sign In', csrfToken: req.csrfToken(), successMsg: successMsg, noMessage: !successMsg, messages: messages, hasErrors: messages.length>0});
});

router.post('/signin', passport.authenticate('local.signinAdmin', {
	//successRedirect: '/user/profile',
	failureRedirect: '/admin/signin',
	failureFlash: true
}), function(req,res,next) {
		res.redirect('/admin');
});

router.get('/logout',function (req, res, next) {
	req.logout();
	res.redirect('/admin/signin');
});

router.get('/morris',function (req, res, next) {
	var numberOfEntries = [];

	Order.find({paymentType: 'stripe' }, function(err,docs) {
		numberOfEntries.push(docs.length);

		Order.find({paymentType: 'bitcoin' }, function(err,docs) {
			numberOfEntries.push(docs.length);

			Order.find({paymentType: 'paypal' }, function(err,docs) {
				numberOfEntries.push(docs.length);

				res.send(numberOfEntries);
  			});
  		});
  	});
	// Order.find({paymentType: type }, function(err,docs) {
 //    if (err) {
 //      return res.write('Error!');
 //    }
 //    numberOfEntries.push(docs.length);
 //    res.send(numberOfEntries);
 //  	});
});

module.exports = router;

function isLoggedIn(req, res, next) {
	console.log(req.user);
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/admin/signin');
}