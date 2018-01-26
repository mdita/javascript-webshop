var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var schema = new Schema({
	name: {type: String, required: false},
	email: {type: String, required: false},
	password: {type: String, required: false},
	facebook: {
		id: {type: String, required: false},
		token: {type: String, required: false},
		email: {type: String, required: false},
		name: {type: String, required: false}
	},
	google: {
		id: {type: String, required: false},
		token: {type: String, required: false},
		email: {type: String, required: false},
		name: {type: String, required: false}
	}
});

schema.methods.encryptPassword = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

schema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', schema);