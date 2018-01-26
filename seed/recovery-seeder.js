var Recovery = require('../models/recovery');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var recovery = [
	new Recovery({
	uuid : "58b95b80-16db-11e7-93ae-92361f002671",
	user : "test@user.com"
	}),
	new Recovery({
	uuid : "73b2b7a4-16dd-11e7-93ae-92361f002671",
	user : "test2@user.com"
	})
];

var done = 0;
for(var i = 0; i < recovery.length; i++) {
	console.log('merge' + i);
	recovery[i].save(function(err,result) {
		done++;
		if (done === recovery.length) {
			exit();
		}
	});
}

function exit() {
	console.log('se desconecteaza...');
	mongoose.disconnect();
}