var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Order = require('../models/order');
var User = require('../models/user');
var Cart = require('../models/cart');
var Recovery = require('../models/recovery');
var csrf = require('csurf');
var passport = require('passport');
var uuidV1 = require('uuid/v1');
var uuidV4 = require('uuid/v4');

var api_key = 'key-6134e0d7f8506d0c32adc4e0896ba3d6';
var domain = 'sandbox6e50aeb53ca94939b1b8b19aa3f157af.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var mailcomposer = require('mailcomposer');
var fs = require('fs');
var path = require('path');
var filepath = path.join('C:/Users/Zorro/Desktop/work/proiecte/webshop1/', 'test.html');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/profile', isLoggedIn,function(req, res, next) {
	var messages = req.flash('error');
	var successMsg = req.flash('success')[0];
	Order.find({user: req.user }, function(err, orders) {
		if (err) {
			return res.write('Error!');
		}
		var cart;
		orders.forEach(function(order) {
			cart = new Cart(order.cart);
			order.items = cart.generateArray();
		});
		var email = req.user.facebook.email ? 
			req.user.facebook.email : (req.user.google.email ? req.user.google.email : req.user.email);

		var name = req.user.facebook.name ?
			req.user.facebook.name : (req.user.google.name ? req.user.google.name : req.user.name);
		
		res.render('user/profile', {email: name, orders: orders, successMsg: successMsg, noMessage: !successMsg, messages: messages, hasErrors: messages.length>0});
	});
	//res.render('user/profile', {email: req.user.email});
});

router.get('/logout', isLoggedIn,function (req, res, next) {
	req.logout();
	res.redirect('/shop');
});

router.get('/change-password', isLoggedIn, function(req, res, next) {
	var messages = req.flash('error');
	var email = req.user.email;
  res.render('user/changePassword', { title: 'New password', email: email, csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length>0});
});

router.post('/change-password', isLoggedIn, passport.authenticate('local.changePassword', {
	successRedirect: '/user/profile',
	failureRedirect: '/user/change-password',
	badRequestMessage: 'e groasa',
	failureFlash: true
}));

router.use('/', notLoggedIn, function(req,res,next) {
	next();
});

router.get('/signup', function(req, res, next) {
	var messages = req.flash('error');
  res.render('user/signup', { title: 'Sign Up', csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length>0});
});

router.post('/signup', passport.authenticate('local.signup', {
	//successRedirect: '/user/profile',
	failureRedirect: '/user/signup',
	failureFlash: true
}), function(req,res,next) {
	sendRegistrationEmail(req.user.email, req);
	req.flash('success', 'Please check your email for activation.');
	res.redirect('/user/profile');
});

router.get('/signin', function(req, res, next) {
	var messages = req.flash('error');
	var successMsg = req.flash('success')[0];
	console.log(messages);
  res.render('user/signin', { title: 'Sign In', csrfToken: req.csrfToken(), successMsg: successMsg, noMessage: !successMsg, messages: messages, hasErrors: messages.length>0});
});

router.post('/signin', passport.authenticate('local.signin', {
	//successRedirect: '/user/profile',
	failureRedirect: '/user/signin',
	failureFlash: true
}), function(req,res,next) {
	if(req.session.oldUrl) {
		var red = req.session.oldUrl;
		req.session.oldUrl = null;
		res.redirect(red);
	} else {
		res.redirect('/user/profile');
	}
});

router.get('/reset-password', function(req, res, next) {
	var messages = req.flash('error');
	var successMsg = req.flash('success')[0];
	console.log(successMsg);
  res.render('user/resetPassword', { title: 'Reset password', csrfToken: req.csrfToken(), successMsg: successMsg, noMessage: !successMsg, messages: messages, hasErrors: messages.length>0});
});

router.post('/reset-password', function(req, res, next) {
	var email = req.body.email;
	User.findOne({'email': email}, function(err, user){
		if (err) {
			return done(err);
		}
		if (!user) {
			req.flash('error', "Email doesn't exist.");
			res.redirect('/user/reset-password');
		}
		if (user) {
			sendResetEmail(email, req);
			req.flash('success', 'A reset link was sent.');
			res.redirect('/user/reset-password');
		}
	});
});

