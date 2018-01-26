var Category = require('../models/category');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var categories = [
	new Category({
	name : "Category Test 1",
	description : "descriere electro",
	subcategory: ["Subcategory test 1","Subcategory test 2"]
	}),
	new Category({
	name : "Category Test 2",
	description : "descriere tehno SMART",
	subcategory: ["Subcategory test 3"]
	}),
	new Category({
	name : "DJI Phantom Series",
	description : "descriere DJI Phantom Series",
	subcategory: ["DJI Phantom 4 Pro","DJI Phantom 4 | Advanced", "DJI Phantom 3", "Phantom 2 Accessories"]
	}),
	new Category({
	name : "DJI Inspire Series",
	description : "descriere DJI Inspire Series",
	subcategory: ["DJI Inspire 2", "DJI Inspire 1"]
	}),
	new Category({
	name : "DJI Matrice Series",
	description : "descriere DJI Matrice Series",
	subcategory: ["Matrice 600", "Matrice 200", "Matrice 100"]
	}),
	new Category({
	name : "DJI Professional",
	description : "DJI Professional",
	subcategory: ["Agriculture drones", "Lightbridge", "Flight controler", "Accessories"]
	}),
	new Category({
	name : "Sport Camera | Accessories",
	description : "Sport Camera | Accessories",
	subcategory: ["Feiyu Tech", "GoPRO Hero", "SJCam"]
	}),
	new Category({
	name : "Blade Series",
	description : "Blade Series",
	subcategory: ["Blade", "Yuneec"]
	})
];

var done = 0;
for(var i = 0; i < categories.length; i++) {
	console.log('merge' + i);
	categories[i].save(function(err,result) {
		done++;
		if (done === categories.length) {
			exit();
		}
	});
}

function exit() {
	console.log('se desconecteaza...');
	mongoose.disconnect();
}