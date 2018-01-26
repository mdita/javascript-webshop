var Subcategory = require('../models/subcategory');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var subcategories = [
	new Subcategory({
	name : "Subcategory test 1",
	description : "descriere electro"
	}),
	new Subcategory({
	name : "Subcategory test 3",
	description : "descriere tehno SMART"
	}),
	new Subcategory({
	name : "Subcategory test 2",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "DJI Phantom 4 Pro",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "DJI Phantom 4 | Advanced",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "DJI Phantom 3",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "Phantom 2 Accessories",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "DJI Inspire 2",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "DJI Inspire 1",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "Matrice 600",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "Matrice 200",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "Matrice 100",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "Agriculture drones",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "Lightbridge",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "Flight controler",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "Accessories",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "Feiyu Tech",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "GoPRO Hero",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "SJCam",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "Blade",
	description : "descriere SMARTPHONES"
	}),
	new Subcategory({
	name : "Yuneec",
	description : "descriere SMARTPHONES"
	})
];

var done = 0;
for(var i = 0; i < subcategories.length; i++) {
	console.log('merge' + i);
	subcategories[i].save(function(err,result) {
		done++;
		if (done === subcategories.length) {
			exit();
		}
	});
}

function exit() {
	console.log('se desconecteaza...');
	mongoose.disconnect();
}