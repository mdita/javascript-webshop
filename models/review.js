var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var schema = new Schema({
	product: {type: String, required: true},
	comment: {type: String, required: true},
	name: {type: String, required: true},
	time : { type : Date, default: Date.now }
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Review', schema);