router.get('/confirm-reset-password/:uuid', function(req, res, next) {
	var messages = req.flash('error');
	var uuid = req.params.uuid;
	Recovery.findOne({'uuid': uuid}, function(err, recovery){
		if (err) {
			return done(err);
		}
		if (!recovery) {
			res.redirect('/');
		}

		if (recovery) {
			res.render('user/newPassword', { title: 'Confirm new password', uuid: uuid, csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length>0});
		}
	});
});

router.post('/confirm-reset-password', function(req, res, next) {
	var newPassword = req.body.newPassword;
	var retypePassword = req.body.retypePassword;
	var uuid = req.body.uuid;

	if(newPassword != retypePassword) {
		req.flash('error', "not the same password.");
		var redirect = '/user/confirm-reset-password/' + uuid;
		return res.redirect(redirect);
	}

	Recovery.findOne({'uuid': uuid}, function(err, recovery){
		if (err) {
			return done(err);
		}
		if (!recovery) {
			req.flash('error', "expired...");
			return res.redirect('/');
		}

		User.findOne({'email': recovery.user}, function(err, user){
		if (err) {
			return done(err);
		}

		if (user) {
			user.password = user.encryptPassword(newPassword);
			user.save(function(err, result) {
			if (err) {
				return done(err);
			}
			req.flash('success', 'password has been reseted.');
			return res.redirect('/user/signin');
		});
		}
		});

	});

	// User.findOne({'email': email}, function(err, user){
	// 	if (err) {
	// 		return done(err);
	// 	}
	// 	if (!user) {
	// 		req.flash('error', "Email doesn't exist.");
	// 		res.redirect('/user/reset-password');
	// 	}
	// 	if (user) {
	// 		sendResetEmail(email, req);
	// 		req.flash('success', 'A reset link was sent.');
	// 		res.redirect('/user/reset-password');
	// 	}
	// });
});

router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

router.get('/auth/facebook/callback', 
	  passport.authenticate('facebook', { successRedirect: '/user/profile',
	                                      failureRedirect: '/' }));

router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/auth/google/callback', 
	  passport.authenticate('google', { successRedirect: '/user/profile',
	                                      failureRedirect: '/' }));

module.exports = router;

function isLoggedIn(req, res, next) {
	console.log(req);
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}

function notLoggedIn(req, res, next) {
	if (!req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}


function sendRegistrationEmail(user,req) {
	console.log(user);
	var data = {
  from: 'Online Shop Welcome <me@samples.mailgun.org>',
  to: 'ditamihai@gmail.com',
  subject: 'Hello',
  text: 'You are receiving this because you (or someone else) have registred on our ecommerce website.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the activation process:\n\n' +
          'http://' + req.headers.host + '/user/signin/' + '\n\n' +
          'If you did not request this, please ignore this email.\n'
};
	mailgun.messages().send(data, function (error, body) {
		  if (error) {
		  	req.flash('error', error);
		  	res.redirect('/user/signup');
  		  }
		});
	// var mihai = fs.readFileSync(filepath);

	// var mail = mailcomposer({
 //  		from: 'you@samples.mailgun.org',
 //  		to: 'ditamihai@gmail.com',
 //  		subject: 'Test email subject',
 //  		text: 'Test email text',
 //  		html: mihai
	// });

	// mail.build(function(mailBuildError, message) {
 
	//     var dataToSend = {
	//         to: 'ditamihai@gmail.com',
	//         message: message.toString('ascii')
	//     };
 
	//     mailgun.messages().sendMime(dataToSend, function (sendError, body) {
	//         if (sendError) {
	//             console.log(sendError);
	//             return;
	//         }
	//     });
	// });
}

function sendResetEmail(user, req) {
	console.log(user);
	console.log(uuidV1());
	var mihai = fs.readFileSync(filepath);
	var uuid = uuidV1();

var data = {
  from: 'Online Shop Reset password <me@samples.mailgun.org>',
  to: 'ditamihai@gmail.com',
  subject: 'Hello',
  text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/mail/reset-password/' + uuid + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
};

var recovery = new Recovery({
      uuid: uuid,
      user: user
});
    recovery.save(function(err, result) {
    	if (err) {
    		req.flash('error', err.message);
    		res.redirect('/user/reset-password');
    	}

    	mailgun.messages().send(data, function (error, body) {
		  if (error) {
		  	req.flash('error', err.message);
		  	res.redirect('/user/reset-password');
  		  }
		});
    });
}