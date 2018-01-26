var Review = require('../models/review');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var reviews = [
	new Review({
	product: '591c943090dba511ec64a724',
	comment: 'cel mai tare din parcare',
	}),
	new Review({
	product: '591c943090dba511ec64a724',
	comment: 'test de tare pe bare',
	})
];

var done = 0;
for(var i = 0; i < reviews.length; i++) {
	console.log('merge' + i);
	reviews[i].save(function(err,result) {
		done++;
		if (done === reviews.length) {
			exit();
		}
	});
}

function exit() {
	console.log('se desconecteaza...');
	mongoose.disconnect();
}