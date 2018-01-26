module.exports = function Exchange() {
	var fx = require('money');
	var request = require('superagent');	

	// this.execute = function (from, to, value){
	// //console.log(data.rates);
	// request
	// 	.get('http://api.fixer.io/latest')
	//    	.set('Accept', 'application/json')
	//    	.end(function(err, res){
	//    	exchange(res.body,from,to,value);
	// });
	// }

	this.execute = function (from,to,value) {
		request
			.get('http://api.fixer.io/latest')
	   		.set('Accept', 'application/json')
	   		.end(function(err, res){
	   			var data = res.body;
	   			fx.rates = data.rates
				fx.base = data.base
				//console.log(fx.rates);
				console.log(from);
				console.log(to);
				console.log(value);
				var result = fx(value).from(from).to(to).toFixed(2);
		});
	  	// var rate = fx(1).from("EUR").to("USD")
	  	// var rate2 = fx(1).from("EUR").to("RON")
	   //  var rate3 = fx(1).from("USD").to("EUR")
	  	// //var rate2 = fx(1).to("RON");
	  	// console.log(rate.toFixed(2));
	   //  console.log(rate2.toFixed(2));
	   //  console.log(rate3.toFixed(2));
	  	//console.log("£1 = $" + rate.toFixed(4));
	}

};