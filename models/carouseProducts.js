var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var schema = new Schema({
	imagePath: {type: String, required: true},
	title: {type: String, required: true},
	description: {type: String, required: true},
	price: {
    	usd: { type: Number, required: true },
    	eur: { type: Number, required: true }
  	},
	subcategory: {type: [Schema.Types.Mixed], required: true},
	qty: { type: Number, required: true },
	availability: {type: String, required: true},
	rating: { type: Number, required: true },
	galery: {type: [Schema.Types.Mixed], required: false},
	review: {type: [Schema.Types.Mixed], required: false},
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('carouselProduct', schema);