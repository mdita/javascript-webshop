var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');
console.log('importat.....');

// var query = { title: 'product 77' };
// Product.update(query, { price: {usd:69,eur:69} }, function (err, res) {
// 	console.log(res);
// });

/*
var products = [
	new Product({
	imagePath: 'https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png',
	title: 'product 1',
	description: 'product_1',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png","https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png',
	title: 'product 2',
	description: 'product_2',
	price: {
		usd: 20,
		eur: 0
	},
	subcategory: ["Subcategory test 1", "Subcategory test 3"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png","https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png',
	title: 'product 3',
	description: 'product_3',
	price: {
		usd: 10,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png","https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png',
	title: 'product 4',
	description: 'product_4',
	price: {
		usd: 5,
		eur: 0
	},
	subcategory: ["Subcategory test 3"],
	qty: 10
	}),new Product({
	imagePath: 'https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png',
	title: 'product 5',
	description: 'product_5',
	price: {
		usd: 13,
		eur: 0
	},
	subcategory: ["Subcategory test 3"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png","https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png',
	title: 'product 6',
	description: 'product_5',
	price: {
		usd: 30,
		eur: 0
	},
	subcategory: ["Subcategory test 1", "Subcategory test 3"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png","https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png',
	title: 'product 7',
	description: 'product_7',
	price: {
		usd: 25,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png","https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png',
	title: 'product 8',
	description: 'product_8',
	price: {
		usd: 26,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png","https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png',
	title: 'product 9',
	description: 'product_9',
	price: {
		usd: 31,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png","https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://s5emagst.akamaized.net/products/2426/2425975/images/res_13cefdc93b72408a7affdc90164f91d9_450x450_46h0.jpg',
	title: 'productB 1',
	description: 'product_1',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://s5emagst.akamaized.net/products/2426/2425975/images/res_13cefdc93b72408a7affdc90164f91d9_450x450_46h0.jpg","https://s5emagst.akamaized.net/products/2426/2425975/images/res_708fa68579c1ee1359f93a062c878ccd_450x450_c0sc.jpg","https://s5emagst.akamaized.net/products/2426/2425975/images/res_3765decd32250e7cf59cbfc7deb18c2b_80x80_kp52.jpg","https://s5emagst.akamaized.net/products/2426/2425975/images/res_569787df104492f3f9b493efe6dfa226_80x80_urgh.jpg"],
	review: ["best product", "coool!!!"],
	type: 'bestProduct'
	}),
	new Product({
	imagePath: 'https://s5emagst.akamaized.net/products/4430/4429362/images/res_59b233729ee887d031a3af792cd13956_450x450_fk4n.jpg',
	title: 'productB 2',
	description: 'product_2',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://s5emagst.akamaized.net/products/4430/4429362/images/res_59b233729ee887d031a3af792cd13956_450x450_fk4n.jpg","https://s5emagst.akamaized.net/products/4430/4429362/images/res_5188f2f4904968308d14a14d1671fd69_450x450_dj9e.jpg","https://s5emagst.akamaized.net/products/4430/4429362/images/res_67f07217ee8b758ac4fb8e1bcab5a828_450x450_ffs2.jpg"],
	review: ["best product", "coool!!!"],
	type: 'bestProduct'
	}),
	new Product({
	imagePath: 'https://s5emagst.akamaized.net/products/4680/4679449/images/res_e417ffecf2a72fe069c5d2aa81b00c29_450x450_rism.jpg',
	title: 'productB 3',
	description: 'product_3',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://s5emagst.akamaized.net/products/4680/4679449/images/res_e417ffecf2a72fe069c5d2aa81b00c29_450x450_rism.jpg","https://s5emagst.akamaized.net/products/4680/4679449/images/res_1fc86f0902600d711ed22a896638e0f1_450x450_5oko.jpg","https://s5emagst.akamaized.net/products/4680/4679449/images/res_cb4db11d5237228596902c5be623ae47_450x450_sfdg.jpg"],
	review: ["best product", "coool!!!"],
	type: 'bestProduct'
	}),
	new Product({
	imagePath: 'https://s5emagst.akamaized.net/products/4680/4679449/images/res_e417ffecf2a72fe069c5d2aa81b00c29_450x450_rism.jpg',
	title: 'productB 3 outOfstock',
	description: 'product_3',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'outOfStock',
	rating: 10,
	galery: ["https://s5emagst.akamaized.net/products/4680/4679449/images/res_e417ffecf2a72fe069c5d2aa81b00c29_450x450_rism.jpg","https://s5emagst.akamaized.net/products/4680/4679449/images/res_1fc86f0902600d711ed22a896638e0f1_450x450_5oko.jpg","https://s5emagst.akamaized.net/products/4680/4679449/images/res_cb4db11d5237228596902c5be623ae47_450x450_sfdg.jpg"],
	review: ["best product", "coool!!!"],
	type: 'bestProduct'
	}),
	new Product({
	imagePath: 'https://s5emagst.akamaized.net/products/4587/4586632/images/res_59474b2376998a2209b65f299a9c9f20_450x450_r5if.jpg',
	title: 'productB 4',
	description: 'product_4',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://s5emagst.akamaized.net/products/4587/4586632/images/res_59474b2376998a2209b65f299a9c9f20_450x450_r5if.jpg","https://s5emagst.akamaized.net/products/4587/4586632/images/res_44a2f9e45fc3734308983ff4d60ddaeb_450x450_o608.jpg","https://s5emagst.akamaized.net/products/4587/4586632/images/res_d324b7ad9c4f755d172cb370b0cbfa1f_450x450_sv3l.jpg"],
	review: ["best product", "coool!!!"],
	type: 'bestProduct'
	}),
	new Product({
	imagePath: 'https://s5emagst.akamaized.net/products/4282/4281690/images/res_6dfd725523534f56a84665d30c5d2bce_450x450_li8f.jpg',
	title: 'productB 5',
	description: 'product_5',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://s5emagst.akamaized.net/products/4282/4281690/images/res_6dfd725523534f56a84665d30c5d2bce_450x450_li8f.jpg","https://s5emagst.akamaized.net/products/4282/4281690/images/res_d0ae52aec77bad1fe38f60de0a5c6244_450x450_sa2f.jpg","https://s5emagst.akamaized.net/products/4282/4281690/images/res_215731ffaf84a21e98f4c56ac50bcb62_450x450_fhbj.jpg"],
	review: ["best product", "coool!!!"],
	type: 'bestProduct'
	}),
	new Product({
	imagePath: 'https://s5emagst.akamaized.net/products/5085/5084675/images/res_84fdf37060208a1aa51bc957ab48cd97_450x450_nhtg.jpg',
	title: 'productB 6',
	description: 'product_6',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://s5emagst.akamaized.net/products/5085/5084675/images/res_84fdf37060208a1aa51bc957ab48cd97_450x450_nhtg.jpg","https://s5emagst.akamaized.net/products/5085/5084675/images/res_21a48b204b9286076fd93c07d90dc38e_450x450_hpd9.jpg","https://s5emagst.akamaized.net/products/5085/5084675/images/res_ff24e5b42f6a5bc57d7c80fa6ad9319e_450x450_uej7.jpg"],
	review: ["best product", "coool!!!"],
	type: 'bestProduct'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/09/DJI-Mavic_03.jpg',
	title: 'productC 1',
	description: 'product_1',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/09/DJI-Mavic_03.jpg","https://dronshop.ro/wp-content/uploads/2016/09/DJI-Mavic_telecomnda.jpg","https://dronshop.ro/wp-content/uploads/2016/09/DJI-Mavic_telecomnda.jpg","https://dronshop.ro/wp-content/uploads/2016/09/DJI-Mavic_03.jpg"],
	review: ["best product", "coool!!!"],
	type: 'carouselProduct'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/03/dji-phantom-4.jpg',
	title: 'productC 2',
	description: 'product_2',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/03/dji-phantom-4.jpg","https://dronshop.ro/wp-content/uploads/2016/03/medium_p6.jpg"],
	review: ["best product", "coool!!!"],
	type: 'carouselProduct'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/04/Mavic-Pro-Travel-Combo_.jpg',
	title: 'productC 3',
	description: 'product_3',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/04/Mavic-Pro-Travel-Combo_.jpg","https://dronshop.ro/wp-content/uploads/2017/04/Mavic-Pro-Travel-Combo_.jpg"],
	review: ["best product", "coool!!!"],
	type: 'carouselProduct'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/09/DJI-Mavic-Pro-Fly-More-Combo.jpg',
	title: 'productC 4',
	description: 'product_4',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/09/DJI-Mavic-Pro-Fly-More-Combo.jpg","https://dronshop.ro/wp-content/uploads/2016/09/DJI-Mavic_telecomnda_02.jpg","https://dronshop.ro/wp-content/uploads/2016/09/DJI-Mavic_01-1.jpg"],
	review: ["best product", "coool!!!"],
	type: 'carouselProduct'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/04/DJI-Osmo-Silver-Extra-Battery.jpg',
	title: 'productC 5',
	description: 'product_5',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/04/DJI-Osmo-Silver-Extra-Battery.jpg"],
	review: ["best product", "coool!!!"],
	type: 'carouselProduct'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/05/dji_spark_.jpg',
	title: 'productC 6',
	description: 'product_6',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/05/dji_spark_.jpg","https://dronshop.ro/wp-content/uploads/2017/05/DJI_Spark_drone.jpg","https://dronshop.ro/wp-content/uploads/2017/05/dji_spark_01.jpg"],
	review: ["best product", "coool!!!"],
	type: 'carouselProduct'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/11/DJI-Inspire-2-Craft.jpg',
	title: 'productC 7',
	description: 'product_7',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/11/DJI-Inspire-2-Craft.jpg","https://dronshop.ro/wp-content/uploads/2016/11/Drona-DJI-Inspire-2_04.jpg","https://dronshop.ro/wp-content/uploads/2016/11/Drona-DJI-Inspire-2_03.jpg"],
	review: ["best product", "coool!!!"],
	type: 'carouselProduct'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/09/yuneec-breeze-4K_01.jpg',
	title: 'productC 8',
	description: 'product_8',
	price: {
		usd: 24,
		eur: 0
	},
	subcategory: ["Subcategory test 1"],
	qty: 5,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/09/yuneec-breeze-4K_01.jpg","https://dronshop.ro/wp-content/uploads/2016/09/Yuneec-Breeze-4K.jpg","https://dronshop.ro/wp-content/uploads/2016/09/Yuneec-Breeze-4K_02.jpg"],
	review: ["best product", "coool!!!"],
	type: 'carouselProduct'
	})
];
*/

// var products = [
// 	new Product({
// 	imagePath: 'https://ctmsrnstorage.blob.core.windows.net/ctmsrnstorage/volunteerprofilepics/JesueLucasDiogo_553b0002-b80d-4aa3-91d0-de6f88dd90ad.png',
// 	title: 'product 10',
// 	description: 'shit is serios...',
// 	price: 50
// 	})
// ];

