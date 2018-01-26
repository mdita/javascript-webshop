var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User'},
	cart: {type: Object, required: true},
	address: {type: String, required: true},
	name: {type:String, required: true},
	paymentId: {type:String, required:true},
	currency: {type:String, required:true},
	paymentType: {type:String, required:true},
	totalBTC: {type:String, required: false}
});

module.exports = mongoose.model('Order', schema);