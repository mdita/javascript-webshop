var Crossell = require('../models/crosssell');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var crosssells = [
	new Crossell({
	product: '5946552bb6f6421aa4c3d16e',
	targertProduct: '5946552bb6f6421aa4c3d16f',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d16e',
	targertProduct: '5946552bb6f6421aa4c3d170',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d16f',
	targertProduct: '5946552bb6f6421aa4c3d16e',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d16f',
	targertProduct: '5946552bb6f6421aa4c3d170',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d170',
	targertProduct: '5946552bb6f6421aa4c3d16e',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d170',
	targertProduct: '5946552bb6f6421aa4c3d16f',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d162',
	targertProduct: '5946552bb6f6421aa4c3d163',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d162',
	targertProduct: '5946552bb6f6421aa4c3d164',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d162',
	targertProduct: '5946552bb6f6421aa4c3d165',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d163',
	targertProduct: '5946552bb6f6421aa4c3d162',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d163',
	targertProduct: '5946552bb6f6421aa4c3d164',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d163',
	targertProduct: '5946552bb6f6421aa4c3d165',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d163',
	targertProduct: '5946552bb6f6421aa4c3d166',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d164',
	targertProduct: '5946552bb6f6421aa4c3d167',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d164',
	targertProduct: '5946552bb6f6421aa4c3d168',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d165',
	targertProduct: '5946552bb6f6421aa4c3d169',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d165',
	targertProduct: '5946552bb6f6421aa4c3d16a',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d166',
	targertProduct: '5946552bb6f6421aa4c3d16b',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d166',
	targertProduct: '5946552bb6f6421aa4c3d168',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d166',
	targertProduct: '5946552bb6f6421aa4c3d167',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d167',
	targertProduct: '5946552bb6f6421aa4c3d168',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d167',
	targertProduct: '5946552bb6f6421aa4c3d169',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d167',
	targertProduct: '5946552bb6f6421aa4c3d16a',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d167',
	targertProduct: '5946552bb6f6421aa4c3d16b',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d16c',
	targertProduct: '5946552bb6f6421aa4c3d16d',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d16d',
	targertProduct: '5946552bb6f6421aa4c3d16c',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d171',
	targertProduct: '5946552bb6f6421aa4c3d174',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d171',
	targertProduct: '5946552bb6f6421aa4c3d175',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d171',
	targertProduct: '5946552bb6f6421aa4c3d176',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d172',
	targertProduct: '5946552bb6f6421aa4c3d177',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d172',
	targertProduct: '5946552bb6f6421aa4c3d178',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d172',
	targertProduct: '5946552bb6f6421aa4c3d179',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d173',
	targertProduct: '5946552bb6f6421aa4c3d171',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d173',
	targertProduct: '5946552bb6f6421aa4c3d172',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d174',
	targertProduct: '5946552bb6f6421aa4c3d171',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d174',
	targertProduct: '5946552bb6f6421aa4c3d172',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d174',
	targertProduct: '5946552bb6f6421aa4c3d173',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d174',
	targertProduct: '5946552bb6f6421aa4c3d175',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d174',
	targertProduct: '5946552bb6f6421aa4c3d179',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d177',
	targertProduct: '5946552bb6f6421aa4c3d178',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d177',
	targertProduct: '5946552bb6f6421aa4c3d179',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d189',
	targertProduct: '5946552bb6f6421aa4c3d18a',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d189',
	targertProduct: '5946552bb6f6421aa4c3d18b',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d189',
	targertProduct: '5946552bb6f6421aa4c3d18c',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d18a',
	targertProduct: '5946552bb6f6421aa4c3d18f',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d18a',
	targertProduct: '5946552bb6f6421aa4c3d190',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d18b',
	targertProduct: '5946552bb6f6421aa4c3d195',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d18b',
	targertProduct: '5946552bb6f6421aa4c3d19a',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d18b',
	targertProduct: '5946552bb6f6421aa4c3d198',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d18f',
	targertProduct: '5946552bb6f6421aa4c3d191',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d18f',
	targertProduct: '5946552bb6f6421aa4c3d194',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d195',
	targertProduct: '5946552bb6f6421aa4c3d199',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d195',
	targertProduct: '5946552bb6f6421aa4c3d197',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d195',
	targertProduct: '5946552bb6f6421aa4c3d198',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d17a',
	targertProduct: '5946552bb6f6421aa4c3d17b',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d17b',
	targertProduct: '5946552bb6f6421aa4c3d17a',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d17c',
	targertProduct: '5946552bb6f6421aa4c3d17d',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d17c',
	targertProduct: '5946552bb6f6421aa4c3d17e',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d17c',
	targertProduct: '5946552bb6f6421aa4c3d17f',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d183',
	targertProduct: '5946552bb6f6421aa4c3d182',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d183',
	targertProduct: '5946552bb6f6421aa4c3d184',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d186',
	targertProduct: '5946552bb6f6421aa4c3d187',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d187',
	targertProduct: '5946552bb6f6421aa4c3d186',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d187',
	targertProduct: '5946552bb6f6421aa4c3d188',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d19c',
	targertProduct: '5946552bb6f6421aa4c3d19d',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d19c',
	targertProduct: '5946552bb6f6421aa4c3d19e',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d1a2',
	targertProduct: '5946552bb6f6421aa4c3d1a3',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d1a2',
	targertProduct: '5946552bb6f6421aa4c3d1a4',
	}),
	new Crossell({
	product: '5946552bb6f6421aa4c3d1a2',
	targertProduct: '5946552bb6f6421aa4c3d1a5',
	})
];

var done = 0;
for(var i = 0; i < crosssells.length; i++) {
	console.log('merge' + i);
	crosssells[i].save(function(err,result) {
		done++;
		if (done === crosssells.length) {
			exit();
		}
	});
}

function exit() {
	console.log('se desconecteaza...');
	mongoose.disconnect();
}