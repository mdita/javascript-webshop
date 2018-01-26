// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_ZP8z9OQHdBIwjXgMhcFfsds6");

var fx = require('money');
//var request = require('superagent');
var request = require('sync-request');
var res = request('GET', 'https://google.com', {
  'headers': {
    'user-agent': 'example-user-agent'
  }
});
console.log(res);
// request
//   .get('https://blockchain.info/tobtc')
//   .query({ currency: 'USD', value: 20000 }) // query string
//   .set('Accept', 'application/json')
//   .end(function(err, res){
//     // Calling the end function will send the request
//     console.log(res.text);
//   });
// var data_test = request
//                   .get('http://api.fixer.io/latest')
//                   .set('Accept', 'application/json')
//                   .end();
// console.log(data_test.req._events.response);
// request
//    .get('http://api.fixer.io/latest')
//    .set('Accept', 'application/json')
//    .end(function(err, res){
//    	test(res.body);
//    });

// function test(data){
// 	//console.log(data.rates);
// 	fx.rates = data.rates
// 	fx.base = data.base
// 	//console.log(fx.rates);
//   	var rate = fx(1).from("EUR").to("USD")
//   	var rate2 = fx(1).from("EUR").to("RON")
//     var rate3 = fx(1).from("USD").to("EUR")
//   	//var rate2 = fx(1).to("RON");
//   	console.log(rate.toFixed(2));
//     console.log(rate2.toFixed(2));
//     console.log(rate3.toFixed(2));
//   	//console.log("£1 = $" + rate.toFixed(4));
// }


// var source = stripe.source.create({
//   type: "bitcoin",
//   amount: 1000,
//   currency: "usd",
//   owner: {
//     email: "payinguser+fill_now@example.com"
//   }
// }, function(err, source) {
//   stripe.charges.create({
//     amount: source.amount,
//     currency: source.currency,
//     source: source.id,
//     description: "Example charge"
//   }, function(err, charge) {
//     // asynchronously called
//     console.log(charge);
//   });
// });


// stripe.source.create({
//   type: "bitcoin",
//   amount: 1000,
//   currency: "usd",
//   owner: {
//     email: "payinguser+fill_now@example.com"
//   }
// }, function (err, res) {
// 	console.log(res);
// })