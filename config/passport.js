var passport = require('passport');
var User = require('../models/user');
var UserFacebook = require('../models/userFacebook');
var Admin = require('../models/admin');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require('./auth');

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
		done(err, user);
	});
});

passport.use('local.signup', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
}, function(req, email, password, done) {
	req.checkBody('email', 'Invalid email').notEmpty().isEmail();
	req.checkBody('password', 'Invalid password').notEmpty().isLength({min:5});

	var errors = req.validationErrors();
	var passwordAgain = req.body.passwordAgain;
	var signupName = req.body.signupName;

	if (errors) {
		var messages = [];
		errors.forEach(function(error) {
			messages.push(error.msg);
		});
		return done(null, false, req.flash('error', messages));
	}
	User.findOne({'email': email}, function(err, user){
		if (err) {
			return done(err);
		}
		if (user) {
			return done(null, false, {message: 'Email is already in use.'});
		}

		if (password === passwordAgain) {
			var newUser = new User();
			newUser.name = signupName;
			newUser.email = email;
			newUser.password = newUser.encryptPassword(password);
			newUser.save(function(err, result) {
				if (err) {
					return done(err);
				}

			return done(null, newUser);
			});
		} else {
			return done(null, false, {message: 'Not the same password.'});
		}
	});
}));

passport.use('local.signin', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
}, function(req, email, password, done) {
	req.checkBody('email', 'Invalid email').notEmpty().isEmail();
	req.checkBody('password', 'Invalid password').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		var messages = [];
		errors.forEach(function(error) {
			messages.push(error.msg);
		});
		return done(null, false, req.flash('error', messages));
	}
	User.findOne({'email': email}, function(err, user){
		if (err) {
			return done(err);
		}
		if (!user) {
			return done(null, false, {message: 'No user found.'});
		}
		if (!user.validPassword(password)) {
			return done(null, false, {message: 'Wrong password.'});
		}
		return done(null, user);
	});
}));

passport.use('local.signinAdmin', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
}, function(req, email, password, done) {
	req.checkBody('email', 'Invalid email').notEmpty().isEmail();
	req.checkBody('password', 'Invalid password').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		var messages = [];
		errors.forEach(function(error) {
			messages.push(error.msg);
		});
		return done(null, false, req.flash('error', messages));
	}
	Admin.findOne({'email': email}, function(err, admin){
		console.log('a ajuns pe findOne');
		if (err) {
			console.log('1');
			return done(err);
		}
		if (!admin) {
			console.log('2');
			return done(null, false, {message: 'No user found.'});
		}
		if (!admin.validPassword(password)) {
			console.log('3');
			return done(null, false, {message: 'Wrong password.'});
		}
		console.log('4');
		return done(null, admin);
	});
}));

passport.use('local.changePassword', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'pass',
	passReqToCallback: true
}, function(req, email, password, done) {
	// console.log('sa vedem');
	// console.log(req.user.email);
	var newPassword = req.body.newPassword;
	var retypePassword = req.body.retypePassword;

	req.checkBody('email', 'Invalid email').notEmpty().isEmail();
	req.checkBody('pass', 'Invalid password').notEmpty();
	req.checkBody('newPassword', 'Invalid password').notEmpty();
	req.checkBody('retypePassword', 'Invalid password').notEmpty();
	var errors = req.validationErrors();
	console.log(errors)
	if (errors) {
		var messages = [];
		errors.forEach(function(error) {
			messages.push(error.msg);
		});
		return done(null, false, req.flash('error', messages));
	}

	User.findOne({'email': email}, function(err, user){
		if (err) {
			return done(err);
		}
		if (!user.validPassword(password)) {
			return done(null, false, {message: 'Wrong password.'});
		}
		if (newPassword != retypePassword) {
			return done(null, false, {message: 'not the same password'});
		}
		user.password = user.encryptPassword(retypePassword);
		user.save(function(err, result) {
			if (err) {
				return done(err);
			}
			return done(null, user);
		});
	});
}));

passport.use('facebook', new FacebookStrategy({
	    clientID: configAuth.facebookAuth.clientID,
	    clientSecret: configAuth.facebookAuth.clientSecret,
	    callbackURL: configAuth.facebookAuth.callbackURL,
	    profileFields: ["id","emails","name"]
	  },
	  function(accessToken, refreshToken, profile, done) {
	    	process.nextTick(function(){
	    		User.findOne({'facebook.id': profile.id}, function(err, user){
	    			if(err)
	    				return done(err);
	    			if(user)
	    				return done(null, user);
	    			else {
	    				var newUser = new User();
	    				newUser.facebook.id = profile.id;
	    				newUser.facebook.token = accessToken;
	    				newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
	    				newUser.facebook.email = profile.emails[0].value;

	    				newUser.save(function(err){
	    					if(err)
	    						throw err;
	    					return done(null, newUser);
	    				})
	    				console.log(profile);
	    			}
	    		});
	    	});
	    }
	));

passport.use('google', new GoogleStrategy({
	    clientID: configAuth.googleAuth.clientID,
	    clientSecret: configAuth.googleAuth.clientSecret,
	    callbackURL: configAuth.googleAuth.callbackURL
	  },
	  function(accessToken, refreshToken, profile, done) {
	    	process.nextTick(function(){
	    		User.findOne({'google.id': profile.id}, function(err, user){
	    			if(err)
	    				return done(err);
	    			if(user)
	    				return done(null, user);
	    			else {
	    				var newUser = new User();
	    				newUser.google.id = profile.id;
	    				newUser.google.token = accessToken;
	    				newUser.google.name = profile.displayName;
	    				newUser.google.email = profile.emails[0].value;

	    				newUser.save(function(err){
	    					if(err)
	    						throw err;
	    					return done(null, newUser);
	    				})
	    				console.log(profile);
	    			}
	    		});
	    	});
	    }

	));