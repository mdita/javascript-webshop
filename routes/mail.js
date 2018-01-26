var express = require('express');
var router = express.Router();
var api_key = '';
var domain = '';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var mailcomposer = require('mailcomposer');
var fs = require('fs');
var path = require('path');
var filepath = path.join('C:/Users/Zorro/Desktop/work/proiecte/webshop1/', 'test.html');
var Recovery = require('../models/recovery');


router.get('/test', function(req, res, next) {
	var mihai = fs.readFileSync(filepath);

	var mail = mailcomposer({
  		from: 'you@samples.mailgun.org',
  		to: 'ditamihai@gmail.com',
  		subject: 'Test email subject',
  		text: 'Test email text',
  		html: mihai
	});

	mail.build(function(mailBuildError, message) {
 
	    var dataToSend = {
	        to: 'ditamihai@gmail.com',
	        message: message.toString('ascii')
	    };
 
	    mailgun.messages().sendMime(dataToSend, function (sendError, body) {
	        if (sendError) {
	            console.log(sendError);
	            return;
	        }
	    });
	});
});

router.get('/reset-password/:uuid', function(req, res, next) {
	var uuid = req.params.uuid;
	Recovery.findOne({'uuid': uuid}, function(err, recovery){
		if (err) {
			return done(err);
		}
		if (!recovery) {
			req.flash('error', "The link has expired.");
			res.redirect('/user/reset-password');
		}

		if (recovery) {
			console.log(recovery);
			var redirect = '/user/confirm-reset-password/' + uuid;
			res.redirect(redirect);
		}
	});
});


module.exports = router;