var products = [
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/11/DJI-Phantom-4-Pro-64Gb-Sd-Card-1.jpg',
	title: 'DJI Phantom 4 PRO – RC Screen',
	description: 'DJI',
	description_full: 
	`DJI Phantom 4 PRO - RC screen
DJI Phantom 4 PRO - RC screen - with a 20 MP camera sensor with a 1-inch Exmor R CMOS, increased flight time and more ways to fly.

The camera is equipped with a sensor new 1-inch 20-megapixel camera capable of shooting at a resolution 4K / 14fps 60fps in burst mode. The adoption of a construction of the shell of titanium and magnesium make it more rigid and reduce the weight, having a weight Phantom 4 Pro thus almost the same as Phantom4. The FlightAutonomy add vision sensors and infrared sensors on the back drone, drone with sensors asftel five directions and avoiding obstacles in their four directions.

Radio remote control with built-in screen
Radio remote from drone Phnatom 4 Pro incoporeaza Lightbridge inbunatatit system that adds support for 5.8 GHz transmission.

A built-in 5.5 inch screen (or 7.85inch) offers a brightness of 1000 cd / m2, almost two times brighter than conventional tablets. With this screen no longer need a phone or tablet, making it easier to give fly in less time training. DJI GO application is built into the screen is optimized for this system. With HDMI, Micro-SD card socket, microphone, speakers and Wi-Fi built-in, you can edit photos directly on GO DJI thus may be inpartasata instant. Utulizare a charging time is 5:00.`,
	price: {
		usd: 50,
		eur: 0
	},
	subcategory: ["DJI Phantom 4 Pro"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/11/DJI-Phantom-4-Pro-64Gb-Sd-Card-1.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/11/DJI-Phantom-4-Pro-64Gb-Sd-Card.jpg',
	title: '4 PRO DJI Phantom',
	description: 'DJI',
	description_full: 
	`4 PRO DJI Phantom
DJI Phantom 4 PRO with a camera of 20 MP with a 1-inch sensor EXMOR R CMOS, and increased flight time of flight several ways.

The camera is equipped with a sensor new 1-inch 20-megapixel camera capable of shooting at a resolution 4K / 14fps 60fps in burst mode. The adoption of a construction of the shell of titanium and magnesium make it more rigid and reduce the weight, having a weight Phantom 4 Pro thus almost the same as Phantom4. The FlightAutonomy add vision sensors and infrared sensors on the back drone, drone with sensors asftel five directions and avoiding obstacles in their four directions.

radio remote
Radio remote from drone Phnatom 4 Pro incoporeaza Lightbridge inbunatatit system that adds support for 5.8 GHz transmission.

Intelligent Flight Modes
Draw: draw is a new technology for pre flight. Just draw the route on screen and Phantom 4 Pro will fly in the direction of maintaining height.

ActiveTrack
4 Phantom Pro automatically recognizes the subject and follows the capturing movement. The pilot can select between May following ways:

Tracking: Track selected subject back, avoiding obstacles automatically.
Profile: Drone fly near the selected subject.
Spotlight: Keep the camera on topic no matter the direction of flight.
TapFly
Drone will fly in the direction where the screen was pressed.

Gesturing mode
How it gives utilizatoruilui commands by gesture to give the opportunity to take pictures without having radio remote control in hand.`,
	price: {
		usd: 75,
		eur: 0
	},
	subcategory: ["DJI Phantom 4 Pro"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/11/DJI-Phantom-4-Pro-64Gb-Sd-Card.jpg","https://dronshop.ro/wp-content/uploads/2016/11/Drona-DJI-Phantom-4-Pro.jpg","https://dronshop.ro/wp-content/uploads/2016/11/Drona-DJI-Phantom-4-Pro_03.jpg","https://dronshop.ro/wp-content/uploads/2016/11/Drona-DJI-Phantom-4-Pro_02.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/04/DJI-Phantom-4-Advanced.jpg',
	title: 'DJI Phantom 4 Advanced',
	description: 'DJI',
	description_full: 
	`DJI Phantom 4 Advanced
Inteliugenta visionary. High imagination.

A greatly improved cameraa, the sensor is equipped with a 1- inch 20 mexapixeli, capail to photograph 4k / 60fps video and Burst Mode 14 ps. The flight includes five sensors for two directions to avoid obstacles. The adoption of titanium and magnesium alloy increases the rigidity of the body of the aircraft and reduces the weight, so the drone 4 Advanced Phantom Phantom is lighter than four.

The camera on board the CMOS sensor is equipped with a 1-inch, 20 megapixels. Personalized engineers lens consists of eight elements arranged in seven groups. The mechanical shutter is used to remove deformation occurring in the electronic shutter. In fact it is so powerful as traditional photographic cameras. Video processor strongest support 4K video recording mode H264 at 60 fps or 30 fps H265 to 4K, both 100 Mbps. Excellent optical performance, sensor and processor ensures everything is captured with high dynamic range.

 

Radio remote control with built-in screen
Radio remote from drone Phnatom 4 Pro incoporeaza Lightbridge inbunatatit system that adds support for 5.8 GHz transmission.

A built-in 5.5 inch screen (or 7.85inch) offers a brightness of 1000 cd / m2, almost two times brighter than conventional tablets. With this screen no longer need a phone or tablet, making it easier to give fly in less time training. DJI GO application is built into the screen is optimized for this system. With HDMI, Micro-SD card socket, microphone, speakers and Wi-Fi built-in, you can edit photos directly on GO DJI thus may be inpartasata instant. Utulizare a charging time is 5:00.

Intelligent Flight Modes
Draw: draw is a new technology for pre flight. Just draw the route on screen and Phantom 4 Pro will fly in the direction of maintaining height.

ActiveTrack
4 Phantom Pro automatically recognizes the subject and follows the capturing movement. The pilot can select between May following ways:

Tracking: Track selected subject back, avoiding obstacles automatically.
Profile: Drone fly near the selected subject.
Spotlight: Keep the camera on topic no matter the direction of flight.
TapFly
Drone will fly in the direction where the screen was pressed.

Gesturing mode
How it gives utilizatoruilui commands by gesture to give the opportunity to take pictures without having radio remote control in hand.`,
	price: {
		usd: 100,
		eur: 0
	},
	subcategory: ["DJI Phantom 4 | Advanced"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/04/DJI-Phantom-4-Advanced.jpg","https://dronshop.ro/wp-content/uploads/2017/04/DJI-Phantom-4-Advanced_01.jpg","https://dronshop.ro/wp-content/uploads/2017/04/DJI-Phantom-4-Advanced_05.jpg","https://dronshop.ro/wp-content/uploads/2017/04/DJI-Phantom-4-Advanced_02.jpg","https://dronshop.ro/wp-content/uploads/2017/04/DJI-Phantom-4-Advanced_06.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/03/dji-phantom-4.jpg',
	title: 'DJI Phantom 4',
	description: 'DJI',
	description_full: 
	`New DJI Phantom Series 4 is faster and smarter than previous models. It is able to automatically track objects and people on the move.

The anti-vibration of the gimbal (3-axis stabilizer) and the drone is located inside a structure with magnesium. The engines were raised arms for a clearer view. The drone body are four small cameras, two in front and two in drone drone, drone that allow tracking objects at a distance between 0.7 m and 15 m.

The main camera generates video in 4K. The Push and Release (press / attaching motor) brings more safety drone in flight. 4 Phantom drone has two new features: Obstacle Sensing System (automatic tracking of objects and people) and Active Track (tracking moving / active).

Drone weight is 1380 grams, the battery cell has 4 (4S lipo) of the power 81Wh 5350mAh which allows a more efficient flight about 28 minutes covering a distance of 5 km. 4K camera shoots at 30 fps and 120 fps Full HD.`,
	price: {
		usd: 120,
		eur: 0
	},
	subcategory: ["DJI Phantom 4 | Advanced"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/03/dji-phantom-4.jpg", "https://dronshop.ro/wp-content/uploads/2016/03/medium_p6.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/08/DJI-Phantom-3-Standard.jpg',
	title: 'DJI Phantom 3 Standard',
	description: 'DJI',
	description_full: 
	`DJI Phantom drone Chamber 2.7K 3 Standard  is a complete kit.

Package contains drone (quadcopter) , a manual, a acumultator Li-Po 4480mAh high capacity

offering a flight time of up to 25 minutes maximum flight speed of 16m / s,

4 sets of propellers (CW / CCW), a transmitter, a battery charger and three-axis gimbal to stabilize the camera with a high resolution, which allows a 2.7K shooting and shooting in the air in 12 megapixels, a micro SD card.

The maximum transmission distance: EC: 500m, FCC: 1000m (unhindered and without interference).`,
	price: {
		usd: 85,
		eur: 0
	},
	subcategory: ["DJI Phantom 3"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/08/DJI-Phantom-3_2.jpg","https://dronshop.ro/wp-content/uploads/2015/08/large_P3C_03.jpg","https://dronshop.ro/wp-content/uploads/2015/08/large_P3C_04.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/10/Elici-E300-din-Carbon-DJI-Phantom-.jpg',
	title: 'E300 Carbon – Phantom 3',
	description: 'DJI',
	description_full: 
	`300 Carbon propellers for DJI Phantom:

The kit contains two carbon fiber propellers E300 9 inches (CW / CCW), one left and one to the rotation of the rotation to the right. Color black wires are yellow propeller.

Propellers are optimized for aerodynamic, allowing greater force than previous models.

It is compatible with DJI Phantom 3 / DJI Phantom 2.

Weight: 13 g (one); Diameter: 24 x 12.7 cm

E300 propellers of DJI Phantom Carbon is made of high quality carbon fiber. 
It is a professional design, easy to install, has a superior balance, easy and practical. 
These propellers help reduce unwanted vibrations or other effects.`,
	price: {
		usd: 21,
		eur: 0
	},
	subcategory: ["Phantom 2 Accessories"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/10/Elici-E300-din-Carbon-DJI-Phantom-.jpg","https://dronshop.ro/wp-content/uploads/2015/10/Elici-E300-din-Carbon-DJI-Phantom-.jpg","https://dronshop.ro/wp-content/uploads/2015/10/E300-DJI-Phantom-Elici-din-carbon.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/06/Inteligent-Battery-DJI-Ph2-02.jpg',
	title: 'Intelligent Battery - DJI Phantom 2',
	description: 'DJI',
	description_full: 
	`Dji Phantom 2 - battery drone DJI Phantom 2

Battery for drone DJI Phantom 2 provides a range of up to 25 minutes of flight and mounts easily. For professional filming sessions it is recommended to have more spare batteries, to face any challenge. 
• Capacity: 5200mAh 
• Technology: Lithium-Polymer battery 
• Battery life: up to 25 minutes

• Power Management Integrated 
• Quick Installation 
• 4 LED indicator remaining capacity`,
	price: {
		usd: 134,
		eur: 0
	},
	subcategory: ["Phantom 2 Accessories"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/06/Inteligent-Battery-DJI-Ph2-02.jpg","https://dronshop.ro/wp-content/uploads/2015/06/Inteligent-Battery-DJI-Ph2-02.jpg","https://dronshop.ro/wp-content/uploads/2015/06/Inteligent-Battery-DJI-Ph2-01.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/06/Amortizoare-cauciuc.jpg',
	title: 'Vibration dampers - Silencers Rubber - Phantom ',
	description: 'DJI',
	description_full: 
	`Rubber shock absorbers - DJI Phantom
Rubber shock absorbers is a set of eight pieces of rubber balls with plastic nails are used for vibration damping. The set is found separate plastic nails.`,
	price: {
		usd: 9,
		eur: 0
	},
	subcategory: ["Phantom 2 Accessories"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/06/Amortizoare-cauciuc.jpg","https://dronshop.ro/wp-content/uploads/2016/06/Amortizoare-cauciuc.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/01/USB-charger-from-P2P3-or-Inspire-batteries.jpg',
	title: 'USB Charger Ph2 / Ph3 - Inspire Batteries ',
	description: 'DJI',
	description_full: 
	`USB adapter for Phantom 2, 3 or battery Phantom Inspire.

SPC17 is a double adapter accessory power (mobile, tablet, etc.). Accumulators Phantom 2 or the first draw this adapter, you can use battery powered charging through USB accessories in field conditions, with a capacity of 5200mAh battery always this device is fully charged.`,
	price: {
		usd: 36,
		eur: 0
	},
	subcategory: ["Phantom 2 Accessories"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/01/USB-charger-from-P2P3-or-Inspire-batteries.jpg","https://dronshop.ro/wp-content/uploads/2016/01/USB-charger-from-P2P3-or-Inspire-batteries.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/10/Suport-pt.-Monitor-FPV.jpg',
	title: 'Support for. FPV Monitor',
	description: 'DJI',
	description_full: 
	`USB adapter for Phantom 2, 3 or battery Phantom Inspire.

SPC17 is a double adapter accessory power (mobile, tablet, etc.). Accumulators Phantom 2 or the first draw this adapter, you can use battery powered charging through USB accessories in field conditions, with a capacity of 5200mAh battery always this device is fully charged.`,
	price: {
		usd: 22,
		eur: 0
	},
	subcategory: ["Phantom 2 Accessories"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/10/Suport-pt.-Monitor-FPV.jpg","https://dronshop.ro/wp-content/uploads/2015/10/Suport-Monitor-FPV-01.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/11/DJI-Inspire-2-Craft.jpg',
	title: 'DJI Inspire 2 – Craft',
	description: 'DJI',
	description_full: 
	`DJI Inspire 2 - Craft
DJI Inspire 2 is the newest and the most advanced range drone DJI manufacturer.

Inspire 1 drone was a revolution. The first drone with a real-time video transmission in HD with a 360-degree rotating gimbal and camera 4K and easily control the application DJI GO. The disclosure rooms Zenmuse X5 and X5R, Inspire one became an essential tool for the cinema.

Inspire 2 took everything that was good to inspire the one and inbunatatit it. An image processing system which enables a totally new record video at 5.2K in CinemaDNG RAW, Apple ProRes and other. It has acceleration from 0-80 kph in just 4 seconds with a top speed of 108 kph, with a maximum deceleration speed of 9 m / s, with such a speed and agility unmatched in size drone. A system of two batteries prolongs flight up to 27 minutes (room X4S) and self-heating technology allows flight in low temperatures. FlightAutonomy system was completely changed adding all flight modes smart to 4 Phantom drones and Mavic. A video transmission system greatly improved signal allows two frequencies and two channels to provide simultaneous image from the camera and camera based FPV (X4S or X5S) for easier collaboration between pilot and camera operator.

drone
Structure: Housing constructed of a composite of magnesium and aluminum with carbon fiber arms.

Configuration: Sensors Vision Camera FPV 2-axis, the wide range of compatible cameras.

Drive system: The maximum speed of 108 kph, the propeller 15 inches, the maximum flight time of 27 minutes (room X4S).

Battery System with dual batteries, heating, 98Wh.

Image processing and storage: 5.2K@4.2Gbps RAW video Cinecore 2.0 DJI CINESSD ingegrata.

Video Format: Supports 5.2K CinemaDNG and Apple ProRes, H.265 and H.264 codecs, 4K video at 100Mbps. Recordings can be stored simultaneously DJI CINESSD and Micro-SD card.

Memoire card format: FAT32 / exFAT

remote
Frequency signal varies between 2.4 GHz and 5.8 GHz for the best result, Technology Lightbridge.
Range: 7 km
Master mode - Slave: More radiotelecomenzi mode supported SLAC.
Ports: Port expansion, HDMI port, USB port.
Sense and avoid
System "view" to the direction of travel and down allow drone Inspire 2 detecting obstacles at a distance of 30 meters, enabling a protected flight at a speed of 54 kph at an inclination of 25 degrees controllable. Infrared sensor scans over drone at a distance of 5 meters, adaugund such a layer of security when flying in enclosed places. Obstacle avoidance systems have are active in normal flight, RTH (return stickers) and intelligent flight modes.

Optimized transmission and control system
Improving the latest Technology Lightbridge has a transmission distance of up to 7 km and is capable of transmitting in 1080p and 720p and transmit video from your FPV. Users can switch between 2.4 GHz and 5.8 GHz frequencies for interference crosses.

Broadcast mode
INSPIRE 2 is perfect for broadcasting live image through 1080i50 and 720p60 dedicated signals.

Optional accessories for the improvement performance
DJI CINESSD Station - is used to connect to a computer DJI CINESSD for fast and efficient data transfer.

DJI CINESSD - use interfaces used specificatille NVMe logic devices having petra Express1 PCI slots and formats FAT32 / exFAT32 supported. They are available with a storage capacity of 120GB or 480GB. They have a write speed of 4.2Gbps.

DJI dedicated screen
5.5inch screen, 1000 cd / m2, 7.85inch 1000 cd / m2 and 7.85inch 2000 cd / m2, manufactured by DJI and offers unparalleled brightness and clarity for shooting in bright light.

DJI Focus
Control focus at X5S Zenmuse room.

Battery charging station
A battery charging station 800W load eight pieces of batteries Inspire 2 even taking place to store four smart batteries and charger standard.`,
	price: {
		usd: 220,
		eur: 0
	},
	subcategory: ["DJI Inspire 2"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/11/DJI-Inspire-2-Craft.jpg","https://dronshop.ro/wp-content/uploads/2016/11/Drona-DJI-Inspire-2_04.jpg","https://dronshop.ro/wp-content/uploads/2016/11/Drona-DJI-Inspire-2_02.jpg","https://dronshop.ro/wp-content/uploads/2016/11/Drona-DJI-Inspire-2_01.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/03/dji-Inspire2_premium_combo.jpg',
	title: 'DJI Inspire 2 Premium Combo',
	description: 'DJI',
	description_full: 
	`In The Box

Aircraft Body ×1
Remote Controller ×1
Propellers (Pair) ×4
Intelligent Flight Battery(TB50) ×2
Battery Charger ×1
Charging Hub ×1
Power Cable ×1
USB Cable (with Double A Ports) ×1
Micro SD Card (16GB) ×1
Vision System Carlibration Plate ×1
Gimbal Damper ×3
Propeller Mounting Plates ×1
Carrying Case ×1
Battery Insulation Sticker ×4
Manuals`,
	price: {
		usd: 300,
		eur: 0
	},
	subcategory: ["DJI Inspire 2"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/03/dji-Inspire2_premium_combo.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/05/DJI-Inspire-1-v2.jpg',
	title: 'DJI Inspire 1 v2.0',
	description: 'DJI',
	description_full: 
	`INSPIRE 1 V2.0

– Our new propeller and installation kits feature a smoother, even more reliable locking mechanism. – This optimization has drastically reduced the abrasion that is common with propeller installation, therefore prolonging the propeller’s overall service life.

– The new motor’s performance has also been improved, providing a greater sense of control.

– Ready-to-fly aerial system

– Included professional 4K camera and 3-axis stabilization gimbal

– Live, wireless HD video transmission via DJI Lightbridge

– Dedicated remote with flight and camera controls

– Powerful app to adjust camera settings, edit videos, and more

– Vision Positioning system for GPS-free or indoor flight

– Perfect for high-level shoots and professional sets

– Zenmuse X Series Cameras Comparison

ADVANCED, READY-TO-FLY DESIGN

Imagine holding the future in your hands. Designed to be powerful while lightweight, flexible while providing the stability you need, the Inspire 1 is DJI’s most advanced complete package. All of the latest aerial technology is packed into one simple, ready-to-fly system, putting you in the sky within minutes.

Drona DJI Inspire 1 - Camera X3

POWERFUL PROPULSION SYSTEM

The Inspire 1’s propulsion system is unique among all flight platforms. We re-engineered and re-built the system to handle the demands of advanced flight, while increasing efficiency and reliability.

AERODYNAMIC TRANSFORMING DESIGN

Carbon fiber arms give you the strength to maneuver in the air and they transform, moving out of the camera’s way at the flick of a switch. With a full 360⁰ unobstructed view, you now have the freedom to capture shots independent of the direction you are flying.

Every part, every component of the Inspire 1 was engineered to be durable and lightweight. The body’s aerodynamic design cuts through the sky and further enhances your control over the aircraft. This ensures long flight times and a long operational life.



ROTOR DESIGN

The all new 13 inch quick release rotors are built with the unique DJI „Z-Blade” design. They have been reinforced with new carbon fiber compound material to ensure excellent performance with increased stability.

Drona Dji Inspire 1 - Elice

CURVED MAGNETS

Brushless motors pioneered by DJI are now the standard in the multirotor industry. But the Inspire 1 takes the next step in brushless development by integrating curved magnets that fit flush around the edge of each motor. Although much more difficult to produce, these magnets eliminate airflow gaps within the motor, greatly increasing efficiency.



SINGLE-WIRE DESIGN

Several strands of copper wire have been replaced by a single, dense strand. Reducing the wasted space between wires results in more copper within each motor, providing more power and less resistance. A centrifugal pump increases airflow inside the neat, tight copper windings dissipating heat much faster while greatly increasing the life of the motors.



NEW ESCS
The revolutionary Electronic Speed Controllers (ESC) with sinusoidal drive replaces the square wave drive of traditional ESCs redefining the whole drive system. The patented algorithm in the ESCs have been tuned and customized specifically for the Inspire 1 offering features such as closed loop torque control and distinct functional redundancy with the highest efficiency and the most reliability.


INTELLIGENT POWER MANAGEMENT SYSTEM

A fully integrated intelligent battery powers your Inspire 1 and virtually manages itself.

When in flight, your remaining battery power is shown live, letting you know how long you can continue to fly. Advanced algorithms calculate the distance of your aircraft and estimated time to return home, letting you know when it’s time to fly back.

The battery reports the voltage of each cell, the total lifetime charges and discharges, and the overall health and battery status. All this helps you keep your Inspire 1 in the air and flying for years to come.


POSITIONING

As it flies, the position of your Inspire 1 is constantly updated and recorded using a high-strength, intelligent GLONASS + GPS system. This dual positioning system enables higher precision and quicker satellite acquisition, allowing you to see where the aircraft is on a live map and giving it a point to hover at when you release the controls.

MAIN CONTROLLER

This is the „brain” of the entire system, receiving thousands of bits of data every second and translating that data into action as you fly. The Main Controller tells every part of your Inspire 1 what to do, calculates environmental conditions in real-time, and ensures that the aircraft responds to your control commands instantly.

IMU

Automatically keeping the Inspire 1 stable and steady during flight only looks easy, as DJI’s advanced Inertial Measurement Unit (IMU) handles everything. The IMU incorporates both a 6-axis gyroscope and an accelerometer to monitor miniscule changes in tilt and movement. This allows the aircraft to compensate and adjust immediately, holding its position at all times.

FAILSAFE

All of these features combine to put your Inspire 1 on autopilot when needed. If the battery runs low or connection with your remote controller is lost, the Inspire 1 uses its positioning system and smart flight technology to return back to you.

HOVER IN PLACE WITHOUT GPS
You can take off and land at the press of a button and keep your Inspire 1 steady indoors or when GPS satellites can’t be acquired with the new DJI Vision Positioning System.



 

THE COMBINED VISUAL DATA AND SONAR WAVES

DJI built the Vision Positioning System from the ground up, customizing it to meet the rigorous requirements in place for anything that handles position holding on our flying platforms.

This system combines visual data and sonar waves in a single unit, detecting both variance in patterns on the ground and current altitude. With this information, your Inspire 1 can hover in place and automatically raise or lower its arms as you liftoff or descend to the ground.

THE CPU CHIP

But the sonar and visual information is just one half of the fully integrated package: processing this information is handled by a dedicated CPU chip. This chip takes in feedback and outputs data in real-time, and is intelligent enough to distinguish between objects and ground patterns. All of this data is given to your Inspire 1’s flight controller, which in turn communicates with the entire aircraft.



 

4K AND MORE
A brand new 9-layer lens helps you capture the best aerial views possible.

The rectilinear, curved lens design eliminates distortion, and the 20mm focal length opens up your shots to a remarkably wide angle without that fish-eye look.
 Packing power into such a small, lightweight design wasn’t easy, but this compact camera shoots video at up to 4Kp30 or 1080p60 and takes crisp, clear 12 megapixel stills.
ADVANCED GIMBAL
All of DJI s core technologies have been engineered into the Zenmuse X3 gimbal, keeping the camera steady in the sky and ensuring you get stable, professional footage every time.
The 3-axis gimbal constantly draws on data fed by the intelligent flight controller, so it knows the aircraft’s flight parameters and computes the proper motion correction every millisecond. Angular velocity, momentum, inertial force and even GPS data allows the gimbal to apply countering power and force, keeping the camera perfectly level no matter how you fly.
Such precision is only possible because of the ultra-fast, custom-made processor that is unique to DJI gimbals. Operating at speeds that allow the gimbal to compensate for motion and tilt in real-time, this processor controls motors on all three axes: yaw, tilt, and roll.
Brushless motors that run the gimbal are built for higher precision and a longer life, all while handling the stress of flight. They operate at a high control speed of 120°/s for tilt and 180°/s for rotation. You can also control where the camera is pointing with over 360° of rotation and -90° to +30° of tilt, all within ±0.03° of accuracy.



„POINT AND SHOOT” REDEFINE

Rotate and tilt the camera by tapping the screen and dragging your finger wherever you want to look.

 

The Inspire 1’s full 360⁰ range is literally at your fingertips, and with one simple motion you can see and record images behind, below, and even slightly above wherever you are flying.

 

The advanced app responds to your commands immediately, bringing a whole new level of control.



MODULAR, UPGRADEABLE SYSTEM

Inspire 1’s gimbal and camera system can be removed from the aircraft for safe transport and future upgrades.
NEW CAMERA AND GIMBAL SYSTEM
Get crystal clear images with DJI’s most advanced camera to date. The gimbal holding your camera is the result of DJI’s years of expertise in camera stabilization, giving you smooth, stable footage in any flight conditions.
Video: 4K @ 24-30 fps, or 1080p @ 24-60fps,
Photos: 12 Megapixels
Lens: 9 elements in 9 groups including an aspherical element
1/2.3 inch CMOS sensor
94⁰ wide-angle FOV
3-axis, 360⁰ rotating gimbal

REMOTE
Easy, intuitive control
Integrated DJI Lightbridge
Convenient controls

ABSOLUTE CONTROL
The Inspire 1’s remote controller combines DJI’s most sophisticated control technology with added dual operator support. Never before has such an advanced controller been created specifically for flight and camera control.



DJI LIGHTBRIDGE
For the first time ever, the DJI Lightbridge HD video downlink has been integrated into a remote. This gives you a live view of what your camera sees when connected to a screen or mobile device and increases your maximum control range to 3.1mi(5Km).



DEDICATED BUTTONS
Easily control both flight and camera functions right on the remote. Dedicated buttons for photo and video capture, dials for gimbal tilt and camera settings, and one-press Return to Home functionality are all built right in.

DUAL OPERATOR CONTROL
When flying with a friend, the Master controller pilots the aircraft while the Slave controller moves the gimbal and camera’s direction. Both remotes receive live data and video straight from the Inspire 1, but only the Master controller sends commands to the aircraft. The Slave controller must be linked to the Master via secure password to control the gimbal.



FLIGHT SOFTWARE
All of DJI’s flight system knowledge has been put into the remote’s software, giving you smooth, stable flight. Finely tuned control algorithms make you feel like you’re riding in the cockpit, with a level of control no other multirotor on the market can match.



RUNTIME
The built-in 6000 mAh LiPo 2S rechargeable battery means you can make multiple flights without thinking about the remote’s power. The remaining battery life is shown live right on the remote, and built-in alerts warn you when power is running low.



GO APPLive HD viewEasy video editorWorry-free autopilot
DJI GO APPCapture and share beautiful content by using the DJI GO app with most DJI products, including the Phantom 3 series, Inspire series and Osmo.Built for universal compatibility and upgraded usability, simply connect your device, launch the app, and go.FULL CAMERA CONTROLSDJI GO gives you complete control of your camera and a live HD video feed right on your screen.Adjust camera settings and use this real-time view to line up the perfect shot.

INSTANT VIDEO DOWNLOADING
The live video stream from your camera is automatically saved on your mobile device for easy preview and editing later.
Use this video as a reference, and download the full quality videos and photos with a few taps.

POWERFUL MOBILE APP
Complete power is at your fingertips. Control the camera and change flight settings, all from your mobile device. Plus:
Compatible With Most DJI Products
Live HD View
Instant Video Downloading
Easy Video Editor
Comprehensive Media Library
Sharing and Connecting Creativity
Live Map and Radar
Detailed Records and Achievements
Manage Your DJI Account
EASY VIDEO EDITOR
Create professional-looking movies in minutes using the DJI Director video editor. With a wide variety of pre-designed templates, it’s easy to pick one that suits you best and make a new video to share.

COMPREHENSIVE MEDIA LIBRARY
All of your photos and videos that were shot using a DJI product and the GO app are stored in one place, making it easy to browse, share, and send your footage anywhere you like.
SHARING AND CONNECTING CREATIVITY
Share your best work on SkyPixel, a dedicated platform for aerial photographers and filmmakers from around the world. The GO app also connects to your Facebook, Twitter, and Tumblr accounts for quick posting.
DEDICATED CONTROLS
Take absolute control of your Inspire 1 with DJI’s most sophisticated remote controller to date. Featuring dedicated buttons for photo and video capture, a gimbal control dial, an integrated rechargeable battery and more, it’s easy and intuitive to fly. The controller has an mini-HDMI and USB port allowing you to connect mobile devices or compatible screens.

LIVE MAP AND RADAR

See yourself or your flight platform on a live map, and log exactly where you are filming.

 

DETAILED RECORDS AND ACHIEVEMENTS

Every moment is an experience to remember. DJI GO records data on each of your shoots and flights, ready for your review later.

MANAGE YOUR DJI ACCOUNT
Access all of your DJI information in one place.
Participate in the DJI Forum, earn DJI Credit for future purchases, and review your preferences directly in the GO app.
INTERACTIVE FLIGHT SIMULATOR
Practice flying and perfect your skills anywhere. The included flight simulator gives you the lifelike experience of flying your Phantom 3 in a safe, controlled virtual environment.

INTELLIGENT FLIGHT MODES
Let your aircraft be your private photographer. In just a few taps, you can tell it to automatically fly in the way you want, allowing you to focus on capturing images and video. From your first flight, you can record unique content by using the Intelligent Flight Modes in the new DJI GO app.

EASY, SAFE FLIGHT
Even if you’ve never flown before, taking off and landing your Inspire 1 is easy and safe. It takes just one tap to make your Inspire 1 takeoff and transform, ready to start filming. Then tap again to have it transform into landing mode and land.When GPS is available, the Home Point (the location you are standing) automatically refreshes, so your Inspire 1 always knows where you are even if you move around. When you tell it to come back, or in case of an emergency, it knows exactly where to go and land safely.

A COMPLETE READY-TO-FLY SYSTEM

Everything you need is included and ready to go, offering you a complete aerial filmmaking tool in one box. Just add your mobile device or other screen to use the live HD view.`,
	price: {
		usd: 450,
		eur: 0
	},
	subcategory: ["DJI Inspire 1"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/05/DJI-Inspire-1-v2.jpg", "https://dronshop.ro/wp-content/uploads/2015/05/Inspire-1-V2.0-with-Free-Extra-TB47-Intelligent-Flight-Battery.jpg", "https://dronshop.ro/wp-content/uploads/2015/05/large_1200_800-inspire-1.jpg","https://dronshop.ro/wp-content/uploads/2015/05/large_large_inspire_p1.jpg","https://dronshop.ro/wp-content/uploads/2015/05/large_large_inspire_p3.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/09/DJI-Inspire-1-Pro-zenmuse-x5-Genta.jpg',
	title: 'DJI Inspire 1 PRO + Zenmuse X5 MFT 4K',
	description: 'DJI',
	description_full: 
	`DJI Inspire 1 PRO + Zenmuse X5 MFT 4K + Case
 Last explosive from DJI for aerial photography class top new X5 MicroFourThirds room!

Inspire received a significant update to the new X5 Zenmuse room / drive axles and allows extremely detailed videos with 4K resolution and 16MP photos!

Revolutionary segment Copter: self intuitive focus via touch screen tablet offering perfect clarity in any desired image. Automatic settings, shutter and aperture priority and full manual settings, make the whole package work!

DJI Inspire 1 - quadrocopter T600 comes with a 4K camera in a 3-axis universal joints and can be "converted" into the air to obtain an unobstructed view 360 °. The aircraft has a completely new patented mechanism that raises the whole arm, including the landing gear and engines above the main frame so that the camera forms the smallest part!

Product highlights DJI Inspire 1 PRO + Zenmuse X5 MFT 4K + Case:
-design transformer 360 for free View- camera Aerodynamic Mechanik Patentierte 
-bright modulation 4K video (image resolution 16MP) CMOS sensor 4/3  
-Complete control 3-axis gimbal 
-Operaţiune host in single or double, with wireless connection / struggling 
built-Live HD Link technology based Lightbridge 
-Complete new project transmitter remote control with many additional functions and built-in battery. 
-Waypoint, flying out of the box 
-many additional features such as picture in picture viewing application map display / camera. 
-Operating rooms optic flow to maintain the current position even without GPS.

Mechanical specifications:
-600mm motor axis diagonally away 
-Acumulator 6S Lipo 
-Aparat modulation 4K camera in a 3-axis gimbal 
-time flying about 18min 
-Weight 2935 g

 

In the box:
Inspire 1 quadcopter chamber -DJI 4K and 3-axis gimbal 
-R tablet transmitter support 
-6S 4500mAh Lipo battery 
-Încărcător flight battery and transmitter 
-2 propeller sets 
The bag transport 
-Card 16GB microSD 
-Curea neck transmitter`,
	price: {
		usd: 350,
		eur: 0
	},
	subcategory: ["DJI Inspire 1"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/09/DJI-Inspire-1-Pro-zenmuse-x5-Genta.jpg","https://dronshop.ro/wp-content/uploads/2015/09/DJI-Inspire-1-Pro-zenmuse-x5-Genta.jpg","https://dronshop.ro/wp-content/uploads/2015/09/Inspire-1-Pro-X5-Case-Open.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/01/Zenmuse-X5-RAW_dronshop.ro_.jpg',
	title: 'Zenmuse X5 RAW',
	description: 'DJI',
	description_full: 
	`DJI Inspire 1 Zenmuse X5 RAW

Preorder AVAILABLE, DELIVERY MARCH / APRIL 2016.

The Micro Four Thirds-room features interchangeable lens options with remote-controlled focus and aperture. It records CinemaDNG files to the solid-state drive (SSD) and is the Worlds Smallest, lossless 4K room optimized for aerial imaging. Video bitrates average 1.7Gbps, with a maximum of 2.4Gbps. The X5R Also offers a new D-LOG mode with a broader array of color correction in post options production.19950`,
	price: {
		usd: 150,
		eur: 0
	},
	subcategory: ["DJI Inspire 1"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/01/Zenmuse-X5-RAW_dronshop.ro_.jpg","https://dronshop.ro/wp-content/uploads/2016/01/Zenmuse-X5-8.jpg","https://dronshop.ro/wp-content/uploads/2016/01/zenmuse-x5r-7.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-600-pro.jpg',
	title: 'DJI Matrice 600 Pro',
	description: 'DJI',
	description_full: 
	`Drona DJI MATRICE 600

Designed for filmmakers and industrial applications
Multiple gimbals supported including the Ronin-MX
A3 and Lightbridge 2 built-in
Extended flight time and long range transmission
Professional HD transmission
Powerful app control
SDK supported
Upgradeable with A3 PRO and D-RTK GNSS`,
	price: {
		usd: 500,
		eur: 0
	},
	subcategory: ["Matrice 600"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-600-pro.jpg","https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-600-Pro_03.jpg","https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-600-Pro_04.jpg","https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-600-Pro_01.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/05/DJI-Matrice-600-1.jpg',
	title: 'DJI Matrice 600',
	description: 'DJI',
	description_full: 
	`Matrix DJI 600
DJI Matrix platform 600 new flight from DJI designed specifically for professional photography and industrial applications. Drona is constriut be compatible with the best tecnologii from DJI control system such as A3, sistemult transmission Lightbridge 2 Batteries Intelligent and their management system for maximum performance and rapid deployment.

The modular concept makes the drone DJI array 600 to be ready to fly in minutes. Systemic propulsion engines are resistant to dust and cooled continuously, drone being safe during extended use. All Zenmuse and gimbaluri camera models are compatible transport maximum weight is 6kg. This enables the drone to be equipped with gimbalul Ronin-MX and a wide range of room systems Micro Four Thirds and RED Epic.

Safety systems during flight Efficiency maintain safe, efficient and accurate while adaptive flight sistemult A3 adjusts parameters automatically taking into account differences in the load being carried. A3 The two modules can be inmunatati Pro or D-A3 for proper GNSS RTK accuracy and higher.`,
	price: {
		usd: 250,
		eur: 0
	},
	subcategory: ["Matrice 600"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/05/DJI-Matrice-600-1.jpg","https://dronshop.ro/wp-content/uploads/2016/05/dji-matrice-600-02.jpg","https://dronshop.ro/wp-content/uploads/2016/05/dji-matrice-600-03.jpg","https://dronshop.ro/wp-content/uploads/2016/05/dji-matrice-600-05.jpg","https://dronshop.ro/wp-content/uploads/2016/05/dji-matrice-600-04.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/09/DJI-MFT-15mmF1.7-ASPH-Prime-Lens.jpg',
	title: 'DJI MFT 15mm,F/1.7 ASPH Prime Lens',
	description: 'DJI',
	description_full: 
	`DJI MFT 15mm,F/1.7 ASPH Prime Lens for the Micro Four Thirds Zenmuse X5 Series camera and gimbal systems allows you to capture incredible aerial images and video.
This lens is comprised of 9 elements in 7 groups uses 3 aspherical lenses, for maximum sharpness, while maintaining a compact size.

The large F1.7 aperture gives great low-light performance and allows control over the camera’s Depth of Field for object separation and bokeh effects.
When used together with the Zenmuse X5 Series, you can adjust both focus and aperture remotely via the DJI GO app, or by using the DJI Focus wireless lens control system.`,
	price: {
		usd: 650,
		eur: 0
	},
	subcategory: ["Matrice 600"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/09/DJI-MFT-15mmF1.7-ASPH-Prime-Lens.jpg","https://dronshop.ro/wp-content/uploads/2015/09/large___1.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-200.jpg',
	title: 'DJI Matrice 200',
	description: 'DJI',
	description_full: 
	`DJI Matrix 200
DJI Matrix 200 - drone dedicated to industrial applications of DJI.`,
	price: {
		usd: 550,
		eur: 0
	},
	subcategory: ["Matrice 200"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-200.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-210_.jpg',
	title: 'DJI Matrice 210',
	description: 'DJI',
	description_full: 
	`DJI Matrix 210
DJI Matrix 210 - Dedicated Drum for Industrial Applications from DJI. The Drona can be equipped in various ways. Room mount types: a room below or above the drones or two rooms below.`,
	price: {
		usd: 750,
		eur: 0
	},
	subcategory: ["Matrice 200"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-210_.jpg","https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-210.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-210-RTK.jpg',
	title: 'DJI Matrice 210 RTK',
	description: 'DJI',
	description_full: 
	`DJI Matrix 210
DJI Matrix 210 - Dedicated Drum for Industrial Applications from DJI. The Drona can be equipped in various ways. Room mount types: a room below or above the drones or two rooms below.`,
	price: {
		usd: 1000,
		eur: 0
	},
	subcategory: ["Matrice 200"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-210-RTK.jpg","https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-210-RTK_01.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-100_z30combo_.jpg',
	title: 'DJI Matrice 100 – Z30 Combo',
	description: 'DJI',
	description_full: 
	`DJI Matrice 100 – Z30 Combo`,
	price: {
		usd: 950,
		eur: 0
	},
	subcategory: ["Matrice 100"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/03/DJI-Matrice-100_z30combo_.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/07/DJI-Matrice-100-1.jpg',
	title: 'DJI Matrice 100',
	description: 'DJI',
	description_full: 
	`The DJI Matrice 100 is a fully customizable and programmable flight platform that lets you to turn your ideas and dreams into reality. Equipped with DJI’s easy-to-fly technology and optimized for easy programming through the DJI SDK, the Matrice 100 is ready to carry any sensors, devices that you want to put into the sky.

EXPANSION BAYS
Additional expansion bays allow you to add components, customize the payload, and fly with any devices you want. Put cameras, sensors, computing boards, communication tools, and more into the sky, and gather data while completing complex jobs from a birds-eye view.

UNIVERSAL POWER AND COMMUNICATION PORTS
aConnect and fly with a range of DJI or third party devices, and transmit data to the ground in real time. The Matrice 100 has dual parallel CAN ports for connecting DJI devices including the Guidance sensor system and dual parallel UART ports for connecting third party components of your choice. Now it is easy to mount your own equipment and put it into the sky.

DUAL BATTERY COMPARTMENTS
Add an additional battery compartment to achieve up to 40 minutes* of flight time. This gives greater power to both your platform and any additional devices or accessories that you wish to fly with.
*Flight times vary based on payload and flight conditions, and the maximum 40 minute flight time tested when hovering with dual TB48D batteries and no additional payload.

CUSTOMIZABLE MOUNTING AND BALANCING
Achieve perfect balance and an ideal flight experience by sliding the battery and other compartments around the body of your Matrice 100. Put your components exactly where you want them, and get the most out of your system.

ADJUSTABLE ARM ANGLE FOR GREATER TORQUE
Flexible to match your flight needs, adjusting the arm angle of each of the 4 arms is quick and easy. Achieve increased yaw torque and greater response by tilting the arms to a 3 degree angle.

50% LESS VIBRATIONS, RIGID,STRONG SYSTEM
To reduce vibrations, increase stiffness, and bring unmatched reliability, your Matrice 100 is made of strong, lightweight carbon fiber. Each of the arms contains DJI’s new soft vibration absorbing material that virtually eliminates feedback from the powerful motors, keeping your critical components stable and allowing unprecedented accuracy.

RESPONSIVE, QUICK RELEASE LANDING PADS
Innovative landing pads or “feet” are installed at the base of each arm to protect your Matrice 100 when landing. These pads greatly reduce impact, protecting your system and eliminating the chance of your platform unintentionally lifting off of the ground. Also easy and quick to remove for replacement or upgrades.

DEDICATED REMOTE CONTROLLER
Take control of your platform with the customizable, long-range remote controller included with the Matrice 100. With an operating distance of up to 3.1 miles* (5km), a rechargeable battery, fully adjustable controls, and outputs to connect to your mobile device, this is the perfect tool to command your system in the air.
*Maximum range tested in open areas free of interference and may vary depending on local regulations.

FULL MOBILE APP SUPPORT
Fly with the feature-rich DJI GO app or create your own app with the DJI SDK. See a live view, control your devices, access a real-time map, and more by simply plugging in your tablet or smartphone.

ENHANCED GPS
Enhanced GPS with a foldable mount helps you to track your Matrice 100’s position in real time, while enabling faster satellite acquisition, more accurate position holding and flight planning.

UPGRADED FLIGHT CONTROLLER AND INTEGRATED LIGHTBRIDGE
DJI’s new N1 flight controller keeps your Matrice 100 stable and responsive to your commands throughout every flight. Transmitting data to you and bringing a live HD view (when using DJI’s X3 Camera and gimbal), the included DJI Lightbridge increases your flight range to 3.1miles* (5km).
*Maximum range tested in open areas free of interference and may vary depending on local regulations.

PURPOSE-BUILT PROPULSION SYSTEM
An upgraded version of the respected DJI E800 electric propulsion system powers your Matrice 100 and keeps it in flight. Four powerful, brushless motors and four lightning fast Electronic Speed Controllers are integrated into the platform, giving you complete control during flight. With increased strength and payload capacity, you have the flexibility to create the system you need.

COMPATIBLE PARTS FOR FURTHER FUNCTIONALITY
The Matrice 100 is compatible with a wide range of DJI accessories`,
	price: {
		usd: 1200,
		eur: 0
	},
	subcategory: ["Matrice 100"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/07/DJI-Matrice-100-1.jpg","https://dronshop.ro/wp-content/uploads/2015/07/DJI-Matrice-100.jpg","https://dronshop.ro/wp-content/uploads/2015/07/M100_In_the_Box_en_.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/03/Remote-Controller-Monitor-Hood-for-Tablets.jpg',
	title: 'Monitor Hood - Visor tablet',
	description: 'DJI',
	description_full: 
	`Hood tablets - Remote Controller Monitor Hood for Tablets (Inspire 1 Phantom 3 Pro / Adv Phantom 4)
This visor tablet is used on sunny days. Catching tablet is easy and fast suction cup visor.

It is collapsible and easily portable, can be mounted on the radio control Inspire 1 March Advanced Phantom, Phantom Phantom 3 Professional and 4. 
The hood is compatible with the ipad Mini and many other tablets.

Maximum device dimension: 205mm x 145mm x 128mm`,
	price: {
		usd: 29,
		eur: 0
	},
	subcategory: ["Matrice 100"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/03/Remote-Controller-Monitor-Hood-for-Tablets.jpg","https://dronshop.ro/wp-content/uploads/2016/03/medium_P5-1.jpg","https://dronshop.ro/wp-content/uploads/2016/03/medium_p6-1.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/03/DJI-Inspire-Matrice-100-X3-NDVI-Camera-for-Agriculture.jpg',
	title: 'Camera NDVI – Inspire 1 / Matrice ',
	description: 'DJI',
	description_full: 
	`NDVI Chamber of Agriculture DJI Inspire / MATRIX 100 X3 NDVI ROOM FOR AGRICULTURE

NDVI room for agriculture is an option for INSPIRE 1 and X3 100. DJI Inspire Matrix / Matrix 100 X3 NDVI room for agriculture provide information / data on remote areas in agriculture.

We enjoy the benefits drone AG especially in agriculture.

Lens is replaced with the original high quality glass lens with a blue filter / NIR.

Chamber filter NDVI NDVI dual band high quality with a high contrast between the two bands.

This filter allows you to see if vegetation is thriving and hard to reach areas.`,
	price: {
		usd: 800,
		eur: 0
	},
	subcategory: ["Agriculture drones"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/03/DJI-Inspire-Matrice-100-X3-NDVI-Camera-for-Agriculture.jpg","https://dronshop.ro/wp-content/uploads/2016/03/DJI-Inspire-Matrice-100-X3-NDVI-Camera-for-Agriculture_01.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/03/DJI-Phantom-3-NDVI-Camera-For-Agriculture_01.jpg',
	title: 'Camera NDVI – NDVI Camera – Phantom 3',
	description: 'DJI',
	description_full: 
	`NDVI Chamber of Agriculture -DJI PHANTOM 3 - NDVI ROOM FOR AGRICULTURE
NDVI room (for agriculture) models DJI DJI Phantom Phantom 3. 3 NDVI room for Agriculture provide information / data on remote areas in agriculture.

We enjoy the benefits drone AG especially in agriculture.

Lens is replaced with the original high quality glass lens with a blue filter / NIR. Each unit is tested and images are analyzed before being sent. This option is for room Professional version.

We can send version Advanced camera resolution photos but not different in the two models.

However, we recommend that room Professional SD card write speed is faster, lets you save images faster. Upgrades for existing room can be done if you do not want to use a regular camera.

Chamber filter NDVI NDVI dual band high quality with a high contrast between the two bands. This filter allows you to see if vegetation is thriving and hard to reach areas.`,
	price: {
		usd: 900,
		eur: 0
	},
	subcategory: ["Agriculture drones"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/03/DJI-Phantom-3-NDVI-Camera-For-Agriculture_01.jpg","https://dronshop.ro/wp-content/uploads/2016/03/NDVI_raw_Image_From_inspire_matrice_phantom_dji_391452f3-9376-400d-b4dc-ea284bffccde_1024x1024.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/12/Lightbridge-2-AntennasAntenna-Holder.jpg',
	title: 'Lightbridge 2 Antennas & Antenna Holder',
	description: 'DJI',
	description_full: 
	`When Lightbridge 2 is installed on platforms Spreading Wings flight, the antenna holder is Used to fix the air unit to the landing gear of the aircraft.`,
	price: {
		usd: 32,
		eur: 0
	},
	subcategory: ["Lightbridge"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/12/Lightbridge-2-AntennasAntenna-Holder.jpg","https://dronshop.ro/wp-content/uploads/2015/12/Lightbridge-2-AntennasAntenna-Holder.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/12/Lightbridge-2-Cables.jpg',
	title: 'Lightbridge 2 Cables',
	description: 'DJI',
	description_full: 
	`Cables for connecting devices Such as the flight controller, gimbal and camera.`,
	price: {
		usd: 38,
		eur: 0
	},
	subcategory: ["Lightbridge"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/12/Lightbridge-2-Cables.jpg","https://dronshop.ro/wp-content/uploads/2015/12/Lightbridge-2-Cables.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/12/Lightbridge-2-SDI-CableHolder.jpg',
	title: 'Lightbridge two SDI Cable & Holder',
	description: 'DJI',
	description_full: 
	`The cable is Used to connect the HD-BNC port on the remote to the BNC connector. 
The cable holder is Used to fixed the 3G-SDI or HDMI cable to the mounting brackets of the remote controller to avoid damage to the port on the remote controller.`,
	price: {
		usd: 42,
		eur: 0
	},
	subcategory: ["Lightbridge"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/12/Lightbridge-2-SDI-CableHolder.jpg","https://dronshop.ro/wp-content/uploads/2015/12/large_LIGHTBRIDGE_2_SDI_Cable_Holder__3_.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/12/Lightbridge-2-HDMI-Monitor-Holder-1.jpg',
	title: 'Lightbridge two HDMI Monitor Holder',
	description: 'DJI',
	description_full: 
	`Fix a small display device with HDMI or 3G-SDI to the remote controller. No additional monitor Needed holder.`,
	price: {
		usd: 102,
		eur: 0
	},
	subcategory: ["Lightbridge"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/12/Lightbridge-2-HDMI-Monitor-Holder-1.jpg","https://dronshop.ro/wp-content/uploads/2015/12/large_LIGHTBRIDGE_2_HDMI_Monitor_Holder__3_.jpg","https://dronshop.ro/wp-content/uploads/2015/12/large_LIGHTBRIDGE_2_HDMI_Monitor_Holder__4_.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/12/Lightbridge-2-Air-Unit.jpg',
	title: 'Lightbridge 2 Air Unit',
	description: 'DJI',
	description_full: 
	`Mounted on the aircraft, the Lightbridge 2 Air Unit is Used to collect aerial and video signals and transmit Them flight date back to the ground system, as well as send output signals to the flight controller and other equipment.`,
	price: {
		usd: 723,
		eur: 0
	},
	subcategory: ["Lightbridge"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/12/Lightbridge-2-Air-Unit.jpg","https://dronshop.ro/wp-content/uploads/2015/12/large_LIGHTBRIDGE_2_Air_Unit__2_.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/09/DJI-Lightbridge-2.4G-Full-HD-Digital-Video-Downlink.jpg',
	title: 'Lightbridge DJI 2.4 GHz Full HD',
	description: 'DJI',
	description_full: 
	`DJI Lightbridge, 2.4G Full HD Digital Video Downlink. DJI Lightbridge is an all new revolutionary 2.4G HD digital video downlink. DJI Lightbridge offers extremely powerful equipment packed into a small and light-weight form factor. By offering 1920 x 1080p @ 30fps video transmission time from up to 1.7km (1.05miles) away, its the ideal solution for the professional aerial photographer and FPV users. Set yourself free and remove the limits from low definition video analog transmitters.

Built-in 2.4G remote control link
The first all digital DJs 2.4g full hd video downlink
Master-slave mode
Dual video input support
Multiple mobile device HDMI and HD display support
Advanced security`,
	price: {
		usd: 1043,
		eur: 0
	},
	subcategory: ["Lightbridge"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/09/DJI-Lightbridge-2.4G-Full-HD-Digital-Video-Downlink.jpg","https://dronshop.ro/wp-content/uploads/2015/09/large_dji-lightbridgelarge_large-3.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/05/DJI-A3-AutoPilot-System01.jpg',
	title: 'Flight Control DJI A3',
	description: 'DJI',
	description_full: 
	`Flight Control DJI A3
Flight Control DJI A3 combines supreme reliability with precise flight control, flight control new series of A3 is ideal for shooting and cinematic industries where reliability is essential.

A3 PRO is equipped with three IMU and GNSS modules. They work with advanced diagnostic algorithms in case that one of the six modules fails, the system automatically switches to another. (PRO system has installed two upgrade kits).

The A3 can be adoptade a wide range of drone without manual adjustment. Equipped cun tolerance for a system error, or octocopterul hexacopterul you can land safely in case the propulsion system has an error.`,
	price: {
		usd: 1215,
		eur: 0
	},
	subcategory: ["Flight controler"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/05/DJI-A3-AutoPilot-System01.jpg","https://dronshop.ro/wp-content/uploads/2016/05/DJI-A3-AutoPilot-System04.jpg","https://dronshop.ro/wp-content/uploads/2016/05/DJI-A3-AutoPilot-System05.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/02/GPS-WKM-V2.jpg',
	title: 'WKM GPS V2',
	description: 'DJI',
	description_full: 
	`New Improved GPS for Wookong v2 users.`,
	price: {
		usd: 163,
		eur: 0
	},
	subcategory: ["Flight controler"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/02/GPS-WKM-V2.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/02/DJI-A2-WITH-GPS-PRO-PLUS-1.jpg',
	title: 'DJI A2 WITH GPS Pro Plus',
	description: 'DJI',
	description_full: 
	`DJI A2 WITH GPS PRO PLUS –  A2 Multi-rotor Stabilization Controller with NEW GPS PRO plus.

Top

DJI A2 Multi-Rotor stabilization controller is a complete flight system for various multi-rotor platforms for commercial and industrial AP applications.It opens an unprecedented era of precise positioning for flight control systems. Based on the technology and design philosophy of DJI’s Ace series of high-performance controllers, the A2 offers you a brand new flight experience. Its flight mode setup provides a seamless transition for current Ace One / WKM AP professionals. The A2 flight control system adopts a full metal case design and consists of a main controller, an IMU(Inertia Measurement Unit), a GPS Pro/Compass module, a PMU(Power Management Unit), a Bluetooth LED indicator. It utilizes high quality components precisely calibrated with temperature compensation in all gyros and sensors, industry renowned flight algorithm in autopilot and UAV field.

A2 Multi-rotor Stabilization Controller

GPS-Compass Pro Module`,
	price: {
		usd: 1261,
		eur: 0
	},
	subcategory: ["Flight controler"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/02/DJI-A2-WITH-GPS-PRO-PLUS-1.jpg","https://dronshop.ro/wp-content/uploads/2016/02/dji-a2-pro-flight-controller-2-935-p.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/01/Naza-M-Lite-GPS-Combo.jpg',
	title: 'Naza M Lite + GPS Combo',
	description: 'DJI',
	description_full: 
	`Naza M Lite + GPS Combo`,
	price: {
		usd: 164,
		eur: 0
	},
	subcategory: ["Flight controler"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/01/Naza-M-Lite-GPS-Combo.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2015/06/DJI-Data-Link-Module-2.4-GHz.jpg',
	title: 'DJI Data Link Module 2.4 GHz',
	description: 'DJI',
	description_full: 
	`DJI 2.4 GHz Data Link Module

The LK24 Data Link 2.4 GHz trasnmisie data in both directions is intended for communication multicopter average distance between the platform and GCS (Ground Control Station).

The communication link for the 2.4 GHz version is 3 Km. Ground unit is powered via USB, which is a plus when it comes to outdoor use. The communication system uses FHSS technology, which is FCC and CE certification.

DJI Data Link has several advantages, including: higher sampling rate, stability in operation and protection against interference and jamming and long distance communication, low power consumption of only 550 mW.

Kit contents: 
- Module transceiver 2GHz 
- 2.4 GHz antenna unit ground 
- Cables and connectors 
- Software CD`,
	price: {
		usd: 164,
		eur: 0
	},
	subcategory: ["Accessories"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2015/06/DJI-Data-Link-Module-2.4-GHz.jpg","https://dronshop.ro/wp-content/uploads/2015/06/2.4G-Bluetooth-Datalink.jpg","https://dronshop.ro/wp-content/uploads/2015/06/large_large-6.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/02/DJI-VIDEO-TX-RX-58GHZ.jpg',
	title: 'DJI-VIDEO TX / RX 5,8GHZ',
	description: 'DJI',
	description_full: 
	`The new DJI Downlink is specially designed to work with the new On Screen Display modules, and Zenmuse gimbal for professional aerial photography and video.

With the OSD module from DJI, voltage, altitude, distance to home, and other features are displayed on screen. Will this work with either NTSC or PAL video transmitter and overlay all this information onto your FPV goggles or monitor. Cloverleaf has two antennas included with the transmitter and receiver.

The Wireless Video Link includes both transmitter (TX) and receiver (RX) modules, working in the ISM frequency band of 5.8GHz (5725-5865MHz). Analogue video modulated signals is sent wirelessly by the TX RX modules to the modules, and THEN the video signal demodulated and Will Be sent to the display. There has 8 channels CAN BE wireless When you have selected Using this product.These channels has: CH1-5705MHZ, CH2-5685MHZ, CH3-5665MHZ, CH4-5645MHZ, CH5-5885MHZ, CH6-5905MHZ, CH7-5925MHZ, and CH8- 5945MHZ.

The Characteristics of this product is: small size, low power consumption and high sensitivity. The product CAN BE Used in many applications requiring wireless video communication. When its Used in the aero-modeling hobby, the Wireless Video Link TX Will Be mounted to the aircraftand the Wireless Video Link RX is connected to the display screen, allowing wireless video signal transmission

 

- Regulatory Notice - 
Use of this product may be banned in the country / region / state. Please check that the RF output power and frequencies used by the transmitter comply with local rules in regulations, this product may require a license to operate HAM. 
In the European Union, max. video transmitter output power, general purpose without a license is limited to 25 mW to 10 mW at 5.8GHz and 2.4GHz frequency. Transmitters with higher output power can be used legally, if you are licensed HAM (you can ask about getting a license local radio club), or if you are using this product for research / scientific purposes in controlled environments.`,
	price: {
		usd: 247,
		eur: 0
	},
	subcategory: ["Accessories"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/02/DJI-VIDEO-TX-RX-58GHZ.jpg","https://dronshop.ro/wp-content/uploads/2016/02/dji-innovations-5.8ghz-videolink-inc-cloverleaf-antennas-554-p.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/02/BTU-Module.jpg',
	title: 'DJI Data Link Module 2.4 GHz',
	description: 'DJI',
	description_full: 
	`BTU Module

The Naza-M now provides assistant software for iPhone4s, iPhone5, iPad3, iPad4, iPadmini, iPod5. You can do parameter adjustments at any time on your mobile devices, using only the BTU with a built-in Bluetooth module which makes it easier and convenient. It uses low power Bluetooth to minimize the power consumption of your mobile devices. It is easy to use and will automatically save your last connection records. The password mechanism ensures your safety link. Parameters can be automatically synchronized to the Cloud Server and can be restored immediately when you changed your mobile devices.
Built-in Bluetooth(4.0)
Working Temperature: -10℃~+50℃
Communication Distance: 50m
Weight: 17g
Power Consumption: 240mw(0.04A@6V)`,
	price: {
		usd: 45,
		eur: 0
	},
	subcategory: ["Accessories"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/02/BTU-Module.jpg","https://dronshop.ro/wp-content/uploads/2016/02/dji-btu-bluetooth-module-3.gif.jpeg","https://dronshop.ro/wp-content/uploads/2016/02/dji-bluetooth1_250.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/03/Feiyu-Tech-G5-3-Axis-Splash-Proof-Handheld-Gimbal.jpg',
	title: 'G5 3-Axis Splash-Proof Handheld Gimbal',
	description: 'FEIYU TECH',
	description_full: 
	`eiyu Tech G5 3-Axis Gimbal Splash-Proof Handheld
Feiyu Tech G5 is a high-performance stabilizer hand. Inregistriaza stabilized video camera action during movement every day. Stabilizer is compatible with GoPro cameras Hero5 Black, Black and Silver GoPro Hero4, and various other rooms share size GoPro cameras. The stabilizer is waterproof and can be used during rain, snow and near water safety. The handle is Lovas battery and has controls for the camera and stabilizer incorporated. 8:00 Battery will take under normal conditions.

Important specifications:

Compatible with GoPro Hero5 Black, Silver Hero4, Hero4 Black and other rooms with similar size.

Joystick 4 directions to control the movement stabilizer.

Buttons advanced functions for changing modes stabilizer.

Photo button integrated photo function automatically rotates the camera to User delayed

FY application for settings with Bluetooth wireless technology.`,
	price: {
		usd: 365,
		eur: 0
	},
	subcategory: ["Feiyu Tech"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/03/Feiyu-Tech-G5-3-Axis-Splash-Proof-Handheld-Gimbal.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/03/Feiyu-SPG-Live-3-Axis-Handheld-Stabilized-Gimbal-for-Smartphone.jpg',
	title: 'SPG Live 3-Axis Handheld Stabilized Gimbal',
	description: 'FEIYU TECH',
	description_full: 
	`Feiyu SPG Live
Feiyu SPG Live allows use in portrait mode with a simple positioning on each side. Based on crashes calculuri smart live SPG stabilizer can automatically switch between portrait mode and landscape mode. Your creativity is not limited to the screen.

Specification:
- Live stream with smart modules vertical

- One touch to start a hand for use

- Setting the parameters of the application

- Design Foldable

- Compatible with any phone

- Battery greater working time inbunatatit`,
	price: {
		usd: 268,
		eur: 0
	},
	subcategory: ["Feiyu Tech"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/03/Feiyu-SPG-Live-3-Axis-Handheld-Stabilized-Gimbal-for-Smartphone.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/03/feiyu-tech-smartstab.jpg',
	title: 'Feiyu Tech SmartStab 2-Axis Selfie Gimbal',
	description: 'FEIYU TECH',
	description_full: 
	`Tech Feiyu Selfies SmartStab 2-Axis Gimbal
Feiyu Tech SmartStab - With the stabilizer Selfies from FeiyuTech have the opportunity to record video at a different level. SmartStab site is miniaturized version stabilizers Feiyu, providing stabilization for mobile on two axes. It compatbilila phones to the iPhone 6 Plus. The product comes with an extendable support for Selfies stabilized. Extendable mount is designed with two buttons for phone positioning during fimlmarilor. The product has adapter for GoPro action cameras so they can be used to capture imiginilor stabilized and selfie Quality of Feiyu Tech SmarStab Selfies Gimbal.`,
	price: {
		usd: 268,
		eur: 0
	},
	subcategory: ["Feiyu Tech"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/03/feiyu-tech-smartstab.jpg","https://dronshop.ro/wp-content/uploads/2017/03/feiyu-tech-smartstab_01.jpg","https://dronshop.ro/wp-content/uploads/2017/03/feiyu-tech-smartstab_02.jpg","https://dronshop.ro/wp-content/uploads/2017/03/feiyu-tech-smartstab.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/03/feiyu-mg-lite.jpg',
	title: 'Feiyu MG Lite 3-Axis Handheld Gimbal',
	description: 'FEIYU TECH',
	description_full: 
	`MG Feiyu Lite Handheld 3-Axis Gimbal
MG Feiyu Lite Handheld 3-Axis Gimbal is designed to be used with DSLR. With the stabilizer from Feiyu Tech can record video professionally. MG stabilizer is stabilized on three axes to compensate for camera shake during walking. The stabilizer camera shake out of registration so it is more cinematic. Concept for use with one hand means it is easy to use and easy to pack.

Specifications:

Capacity 1.2 kg
Compatible with DSLR and Mirrorless
Configuration for use with one hand
Joystick for adjusting the angles
Greautate battery 887 g
Includes 4 batteries and charger USB`,
	price: {
		usd: 780,
		eur: 0
	},
	subcategory: ["Feiyu Tech"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/03/feiyu-mg-lite.jpg","https://dronshop.ro/wp-content/uploads/2017/03/feiyu-mg-lite_04.jpg","https://dronshop.ro/wp-content/uploads/2017/03/feiyu-mg-lite_03.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/03/Feiyu-SPG-3-Axis-Handheld-Stabilized.jpg',
	title: 'Handheld 3-Axis Feiyu Stabilized GSP',
	description: 'FEIYU TECH',
	description_full: 
	`Feiyu GSP Handheld 3-Axis Stabilized - Smartphone and Camera Action
Feiyu GSP Handheld 3-Axis Stabilized - A atungere to turn it on and a hand to control. Series GSP is an improvement of the G4 series of Feiyu, adding vertical mode. It is optimized for videographers phone is designed to be efficient in these conditions. The GSP has a rotation of 360 degrees and algorithmically optimized to reduce camera shake during movie shooting, it can be used with a wide range of mobile phones. Feiyu Tech GSP is equipped with Bluetooth allows the phone to connect without the need for any additional software. After connecting the stabilizer buttons can be used to control the phone.

The application Feiyu Tech App user can calibrate gimbalul, improve your firmware and can set different parameters of the phone.

Stabilizer comes bundled with a remote Bluetooth. The battery stabilizer has a working time of 8 hours under ideal conditions.`,
	price: {
		usd: 331,
		eur: 0
	},
	subcategory: ["Feiyu Tech"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/03/Feiyu-SPG-3-Axis-Handheld-Stabilized.jpg","https://dronshop.ro/wp-content/uploads/2017/03/Feiyu-SPG-3-Axis-Handheld-Stabilized_03.jpg","https://dronshop.ro/wp-content/uploads/2017/03/Feiyu-SPG-3-Axis-Handheld-Stabilized_04.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/03/Feiyu-MG-V2-Handheld-Gimbal.jpg',
	title: 'Feiyu MG Handheld Gimbal V2',
	description: 'FEIYU TECH',
	description_full: 
	`Feiyu MG Handheld Gimbal V2
MG Feiyu V2 - DSLR camera mounted on the 3-axis stabilizer for the Feiyu motor. Dimensions stabilizer are very versatile and can be used in different configurations with a single handle or double. With one handle, MG v2 is a discreet tool, ideal for minimal preparation. Add two handles for rooms with higher weight.

MG V2 has a simplistic design is not necessary any tool to secure and to calibrate stabilizer. Once you have the camera in the right position, the stabilizer is automatically calibrates the camera for stable weight. Each of the three engines of the stabilizer is able to rotate 360 ​​degrees, allowing movement and stability in any position.

Use the joystick built 4 directions to control stabilizer. With these controls, you can move the camera manually or stabilizer to prepare for different modes. Fucntionare modes will be described below. Other options can be set from Andriod application.

Different configurations:
Two hands: Use handlebars included two handles for a standard configuration with room under the handlebars.
Two hands invert placed the camera on the handlebar.
A handful: Use one handle above the chamber. This configuration is ideal for low angle shooting.
A handful invert stabilizer is mounted on the handle.
Modes:
Panning Mode: Camera allowed to rotate left and right. And vertical movement axis is restricted.

Panning and tilting Mode: Camera orizintal allowed to rotate vertically. Axis movement is restricted.

Lock Mode: Camera stand oriontarea default. All camera movements are restricted.

Short description:

Motorized 3-axis stabilizer
Compatible with various DSLR
Capacity 1,63kg
Configuration for use with one hand or two hands
Rotation of 360 degrees on each axis
Settings Android app
Carrying case included`,
	price: {
		usd: 1024,
		eur: 0
	},
	subcategory: ["Feiyu Tech"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/03/Feiyu-MG-V2-Handheld-Gimbal.jpg","https://dronshop.ro/wp-content/uploads/2017/03/Feiyu-MG-V2-Handheld-Gimbal_04.jpg","https://dronshop.ro/wp-content/uploads/2017/03/Feiyu-MG-V2-Handheld-Gimbal_01.jpg","https://dronshop.ro/wp-content/uploads/2017/03/Feiyu-MG-V2-Handheld-Gimbal_02.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/09/GoPro-Hero-5-Session.jpg',
	title: 'Hero 5 Session – Gopro',
	description: 'GOPRO',
	description_full: 
	`ession GoPro Hero 5
GoPro Hero 5 Session - is powerful, compact and easy to use GoPro camera action.

Camera filming in 4K quality at 30 frames per second, and pictures are taken at a resolution of 10 megapixels. An advanced background noise cancellation is also present, the incorporation of three microphones cameras surface.

Simple and convinient
With one touch of the shutter button, you can start recording. 
Designed to be durable, water-resistant Black HERO5 to 10 m, without any additional housing. 
Hands-free control.

always Connected
Bluetooth and Wi-Fi is easy to stay connected to the application GoPro accessories and more.

Superior quality
Register empty at 4K and 10MP photos in the following ways: Single, Burst and Time Lapse.

Session HERO5 very stable and smooth video recording in any situation, regardless of where it is mounted.

HERO5 Session automatically filters wind noise.

Advanced image processing provides superior quality in low light.

Procesarerea Advanced Audio captures stereo sound channels.

The exposure setting is easy, can be set on the camera screen.`,
	price: {
		usd: 365,
		eur: 0
	},
	subcategory: ["GoPRO Hero"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/09/GoPro-Hero-5-Session.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/09/Hero-5-Black-GoPro.jpg',
	title: 'Hero 5 Black - GoPro',
	description: 'GOPRO',
	description_full: 
	`Hero 5 Black - GoPro
Black Hero 5 is the most powerful and easy to use GoPro camera action.

Camera filming in 4K quality at 30 frames per second, and pictures are taken at a resolution of 12 megapixels. An advanced background noise cancellation is also present, the incorporation of three microphones cameras surface. Hero5  is also equipped with GPS sensor and enables shooting in RAW format.

Simple and convinient
With a single press of the shutter button you can start recording 
designed to be durable, water-resistant Black HERO5 to 10 m, without any additional housing. 
You can preview and play back pictures, change settings and edit footage directly on your GoPro 
Control hands-free.

always Connected
Bluetooth and Wi-Fi is easy to stay connected to the application GoPro accessories and more.

By ECapture you can record where you made your recording video and photos.

Superior quality
Register empty at 4K and 12MP photos in the following ways: Single, Burst and Time Lapse.

Black HERO5 very stable and smooth video recording in any situation, regardless of where it is mounted.

Black HERO5 automatically filter out noise from the wind.

Advanced image processing provides superior quality in low light.

Procesarerea Advanced Audio captures stereo sound channels.

Photos in RAW format provides flexibility when using advanced photo editing software.

WDR mode was added and capture shadow detail and highlights the scene.

The exposure setting is easy, can be set on the camera screen.

 

SPECIFICATIONS
12MP / 30 fps Burst Time Lapse
4K30 / 1440P80 / 1080P120
Waterproof up to 10M
Easy one-button control
Bluetooth Wi-Fi +
Advanced reduce unwanted noise
Voice Control
video stabilization
Loading automatic CLOUD
Display with touch
Places listing
Photos in RAW + WDR`,
	price: {
		usd: 475,
		eur: 0
	},
	subcategory: ["GoPRO Hero"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/09/Hero-5-Black-GoPro.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/09/Drona-GoPro-Karma-2.jpg',
	title: 'Drona GoPro Karma',
	description: 'GOPRO',
	description_full: 
	`GoPro drone Karma
GoPro Karma is the first attempt by the company famous for cameras range action hero, a drone. Karma is a complete package containing drone Karma with a three-axis stabilization system removable handle for a stabilization system. The drone is designed for any type of user. It is easy to use, easy to carry. Practicality is the first criterion from GoPro. Karma drone can be easily used by amateurs but by professionals. Karma is compatible with GoPro Hero 4 (black / silver / Session), but also with the chambers of the new Hero Hero 5 5 Black and Session.

The drone is designed intuitive remote control with a touch screen already mounted remote control, eliminating the need for an intelligent device to play back the image from the drone.

With creative design drone is foldable and can carry along with room and stabilization system in a bag that is already included in the package.

Drona will be Disbon of October 23.

Specifications
Speed ​​Max .: 15 m / s
Distance max .: 1,000m
Altitudine max .: 4.500m
Resistance speed max .: 10m / s
Operating frequency: 2.4GHz
Size (open without screw): 303 x 411x 117mm
Size (tight): 365.2 x 224.3 x 89.9mm
Screw length: 25.4cm
Weight: 1006g`,
	price: {
		usd: 1086,
		eur: 0
	},
	subcategory: ["GoPRO Hero"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/09/Drona-GoPro-Karma-2.jpg","https://dronshop.ro/wp-content/uploads/2016/09/Drona-GoPro-Karma_04.jpg","https://dronshop.ro/wp-content/uploads/2016/09/Drona-GoPro-Karma_03.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/11/Remo-1.jpg',
	title: 'Remo - GoPro Hero5',
	description: 'GOPRO',
	description_full: 
	`Remo - GoPro Hero5
Remo is a radio remote control for Hero5 GoPro GoPro Session Hero5 with Black and voice control. It brings a better voice control with reduced wind noise or button can be used from a distance of 10 meters.

Specifications:

Voice Control
Range 10 meters
13 commands
Control buttons
Waterproof up to 5 meters
10 recognized languages`,
	price: {
		usd: 102,
		eur: 0
	},
	subcategory: ["GoPRO Hero"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/11/Remo-1.jpg","https://dronshop.ro/wp-content/uploads/2016/11/Remo-2.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/11/Venture-Filter-Pack-1.jpg',
	title: 'Venture 3-Pack Filter - Black Hero5 GoPro',
	description: 'GOPRO',
	description_full: 
	`Venture 3-Pack Filter - Black Hero5 GoPro
Venture Filter 3-Pack - Black Hero5 GoPro - Package includes three filters that improve quality recordings and photos. Polarizing filter is easy to use, reduces brightness and improves color saturation. ND8 filter, a neutral density filter, the recording time of the camera recude GoPro Hero5 3 stops, the records having such a cinematic appearance. ND8 filter gradually is the third filter pack and is used to capture great images at sunrise and sunset. Color filter has a more incisive on top and gradually becomes clear to the bottom. The package includes a transport bag to carry safe filters.`,
	price: {
		usd: 60,
		eur: 0
	},
	subcategory: ["GoPRO Hero"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/11/Venture-Filter-Pack-1.jpg","https://dronshop.ro/wp-content/uploads/2016/11/Venture-Filter-Pack-2.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2016/11/PolarPro_GoPro_Hero5_Polarizer_Filter-3.jpg',
	title: 'Polarizer Filter - Black Hero5 GoPro',
	description: 'GOPRO',
	description_full: 
	`Polarizer Filter - Black Hero5 GoPro
Polarizer Filter - GoPro Hero5 Black - filter helps the improvement of quality records without need for hours to improve your image later. Filter is designed to be easily mounted GoPro Hero5 Black and maintain a small profit. Ultra-lightweight construction makes the filter is compatible for installation on drone GoPro Karma. Polarizing filter is easy to use, reduces brightness and improves color saturation.`,
	price: {
		usd: 36,
		eur: 0
	},
	subcategory: ["GoPRO Hero"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2016/11/PolarPro_GoPro_Hero5_Polarizer_Filter-3.jpg","https://dronshop.ro/wp-content/uploads/2016/11/Polarizer_Filter_GoPro_Hero5-1.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/05/sj6legend_summer_pack.jpg',
	title: 'SJCAM SJ6 Legend Summer Pack',
	description: 'SJCAM',
	description_full: 
	`SJCAM SJ6 Legend Summer Pack
SJCAM SJ6 Summer Legend Pack is the package offered for the adventurous. With multiple types of mounting the package does not matter if you travel by bike, car or on foot, you will be able to use the camera for Action SJCAM easily.

Action SJCAM room is equipped with a powerful sensor from Panasonic capable of capturing 16MP photos and record video at a maximum 4K / 24fps.

Summer Package SJCAM SJ6 Legend Pack contains:
The basic package:

Legend 1 x Original SJCAM Action SJ6 cam;
1 x Waterproof Housing;
1 x Quick Release Buckle
Seat post 1 x Handlebar Mount
1 x Curved Adhesive Mount;
1 x Flat Mount Adhesive;
1 x 3-Way Mount Pivot Arm
2 x 3M adhesive tape;
1 x Mount frame;
1 x Quick Release clip for the Frame
1 x Vertical J-Hook Quick Release Buckle;
1 x Universal 1/4 Camera Tripod Mount
1 x Tripod Mount Adapter;
1 x Cleaning Cloth;
1 x USB Cable
1 x 900mAh Li-ion Battery;
Multi-Language User 1 x 2 x SJCAM Stickers`,
	price: {
		usd: 195,
		eur: 0
	},
	subcategory: ["SJCam"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/05/sj6legend_summer_pack.jpg","https://dronshop.ro/wp-content/uploads/2017/05/Untitled-3.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/01/SJ6-Legend-4K_negru.jpg',
	title: 'Legend SJ6 4K',
	description: 'SJCAM',
	description_full: 
	`Legend SJ6 4K | Official Pack`,
	price: {
		usd: 204,
		eur: 0
	},
	subcategory: ["SJCam"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/01/SJ6-Legend-4K_negru.jpg","https://dronshop.ro/wp-content/uploads/2017/01/SJ6-Legend-4K_rozaur.jpg","https://dronshop.ro/wp-content/uploads/2017/01/SJ6-Legend-4K_Argint.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/01/SJCAM-SJ5000X-ELITE.jpg',
	title: 'SJ5000X ELITE - 4K',
	description: 'SJCAM',
	description_full: 
	`SJ5000X ELITE | Official Pack
 Ahead of ITS class.The SJCAM SJ5000x is SJCAMs most robust feature Action Camera to date. Upgrading to 12.4mp Sony IMX078 Sensor Adding Adjustable Viewing Angles (70-170 Degrees) and record 4K video at 24 frames per second (4K24 Interpolated) has all new features packed into the SJCAM SJ5000x Elite Editon - Be the first.`,
	price: {
		usd: 199,
		eur: 0
	},
	subcategory: ["SJCam"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/01/SJCAM-SJ5000X-ELITE.jpg","https://dronshop.ro/wp-content/uploads/2017/01/SJCAM-SJ5000X-ELITE_oficiala_pack.jpg","https://dronshop.ro/wp-content/uploads/2017/01/SJ4000_Oficial-Bazic-Pack_accesorii.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/01/SJ5000-full-hd-WIFI_negru.jpg',
	title: 'SJ5000 Full HD WIFI',
	description: 'SJCAM',
	description_full: 
	`SJ5000 WIFI FULL HD | Official Pack
SJCAM SJ5000 Full HD WiFi is included in the standard package and a casing that allows you to shoot under water to a depth of 30 meters. Housing is also highly resistant to shock, dust, sand, mud.

Share your adventures. Stream and live videos via the Internet with the option Live Streaming or upload videos on your favorite social networks for friends and family joy.

SJCAM package offers in price and a lot of accessories and mounts to use your room at any time.

Connected to the computer outside the livestream, SJCAM can be used as a simple webcam.

SJ5000 WiFi with 2.0 LTPS Screen, 1080p (2560 * 1440) @ 30pfs, and

SJCAM Zone app has everything you Need to start shooting cool action 
videos and pictures.`,
	price: {
		usd: 170,
		eur: 0
	},
	subcategory: ["SJCam"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/01/SJ5000-full-hd-WIFI_negru.jpg","https://dronshop.ro/wp-content/uploads/2017/01/SJ5000-PLUS-WIFI_oficiala-pack.jpg","https://dronshop.ro/wp-content/uploads/2017/01/SJ4000_Oficial-Bazic-Pack_accesorii.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/01/SJ5000-Full-HD.jpg',
	title: 'SJ5000 Full HD',
	description: 'SJCAM',
	description_full: 
	`SJ5000 – Let’s get you Started | Official Pack
The SJ5000 budget Action Cam is all you need to get starting shooting stellar
film and photos. The 14MP SJ5000 Action Cam supports 1080p Video Record at
30fps (1920*1080). The SJ5000 also supports Burst-Mode, Motion Detection,
6x Zoom, HDMI-Out, Time-Lapse Video, Dash-cam and much more.`,
	price: {
		usd: 146,
		eur: 0
	},
	subcategory: ["SJCam"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/01/SJ5000-Full-HD.jpg","https://dronshop.ro/wp-content/uploads/2017/01/SJ5000-Full-HD_oficiala-pack.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/01/SJ4000-WIFI-FULL-HD.jpg',
	title: 'SJ4000 WIFI FULL HD',
	description: 'SJCAM',
	description_full: 
	`SJ4000 WIFI FULL HD | Official Pack
SJCAM SJ4000 WiFi 1080p Action Camera | 

The 12MP SJ4000 WiFi Action Camera supports 1080p Video Record at 30fps (1920*1080). The SJ4000 WiF also supports SJCAM Zone (Android & iOS WiFi App), Burst-Mode, Motion Detection, 4x Zoom, HDMI-Out, Time-Lapse Video, Dashcam and much more.`,
	price: {
		usd: 104,
		eur: 0
	},
	subcategory: ["SJCam"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/01/SJ4000-WIFI-FULL-HD.jpg","https://dronshop.ro/wp-content/uploads/2017/01/SJ4000-WIFI-FULL-HD_02.jpg","https://dronshop.ro/wp-content/uploads/2017/01/SJ4000-WIFI-FULL-HD_03.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'https://dronshop.ro/wp-content/uploads/2017/01/SJ4000-full_hd_02.jpg',
	title: 'SJ4000 FULL HD',
	description: 'SJCAM',
	description_full: 
	`SJ4000 FULL HD   SJCam |  Action Camera | Official Pack
The 12MP SJ4000 Action Cam supports 1080p Video Record at 30fps
(1920*1080). The SJ4000 also supports Burst-Mode, Motion Detection, 4x
Zoom, HDMI-Out, Time-Lapse Video, Dash-cam and much more.
The SJ4000 is available in over 7-colors. Click the button below
to check out full specs or to purchase the SJ4000
SJCAM SJ4000 Hot-Specs`,
	price: {
		usd: 97,
		eur: 0
	},
	subcategory: ["GSJCam"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["https://dronshop.ro/wp-content/uploads/2017/01/SJ4000-full_hd_02.jpg","https://dronshop.ro/wp-content/uploads/2017/01/SJ4000Wifi_rosu.jpg","https://dronshop.ro/wp-content/uploads/2017/01/SJ4000_Oficial-Bazic-Pack_accesorii.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'http://www.heli.ro/image/cache/data/Drone/Blade18QX-350x350.jpg',
	title: 'Blade 180 QX HD RTF',
	description: 'Blade',
	description_full: 
	`The Blade® 180 QX combines the latest Quad-core innovations with a high-performance HD video camera / photo. Using SAFE ™ technology, the 180 QX-HD maintains its superior stability in all three flight modes. With the E-flite® EFC ™ -720 HD camera, pilots can experience aerial photography by simply pressing a button on the transmitter included in the RTF package. Ideal for both indoor and outdoor flight, the 180 QX is the third eye for any pilot who wants to capture the moment in the air.

'Image capture' mode
With the included camera / video EFC-720 and the 2GB, 180 QX-HD micro SD card can capture still images and video in flight. This intuitive camera can be switched on / off at any time during flight, the switch being active on channel 5 of the transmitter.
Equipment 'SAFE'
The 180 QX HD comes pre-loaded with the three well-known SAFE technology. Flight modes that allow tilting qoadcopter at different angles have been specially designed to record stable and blur-free images while 'acro' mode allows pilots to experience acrobatic flight with the AS3X® Stability System.`,
	price: {
		usd: 192,
		eur: 0
	},
	subcategory: ["Blade"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["http://www.heli.ro/image/cache/data/Drone/Blade18QX-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/Blade18QX_web2-350x350.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'http://www.heli.ro/image/cache/data/Drone/blade350qx3-350x350.jpg',
	title: 'Blade 350 QX3',
	description: 'Blade',
	description_full: 
	`General presentation

The Blade® 350 QX3 gives you everything you need to put your GoPro * camera in the perfect spot for epic aerial photography. This Bind-N-Fly® version comes fully assembled with an installed Spektrum ™ receiver. All you have to do is charge the battery and bind to a 5+ channel DSM2® / DSMX® aircraft transmitter. *
* Not included - sold separately

SAFE® technology makes you look like a pro!
What makes the Blade 350 QX3 a great platform for the camera? SAFE (Enhanced Flight Sensor) advanced technology. Using this technology, the Blade 350 QX3 offers you two flight modes that have been specially programmed for video capture and aerial images. Both are equipped with self-leveling sensors and GPS and altitude. SAFE technology will land the aircraft for you if you turn on home.

Smart way
Perfect for beginner users. In intelligent mode, the Blade 350 QX3 will always fly in any direction using the control lever. If you move the control lever to the right, even if the aircraft is spinning, it will fly to the right. Intelligent mode also creates a SAFE Circle ™ barrier that prevents the flying aircraft from being too close to the pilot.`,
	price: {
		usd: 243,
		eur: 0
	},
	subcategory: ["Blade"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["http://www.heli.ro/image/cache/data/Drone/blade350qx3-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/blade_qx3_web4-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/blade_qx3_web3-350x350.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'http://www.heli.ro/image/cache/data/Drone/blade350qx3AP-350x350.jpg',
	title: 'Blade 350 QX3 AP Combo RTF C-Go2',
	description: 'Blade',
	description_full: 
	`General presentation

The Blade® 350 QX3 gives you everything you need to put your GoPro * camera in the perfect spot for epic aerial photography. This Bind-N-Fly® version comes fully assembled with an installed Spektrum ™ receiver. All you have to do is charge the battery and bind to a 5+ channel DSM2® / DSMX® aircraft transmitter. *
* Not included - sold separately

SAFE® technology makes you look like a pro!
What makes the Blade 350 QX3 a great platform for the camera? SAFE (Enhanced Flight Sensor) advanced technology. Using this technology, the Blade 350 QX3 offers you two flight modes that have been specially programmed for video capture and aerial images. Both are equipped with self-leveling sensors and GPS and altitude. SAFE technology will land the aircraft for you if you turn on home.

Smart way
Perfect for beginner users. In intelligent mode, the Blade 350 QX3 will always fly in any direction using the control lever. If you move the control lever to the right, even if the aircraft is spinning, it will fly to the right. Intelligent mode also creates a SAFE Circle ™ barrier that prevents the flying aircraft from being too close to the pilot.`,
	price: {
		usd: 524,
		eur: 0
	},
	subcategory: ["Blade"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["http://www.heli.ro/image/cache/data/Drone/blade350qx3AP-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/Bladeqx3_ap_combo_web2-350x350.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'http://www.heli.ro/image/cache/data/Drone/BLH8680EU_web1-350x350.jpg',
	title: 'Blade Chroma BNF - GoPro Ready',
	description: 'Blade',
	description_full: 
	`BLADE CHROMA BNF From a big hit on the baseball diamond to laughing with friends on a beach, colorful moments happen every day. Now, every detail of these picture-perfect occasions can be captured in high definition from a unique vantage point. Sleek, smart and easy to use, the Blade Chroma camera drone delivers high-quality video and stills taking memories to new heights. This one is fitted with a GoPro-Ready Fixed Camera Mount.
SAFE Plus technology
SAFE Plus technology gives you several flight modes that have been specially programmed to make smooth, steady image capture easy. In fact, it can make you look like a pro even if you’ve never flown a camera drone before! All flight modes feature self-leveling and use GPS and altitude sensors to precisely hold position. SAFE Plus technology will even land the aircraft for you if you activate the Return Home function.
    •    Smart Mode Perfect for first-time drone flyers.
    ◦    Stick Relativity moves drone in whatever direction the control stick is pushed, no matter which way the nose is pointed
    ◦    Creates a SAFE Circle™ barrier that prevents the aircraft from flying too close to you
    ◦    Auto-holds position and altitude when control sticks are released
    •    AP Mode For more experienced drone pilots.
    ◦    Responds like a conventional drone without Stick Relativity
    ◦    Gives you greater control authority by turning off the SAFE Circle
    ◦    Keeps control response smooth so panning and tracking shots look great
    ◦    Auto-holds position and altitude when control sticks are released

    •    Return Home Safe landings with the flip of a switch.
    ◦    Returns the drone to its start-up point and lands it for you
    ◦    Great for first-time flyers who aren’t ready to land themselves
    ◦    Easy way to regain visual contact if you lose sight in flight
    ◦    Resume full control at any time
    ◦    Activates automatically if controller signal is lost
    •    Adjustable Flight Boundaries Stay legal. Stay safe. Fly responsibly.
    ◦    Keeps the drone within altitude and distance limits you define
    ◦    Easily adjusted using the Chroma programmer
    ◦    Helps you avoid sensitive airspace ...and neighbors
Key features
    •    GoPro ready  fixed mount
    •    Easy to fly - no experience necessary
    •    30 minutes flight times
    •    Advanced SAFE Plus technology
    •    Return Home function
    •    Adjustable flight boundaries
    •    Uses GLONASS and GPS for greater accuracy and reliability
    •    Mast-mounted GPS antenna for superb signal reception
    •    5400mAh 3S LiPo flight battery and charger included
    •    USB programmer cable
Specifications
    •    Battery : 11.1V 3S 5400 mAh LiPo
    •    Main rotor diameter : 253 mm
    •    Lenght : 332 mm
    •    Weight : 1.3 kg
    •    Width : 332 mm
    •    Height : 242 mm
    •    Main motor type : Brushless outrinner
    •    Approximate Flight Time : 30 minutes`,
	price: {
		usd: 659,
		eur: 0
	},
	subcategory: ["Blade"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["http://www.heli.ro/image/cache/data/Drone/BLH8680EU_web1-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/BLH8680EU_web2-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/BLH8680EU_web4-350x350.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'http://www.heli.ro/image/cache/data/Drone/BLH2200_web1-350x350.jpg',
	title: 'Blade Glimpse FPV HD',
	description: 'Blade',
	description_full: 
	`Characteristics:

Completely assembled, does not require construction
SAFE® technology helps you learn to fly with your drones easily
Reliability favored by the 2.4GHz Spektrum ™ DSMX® technology
Integrated and installed HD
High quality 1280x720p video and 1 MP photo
Efficiency of 24 m downlink for live video (in your phone, your tablet)
Record photos and video with the Micro SD memory card
Easy body with long-lasting propeller
Powerful engine system that delivers low-noise performance
Spare propellers included
500mAh 1S Li-Po battery battery and USB charger included
Flight takes 6-8 minutes with only one battery charge
Includes a compact multifunctional transmitter with Spektrum ™ DSMX® technology
What do you need to fly:

Nothing! All you need to fly is included in the box!
Live video streaming requires compatible iOS / Android devices and Glimpse is for free in iTunes or Google Play.`,
	price: {
		usd: 241,
		eur: 0
	},
	subcategory: ["Blade"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["http://www.heli.ro/image/cache/data/Drone/BLH2200_web1-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/BLH2200_web3-350x350.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'http://www.heli.ro/image/cache/data/Drone/BLH8700_web1-350x350.jpg',
	title: 'Blade Inductrix',
	description: 'Blade',
	description_full: 
	`This is the Blade Inductrix Ready to Fly Ultra Micro Electric Quad-Copter Drone. Utilizing an Electric Ducted Fan (EDF) system, the Blade Inductrix is part jet, and part quadcopter! The cylindrical rotor housings add significant durability and when carefully tuned, produce a smoother flight with less noise. The Inductrix ultra micro drone features innovative flight technology and is a machine you can fly just about anywhere, with a performance edge that makes your flight experience more fun than you could imagine. Brilliant LED orientation lights and a sleek body design make it easy to keep going in the right direction. When combined with SAFE® technology with self-leveling, staying in control is effortless, even if it’s your first time behind the sticks!


Features:

    SAFE® Technology: Exclusive Horizon Hobby SAFE® technology combines small pitch and roll angle limits with electronic self-leveling to help you stay in control and have more fun.
    Quiet Ducted Fans: Four carefully-tuned electric ducted fans offer smooth performance that produces far less noise compared to normal quads that use propellers for thrust. The stealthy result is a machine that’s less intimidating with the appeal of a jet aircraft.
    Durable: Each cylindrical rotor housing ducts air through the high-speed rotors, and provides an inherently durable structure. You can bump the Inductrix drone into practically anything with little risk.
    Visibility: Brilliant LED lights are located to provide instant orientation reference. The clear rotor housings keep your view unobstructed and add an unmistakable glow to the airframe.
    Li-Po flight battery: The E-flite® 150mAh 1S 3.7V 30C Li-Po flight battery, included, can provide up to 5-minutes of flight and can be conveniently recharged with the included USB charger.
    Lightweight, fully assembled quadcopter
    Blade® MLP transmitter with genuine Spektrum™ DSMX® 2.4GHz technology (included)
    Includes both red and blue bodies

`,
	price: {
		usd: 70,
		eur: 0
	},
	subcategory: ["Blade"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["http://www.heli.ro/image/cache/data/Drone/BLH8700_web1-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/BLH8700_web3-350x350.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'http://www.heli.ro/image/cache/data/Drone/YUNTYHBEU-350x350.jpg',
	title: 'Typhoon H Yuneec',
	description: 'Yuneec',
	description_full: 
	`Captures the future

Ready-to-Fly, right out of the box

Avoiding collision by ultrasound

12 megapixel / video camera 4K UHD 30fps, HD 1080p 120fps

3-axis anti-vibration suspension camera with 360 ° complete rotation

Retractable landing gear

Easy-to-install twist and lock

Folding the rotor arms for compact storage

Integrated flight modes

ST16 controller with 7 inches built-in touchscreen`,
	price: {
		usd: 1300,
		eur: 0
	},
	subcategory: ["Yuneec"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["http://www.heli.ro/image/cache/data/Drone/YUNTYHBEU-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/YUNTYHBEU_1-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/YUNTYHBEU_2-350x350.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'http://www.heli.ro/image/cache/data/Drone/YUNTYHBREU_1-350x350.jpg',
	title: 'Typhoon H Yuneec | Backpack',
	description: 'Yuneec',
	description_full: 
	`Award-winning innovation

Typhoon H is the most advanced aerial photo and video platform available in this compact size. Appeared in response to the demand for a design that exceeds the limits of a traditional quadcopter, Typhoon H offers capabilities so far found only in high-end professional offers but at a consumer price.

Taifun H offers flight times of up to 25 minutes while shooting with the CGO3 + 4K UHD camera. The ST16 android ST16 has a 7-inch touch screen displaying live video flight sequences at 720p HD resolution and allows for a wide range of autonomous flight modes.

 

A 360 ° perspective on the world

The 3-axis anti-vibration suspension camera captures Ultra High Definition, ultra-stable 4K video, 12 megapixel images and can be rotated at 360 ° within an unlimited range of motion. The + CGO3 camera features a high-quality 115 ° lens, wide-angle lenses, and offers manual settings during the flight.`,
	price: {
		usd: 900,
		eur: 0
	},
	subcategory: ["Yuneec"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["http://www.heli.ro/image/cache/data/Drone/YUNTYHBREU_1-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/YUNTYHBREU-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/YUNTYHBEU_3-350x350.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'http://www.heli.ro/image/cache/data/Drone/YUNQ502RTFEU2-350x350.jpg',
	title: 'Yuneec Q500 4K RTF w/ ST10+ CGO3',
	description: 'Yuneec',
	description_full: 
	`Yuneec Q500 4K HD
Now available in a 4K version - the Yuneec Q500 4K Typhoon. With the C-GO3 4K camera captures video in stunning 4K quality and pictures with 12 megapixels record. A-distortion lens and built-in 3-axis gimbal help to produce smooth images.
C-GO3 4K camera
With the C-GO3 4K camera, take stunning video in 4K resolution. Through brushless motors on all 3 axes, the performance of the gimbal is both: strong and durable; at a precise correction of the control accuracy of 0.02 °. Equipped with a 5.8 GHz video downlink and a maximum range of 600 meters. Compatible with Pro Action Steady Grip, the C-GO3 also be mounted on the handle for ground shots and the image signal can be downloaded directly to your mobile device by the C-GO app is reproduced.
Follow Me Watch Me
For new drivers who have no experience in controlling Multikoptern, but still want to take the photos and videos of moving objects, the "Follow Me" function is the perfect answer. Follow Me mode follow the quadricopter where the direction and take the appropriate moments. In Watch Me mode aligned with the camera always wearing the remote control with him.
Equipment
This version of the Typhoon Q500 4K comes with ST-10 + Remote Control C-GO3 4K camera and a Batterij, Ready to Fly, you dont need any additional equipment
Feature
All-In-One Remote Control with integrated touchscreen 3-axis stabilized camera gimbal unit 4K / 30fps Ultra High Definition Video 1080p / 120fps Slow Motion Video 12 Megapixel photos with distortion-free lens Steady Grip included (YUNCGOSTG100)`,
	price: {
		usd: 800,
		eur: 0
	},
	subcategory: ["Yuneec"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["http://www.heli.ro/image/cache/data/Drone/YUNQ502RTFEU2-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/YUNQ502RTFEU2_web2-350x350.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'http://www.heli.ro/image/cache/data/Drone/q500_web1-350x350.jpg',
	title: 'Yuneec Q500 Typhoon',
	description: 'Yuneec',
	description_full: 
	`The Q500 Typhoon is a complete aerial photography and videography (APV) system. The Q500 System includes the aircraft, a 1080P HD camera, a CGO2-GB 3 axis precision gimbal, the ST10 personal ground station, 2 batteries, a charger and an 8GB micro SD card. In addition, there are a number of accessories including a sun shade, car charger, USB adapter/charger and an extra set of 4 rotors.
The ST10 personal ground station is a 10-channel 2.4GHz RC transmitter that supports a 5.8GHz video downlink that delivers streaming video to the built-in screen of the transmitter.
While the Q500 offers a superior flying experience, it is the quality of the video and still images that sets it apart. The CGO2 GB combines the 12 megapixel, 1080p/60FPS camera and the 3-axis brushless gimbal into a single unit that captures smooth, steady aerial video and still images in vivid detail.
    •    Flight Time Up to 25 Minutes
    •    Height 240mm (9.45 in)
    •    Width 420mm (16.54 in)
    •    Diagonal Length Without Rotor Blades 565mm (22.2 in)
    •    Propeller/Main Rotor Diameter 330mm (13.0 in)
    •    Weight Without Battery and Payload 1130g (40.0 oz)
    •    Battery 5400mAh 3S 11.1V LiPo (included)
    •    Charger 3S 11.1V LiPo DC Balancing Smart Charger with AC Adapter (included)
    •    Transmitter 10-channel 2.4GHz with 5.8GHz video downlink (included)
    •    3 Flight Modes Smart, Angle and Home Modes
    •    Maximum Flying Height Default 400 Feet Above Ground Level (Adjustable via the Q500 GUI)
    •    Maximum Rotational Velocity 65°/s
    •    Maximum Bank Angle 35°
    •    Maximum Climb Rate in Smart and Angle mode 3m/s
    •    Maximum Descent Rate in Smart and Angle mode 2m/s
    •    Radio Control Frequency Band 2.4GHz
    •    Takeoff Weight With Battery and CGO2-GB 1700g (60.0 oz)`,
	price: {
		usd: 1220,
		eur: 0
	},
	subcategory: ["Yuneec"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["http://www.heli.ro/image/cache/data/Drone/q500_web1-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/q500_web2-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/yuneec_500_web4-350x350.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'http://www.heli.ro/image/cache/data/Drone/yunnec_H920_web1-350x350.jpg',
	title: 'Yuneec Tornado H920',
	description: 'Yuneec',
	description_full: 
	`TORNADO H920

Availabe in RTF (Ready-To-Fly), RR (Receiver Ready) and ARF (Almost -Ready-To-Fly) versions
The Tornado H920 is a professional multirotor aerial photography and videography platform. Its unique design and innovative features make it possible to capture amazing photographs and video footage for a variety of uses. And thanks to nearly two decades of experience in developing and producing RC and manned aircraft, Yuneec engineers were able to deliver the long flight times, ease of operation and reliability you’ve been looking for in an aerial photography and videography solution.`,
	price: {
		usd: 1500,
		eur: 0
	},
	subcategory: ["Yuneec"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["http://www.heli.ro/image/cache/data/Drone/yunnec_H920_web1-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/yunnec_H920_web2-350x350.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	}),
	new Product({
	imagePath: 'http://www.heli.ro/image/cache/data/Drone/YUNTYHBPEU_web1-350x350.jpg',
	title: 'Yuneec Typhoon H Pro',
	description: 'Yuneec',
	description_full: 
	``,
	price: {
		usd: 1400,
		eur: 0
	},
	subcategory: ["Yuneec"],
	qty: 10,
	availability: 'inStock',
	rating: 10,
	galery: ["http://www.heli.ro/image/cache/data/Drone/YUNTYHBPEU_web1-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/YUNTYHBPEU_web3-350x350.jpg","http://www.heli.ro/image/cache/data/Drone/YUNTYHBPEU_web4-350x350.jpg"],
	review: ["best product", "coool!!!"],
	type: 'product'
	})
];

var done = 0;
for(var i = 0; i < products.length; i++) {
	console.log('merge' + i);
	products[i].save(function(err,result) {
		done++;
		if (done === products.length) {
			exit();
		}
	});
}

function exit() {
	console.log('se desconecteaza...');
	mongoose.disconnect();
}


// Product.update(
//     { _id: '591c943090dba511ec64a724' }, 
//     { $push: { 'review': 'a new review3' } },
//     function(err, model) {});

// Product.find({subcategory: 'Subcategory test 3' }, function(err,docs) {
// 	console.log('sa vedem');
// 	console.log(docs);
//   });