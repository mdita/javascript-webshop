var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	discount: {type: Number, required: true},
	code: {type: String, required: true}
});

module.exports = mongoose.model('Coupon', schema);