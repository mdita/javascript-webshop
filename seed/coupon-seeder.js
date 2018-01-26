var Coupon = require('../models/coupon');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var coupons = [
	new Coupon({
	discount: 0.1,
	code: 'ABCD'
	}),
	new Coupon({
	discount: 0.2,
	code: 'ABCE'
	})
];

var done = 0;
for(var i = 0; i < coupons.length; i++) {
	console.log('merge' + i);
	coupons[i].save(function(err,result) {
		done++;
		if (done === coupons.length) {
			exit();
		}
	});
}

function exit() {
	console.log('se desconecteaza...');
	mongoose.disconnect();
}