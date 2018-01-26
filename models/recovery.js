var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	uuid: {type: String, required: true},
	user: {type: String, required: true},
	createDate: { type: Date, required: true, default: Date.now, expires: 60}
});

module.exports = mongoose.model('Recovery', schema);