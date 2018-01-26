var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var schema = new Schema({
	product: {type: String, required: true},
	targertProduct: {type: String, required: true},
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Crossell', schema);