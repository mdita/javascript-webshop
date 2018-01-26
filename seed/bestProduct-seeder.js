var bestProduct = require('../models/bestProducts');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');
console.log('importat.....');

var bestProducts = [
	new bestProduct({
	imagePath: 'https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png',
	title: 'productB 1',
	description: 'product_1',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Laptopuri"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png","https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png"],
	review: ["best product", "coool!!!"]
	}),
	new bestProduct({
	imagePath: 'https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png',
	title: 'productB 2',
	description: 'product_2',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Laptopuri"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png","https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png"],
	review: ["best product", "coool!!!"]
	}),
	new bestProduct({
	imagePath: 'https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png',
	title: 'productB 3',
	description: 'product_3',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Laptopuri"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png","https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png"],
	review: ["best product", "coool!!!"]
	})
];



var done = 0;
for(var i = 0; i < bestProducts.length; i++) {
	console.log('merge' + i);
	bestProducts[i].save(function(err,result) {
		done++;
		if (done === bestProducts.length) {
			exit();
		}
	});
}

function exit() {
	console.log('se desconecteaza...');
	mongoose.disconnect();
}