var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');
var Order = require('../models/order');
var Category = require('../models/category');
var Subcategory = require('../models/subcategory');
var Review = require('../models/review');
var Crossell = require('../models/crosssell');
var Coupon = require('../models/coupon');
var Wishlist = require('../models/wishlist');
var Exchange = require('../helpers/exchange');
var fx = require('money');
var request = require('superagent');
var Bitpay = require('bitpay-node');
var dateHelper = require('handlebars-dateformat');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   var successMsg = req.flash('success')[0];
//   Product.find(function(err,docs) {
//   	var productChunks = [];
//   	var chunkSize = 3;
//   	for (var i = 0; i < docs.length; i+= chunkSize) {
//   		productChunks.push(docs.slice(i, i + chunkSize));
//   	}
//   	res.render('shop/index', { title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessage: !successMsg });
//   });
// });

router.get('/product/:id', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  var messages = req.flash('error');
  var id = req.params.id;
  var products = [];
  var comments = [];
  var crosssell = [];
  var targetProducts = [];
  var symbol;
  var currencyName;

  Product.find({_id: id }, function(err, docs) {
    if (err) {
      return res.write('Error!');
    }
    
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i+= chunkSize) {
      products.push(docs.slice(i, i + chunkSize));
    }
  });

  Review.find({product: id }, function(err, docs) {
    if (err) {
      return res.write('Error!');
    }
    
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i+= chunkSize) {
      comments.push(docs.slice(i, i + chunkSize));
      // comments.forEach(function(element) {
      //   console.log(element);
      // });
    }
  });

  Crossell.find({product: id }, function(err, docs) {
    if (err) {
      return res.write('Error!');
    }

    var chunkSize = 1;
    for (var i = 0; i < docs.length; i+= chunkSize) {
      crosssell.push(docs.slice(i, i + chunkSize));
      crosssell[i].forEach(function(element) {
        console.log(element);
        Product.find({_id: element.targertProduct }, function(err, docs) {
          console.log('a ajuns aici');
          if (err) {
            return res.write('Error!');
          }
    
          var chunkSize = 1;
          for (var i = 0; i < docs.length; i+= chunkSize) {
            targetProducts.push(docs.slice(i, i + chunkSize));
            targetProducts.forEach(function(element) { 
              console.log(element);
            });
          }
      });
      });
    }
  });

  if(req.cookies.currency === 'usd') {
    symbol = '$';
    currencyName = 'usd';
  } else if (req.cookies.currency === 'eur'){
    symbol = '€';
    currencyName = 'eur';
  }
  
  //res.render('shop/product');
  res.render('shop/product', { title: 'Shopping Cart', id: id, currencyName: currencyName, symbol: symbol, products: products, comments: comments, targetProducts: targetProducts, successMsg: successMsg, noMessage: !successMsg, id: id, messages: messages, hasErrors: messages.length>0, helpers: {
            dateHelper: dateHelper
        }   });
});

router.get('/shop', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  var bestProductChunks = [];
  var carouselProductChunks = [];
  var categories = [];
  var symbol = '';
  var currencyName = '';

  Category.find(function(err,docs) {
    for (var i = 0; i < docs.length; i++) {
      categories.push(docs[i]);
      //console.log(docs[0]);
    }
  });

  req.cookies.i18n ? res.setLocale(req.cookies.i18n) : res.setLocale("en");
  if(!req.cookies.currency) {
    res.cookie('currency',"usd", { maxAge: 180 * 60 * 1000, httpOnly: true });
    symbol = '$';
    currencyName = 'usd';
  }

  if(req.cookies.currency === 'usd') {
    symbol = '$';
    currencyName = 'usd';
  } else if (req.cookies.currency === 'eur'){
    symbol = '€';
    currencyName = 'eur';
  }
  
  if(!req.session.cart) {
    var cart = new Cart({items: {}});
    req.session.cart = cart;
  }

  Product.find({type: 'bestProduct' }, function(err,docs) {
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i+= chunkSize) {
      bestProductChunks.push(docs.slice(i, i + chunkSize));
    }
  });

  Product.find({type: 'carouselProduct' }, function(err,docs) {
    var chunkSize = 8;
    for (var i = 0; i < docs.length; i+= chunkSize) {
      carouselProductChunks.push(docs.slice(i, i + chunkSize));
      carouselProductChunks.forEach(function(element) {
        console.log(element);
      });
    }
  });
  
  res.render('shop/home', { title: 'Shopping Cart', testHello: 'Hello',symbol: symbol, currencyName: currencyName, bestProductChunks: bestProductChunks, carouselProductChunks: carouselProductChunks, categories: categories, successMsg: successMsg, noMessage: !successMsg });
});

router.get('/', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  var productChunks = [];
  var categories = [];
  var symbol = '';
  var currencyName = '';

  Category.find(function(err,docs) {
    for (var i = 0; i < docs.length; i++) {
      categories.push(docs[i]);
      //console.log(docs[0]);
    }
  });

  req.cookies.i18n ? res.setLocale(req.cookies.i18n) : res.setLocale("en");
  if(!req.cookies.currency) {
    res.cookie('currency',"usd", { maxAge: 180 * 60 * 1000, httpOnly: true });
    symbol = '$';
    currencyName = 'usd';
  }

  if(req.cookies.currency === 'usd') {
    symbol = '$';
    currencyName = 'usd';
  } else if (req.cookies.currency === 'eur'){
    symbol = '€';
    currencyName = 'eur';
  }
  
  if(!req.session.cart) {
    var cart = new Cart({items: {}});
    req.session.cart = cart;
  }

  Product.find(function(err,docs) {
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i+= chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
  });

  res.render('shop/index', { title: 'Shopping Cart', testHello: 'Hello',symbol: symbol, currencyName: currencyName, products: productChunks, categories: categories, successMsg: successMsg, noMessage: !successMsg });
});

router.get('/currency/:currency', function(req, res, next) {
  var currency = req.params.currency;
  if(currency != "usd" && currency != "eur") {
    return res.redirect('back'); 
  }
  res.cookie('currency',currency, { maxAge: 180 * 60 * 1000, httpOnly: true });
  if (currency === 'eur' && !req.cookies.currencyLiveness) {
    console.log('hai sa vedem....');
    res.cookie('currencyLiveness',true, { maxAge: 900000, httpOnly: true });
    request
      .get('http://api.fixer.io/latest')
      .set('Accept', 'application/json')
      .end(function(err, res){
        var data = res.body;
        fx.rates = data.rates
        fx.base = data.base
        Product.find(function(err,docs) {
          for (var i = 0; i < docs.length; i++) {
          var query = { title: docs[i].title };
          var usd = docs[i].price.usd;
          var result = fx(usd).from("USD").to("EUR").toFixed(0);
          Product.update(query, { price: {usd:usd,eur:result} }, function (err, res) {});
          }
        });  
    }); 
  }

  if (req.session.cart) {
    var cart = new Cart(req.session.cart);
    cart.update(currency);
    req.session.cart = cart;
    console.log(req.session.cart);
  }

  res.redirect('back');
});

router.get('/subcategory/:name/:page', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  var name = req.params.name;
  var pageId = req.params.page;
  var limitId = 9;
  var query = {subcategory: name };
  var options = {
    page: parseInt(pageId),
    limit: parseInt(limitId)
  };
  var productChunks = [];
  var totalPages = [];
  var successMsg = req.flash('success')[0];
  var symbol = '';
  var currencyName = '';

  if(!req.cookies.currency) {
    res.cookie('currency',"usd", { maxAge: 180 * 60 * 1000, httpOnly: true });
    symbol = '$';
    currencyName = 'usd';
  }

  if(req.cookies.currency === 'usd') {
    symbol = '$';
    currencyName = 'usd';
  } else if (req.cookies.currency === 'eur'){
    symbol = '€';
    currencyName = 'eur';
  }
  
  Product.paginate(query, options, function(err, result) {
    //console.log(result);
    //res.send(result.docs);
    var chunkSize = 3;
    for (var i = 0; i < result.pages; i++) {
      totalPages.push(i+1);
    }
    
    for (var i = 0; i < result.docs.length; i+=chunkSize) {
      console.log(i);
      console.log(result.docs[i]);
      productChunks.push(result.docs.slice(i, i + chunkSize));
      console.log(productChunks.price);
      //productChunks.push(result.docs[i]);
    }
    res.render('shop/index', { 
      title: 'Shopping Cart', 
      products: productChunks, 
      totalPages: totalPages,
      subcategory: name,
      limitId: limitId,
      successMsg: successMsg, 
      noMessage: !successMsg,
      symbol: symbol, 
      currencyName: currencyName,
      helpers: {
            foo: function () { return 'asdas'; }
        }   
    });
  // result.docs
  // result.total
  // result.limit - 10
  // result.page - 3
  // result.pages
  });
  // Product.find({subcategory: name }, function(err,docs) {
  //   var chunkSize = 3;
  //   for (var i = 0; i < docs.length; i+= chunkSize) {
  //     productChunks.push(docs.slice(i, i + chunkSize));
  //   }
  // });

  // res.render('shop/index', { 
  //     title: 'Shopping Cart', 
  //     products: productChunks,
  //     successMsg: successMsg, 
  //     noMessage: !successMsg
  // });
});

router.get('/test/:page/:limit', function(req, res, next) {
  var pageId = req.params.page;
  var limitId = req.params.limit;
  var query = {};
  var options = {
    page: parseInt(pageId),
    limit: parseInt(limitId)
  };

  Product.paginate(query, options, function(err, result) {
    //console.log(result);
    //res.send(result.docs);
    var productChunks = [];
    var chunkSize = 3;
    var totalPages = [];
    for (var i = 0; i < result.pages; i++) {
      totalPages.push(i+1);
    }
    
    for (var i = 0; i < result.docs.length; i+=chunkSize) {
      console.log(i);
      console.log(result.docs[i]);
      productChunks.push(result.docs.slice(i, i + chunkSize));
      console.log(productChunks);
      //productChunks.push(result.docs[i]);
    }
    res.render('shop/index', { 
      title: 'Shopping Cart', 
      products: productChunks, 
      totalPages: totalPages,
      helpers: {
            foo: function () { return 'asdas'; }
        }   
    });
  // result.docs
  // result.total
  // result.limit - 10
  // result.page - 3
  // result.pages
  });
});

router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart: {items: {}});
  var currency = req.cookies.currency;
  Product.findById(productId, function(err, product) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(product,product.id,currency);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('back');
  });
});

router.get('/wishlist/:id', function(req, res, next) {
  var id = req.params.id;
  if (req.isAuthenticated()) {

    Wishlist.findOne({'user': req.user, 'productId': id}, function(err, wishlist){
      console.log(wishlist);
    if (err) {
      return res.write('Error!');
    }
    if (wishlist) {
      req.flash('error', 'already in your wishlist');
      return res.redirect('back');
    } else {
      var wishlist = new Wishlist({
        user: req.user,
        productId: id
      });
      wishlist.save(function(err, result) {
        req.flash('success', 'product added to the wishlist');
        return res.redirect('back');
      });
    }
    });

    // var wishlist = new Wishlist({
    //   user: req.user,
    //   productId: id
    // });
    // wishlist.save(function(err, result) {
    //   req.flash('success', 'product added to the wishlist');
    //   return res.redirect('back');
    // });
  } else {
    res.redirect('/user/signin');
  }
});

router.get('/wishlist', function(req, res, next) {
  var wish = [];
  var prods = [];
  var symbol;
  var currencyName;

  if(req.cookies.currency === 'usd') {
    symbol = '$';
    currencyName = 'usd';
  } else if (req.cookies.currency === 'eur'){
    symbol = '€';
    currencyName = 'eur';
  }

  if (req.isAuthenticated()) {
    Wishlist.find({user: req.user }, function(err, docs) {
    if (err) {
      return res.write('Error!');
    }
    
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i+= chunkSize) {
      wish.push(docs.slice(i, i + chunkSize));
      wish.forEach(function(element) {
        element.forEach(function(element2) {
          Product.findOne({_id: element2.productId }, function(err, docs) {
    if (err) {
      return res.write('Error!');
    }

      prods.push(docs);
      });
        });
      });
    }
    });

    res.render('shop/wishlist', { title: 'Wishlist', wish: wish, prods: prods, currencyName: currencyName});
  } else {
    res.redirect('/user/signin');
  }
});

router.get('/wishlist/remove/:id', function(req, res, next) {
    var id = req.params.id;

    Wishlist.remove({'user': req.user, 'productId': id}, function(err, wishlist){
      console.log(wishlist);
    if (err) {
      return res.write('Error!');
    } else {
      res.redirect('back');
    }
    });
});

router.get('/de', function(req, res, next) {
  //res.setLocale('de');
  res.cookie('i18n', 'de');
  //res.send(res.__('Hello'));
  return res.redirect('back');
});

router.get('/en', function(req, res, next) {
  //res.setLocale('de');
  res.cookie('i18n', 'en');
  //res.send(res.__('Hello'));
  return res.redirect('back');
});

router.get('/testCeva', function(req, res, next) {
  res.render('shop/test');
});

router.get('/reduce/:id', function(req,res,next) {
  if (!req.session.cart) {
    return res.redirect('/');
  }
  var productId = req.params.id;
  var cart = new Cart(req.session.cart);
  cart.removeOne(productId);
  //console.log(cart);
  req.session.cart = cart;
  res.redirect('/show-cart');
});

router.get('/search/:product', function(req,res,next) {
  var search = '/' + req.params.product + '/';
  var reg = new RegExp(req.params.product);
  console.log(search);
  console.log(reg);
  Product.find({ $or: [ {title: reg}, {description_full: reg}]}, function(err, products) {
    console.log(search);
    if (err) {
      return res.write('Error!');
    }
    res.send(products);
  });
});

router.get('/pula', function(req,res,next) {
  res.send('pula');
});

router.get('/remove/:id', function(req,res,next) {
  if (!req.session.cart) {
    return res.redirect('/');
  }
  var productId = req.params.id;
  var cart = new Cart(req.session.cart);
   cart.removeAll(productId);
  req.session.cart = cart;
  res.redirect('/show-cart');
});

router.get('/show-cart', function(req, res, next) {
  var messages = req.flash('error');
  var successMsg = req.flash('success')[0];

  if (!req.session.cart) {
    return res.render('shop/show-cart', {products: null});
  }
  var cart = new Cart(req.session.cart);
  if(req.cookies.currency === 'usd') {
    symbol = '$';
    currencyName = 'usd';
  } else if (req.cookies.currency === 'eur'){
    symbol = '€';
    currencyName = 'eur';
  }

  console.log(cart);
  var isCoupon = cart.coupon.value ? true : false;
  var couponValue = cart.coupon.value ? cart.coupon.value : 0;
  var totalAllThree = cart.totalAllThree;

  res.render('shop/show-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice, totalAllThree: totalAllThree, couponValue: couponValue, symbol:symbol, shipping: cart.shipping, successMsg: successMsg, noMessage: !successMsg, messages: messages, hasErrors: messages.length>0, isCoupon: isCoupon});
});

router.get('/checkout/card', isLoggedIn,function(req, res, next) {
  var symbol = '';
  var currencyName = '';
  if (!req.session.cart) {
    return res.redirect('shop/show-cart');
  }
  if(req.cookies.currency === 'usd') {
    symbol = '$';
    currencyName = 'usd';
  } else if (req.cookies.currency === 'eur'){
    symbol = '€';
    currencyName = 'eur';
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];
  res.render('shop/checkoutStripe', {total: cart.totalPrice, symbol: symbol, errMsg: errMsg, noError: !errMsg});
});

router.get('/checkout/paypal', isLoggedIn,function(req, res, next) {
  var symbol = '';
  var currencyName = '';
  if (!req.session.cart) {
    return res.redirect('shop/show-cart');
  }
  if(req.cookies.currency === 'usd') {
    symbol = '$';
    currencyName = 'usd';
  } else if (req.cookies.currency === 'eur'){
    symbol = '€';
    currencyName = 'eur';
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];
  res.render('shop/checkoutPaypal', {total: cart.totalPrice, totalAllThree: cart.totalAllThree, symbol: symbol, shipping: cart.shipping, errMsg: errMsg, noError: !errMsg});
});

router.get('/checkout/bitcoin', isLoggedIn,function(req, res, next) {
  resRouter = res;
  var symbol = '';
  var currencyName = '';
  if (!req.session.cart) {
    return res.redirect('shop/show-cart');
  }
  if(req.cookies.currency === 'usd') {
    symbol = '$';
    currencyName = 'usd';
  } else if (req.cookies.currency === 'eur'){
    symbol = '€';
    currencyName = 'eur';
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];
  var btcConversion;
  request
  .get('https://blockchain.info/tobtc')
  .query({ currency: currencyName.toUpperCase(), value: cart.totalAllThree }) // query string
  .set('Accept', 'application/json')
  .end(function(err, res){
    // Calling the end function will send the request
    btcConversion = res.text;
    console.log(btcConversion);
    resRouter.render('shop/checkoutBitcoins', {total: cart.totalAllThree, btcConversion: btcConversion, symbol: symbol, shipping: cart.shipping, errMsg: errMsg, noError: !errMsg});
  });
});

router.post('/checkoutStripe', isLoggedIn,function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('shop/show-cart');
  }
  var cart = new Cart(req.session.cart);
  var stripe = require("stripe")(
  "sk_test_ZP8z9OQHdBIwjXgMhcFfsds6"
  );

  stripe.charges.create({
  amount: cart.totalAllThree * 100,
  currency: req.cookies.currency,
  source: req.body.stripeToken, // obtained with Stripe.js
  description: "Test Charge"
  }, function(err, charge) {
  // asynchronously called
    if (err) {
      req.flash('error', err.message);
      return res.redirect('/checkout/card');
    }
    var order = new Order({
      user: req.user,
      cart: cart,
      address: req.body.address,
      name: req.body.name,
      paymentId: charge.id,
      currency: req.cookies.currency,
      paymentType: 'stripe'
    });
    order.save(function(err, result) {
      req.flash('success', 'The transaction was successful');
      req.session.cart = null;
      res.redirect('/shop');
    });
  });
});

router.post('/checkout2', isLoggedIn,function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('shop/show-cart');
  }
  var stripe = require("stripe")(
  "sk_test_ZP8z9OQHdBIwjXgMhcFfsds6"
  );

  var source = stripe.sources.retrieve(
    req.body.stripeToken,
    function(err, source) {
    // asynchronously called
    stripe.charges.create({
      amount: source.amount,
      currency: source.currency,
      source: source.id,
      description: "Example charge"
    }, function(err, charge) {
    // asynchronously called
    res.send(charge);
    });
    }
  );
});

router.post('/comment',function(req, res, next) {
  if (req.isAuthenticated()) {
  var comment = req.body.comment;
  var product = req.body.id;
  var name = req.user.facebook.name ?
      req.user.facebook.name : (req.user.google.name ? req.user.google.name : req.user.name);

  var newComment = new Review({
      product: product,
      comment: comment,
      name: name
    });
    newComment.save(function(err, result) {
      req.flash('success', 'a new comment was added.');
      res.redirect('back');
    });
  } else {
    res.redirect('/user/signin');
  }
});



router.post('/checkoutPaypal', isLoggedIn,function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('shop/show-cart');
  }
  var cart = new Cart(req.session.cart);
  var currency = req.cookies.currency;
  var paypal = require('paypal-rest-sdk');
  var payment = {
  "intent": "sale",
  "payer": {
    "payment_method": "paypal"
  },
  "redirect_urls": {
    "return_url": "http://localhost:3000/checkoutPaypal/success",
    "cancel_url": "http://localhost:3000/checkoutPaypal/failure"
  },
  "transactions": [{
        "amount": {
            "currency": currency.toUpperCase(),
            "total": cart.totalPrice
        },
        "description": "This is the payment description."
    }]
  };
  paypal.payment.create(payment, function (error, payment) {
  if (error) {
    console.log(error);
  } else {
    if(payment.payer.payment_method === 'paypal') {
      req.session.paymentId = payment.id;
      var redirectUrl;
      for(var i=0; i < payment.links.length; i++) {
        var link = payment.links[i];
        if (link.method === 'REDIRECT') {
          redirectUrl = link.href;
        }
      }
      res.redirect(redirectUrl);
    }
  }
});
});

router.get('/checkoutPaypal/success', isLoggedIn,function(req, res, next) {
  var order;
  var paypal = require('paypal-rest-sdk');
  var cart = new Cart(req.session.cart);
  var currency = req.cookies.currency;
  var paymentId = req.session.paymentId;
  var payerId = req.param('PayerID');

  var details = { "payer_id": payerId };
  var execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": currency.toUpperCase(),
            "total": cart.totalAllThree
        }
    }]
  }
  console.log(details);
  console.log(paymentId);
  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
      console.log(error);
    } else {
      payment.transactions.forEach(function(element) {
        console.log(element);
        order = new Order({
          user: req.user,
          cart: cart,
          address: payment.payer.payer_info.shipping_address.city,
          name: payment.payer.payer_info.shipping_address.recipient_name,
          paymentId: paymentId,
          currency: req.cookies.currency,
          paymentType: payment.payer.payment_method
        });
      });
      order.save(function(err, result) {
        console.log(err);
        console.log(result);
        req.flash('success', 'The transaction was successful');
        req.session.cart = null;
        //res.send(JSON.stringify(payment));
        res.redirect('/shop');
      });
    }
  });
});

router.post('/checkoutBitcoins', isLoggedIn,function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('shop/show-cart');
  }
  var cart = new Cart(req.session.cart);
  var client = new Bitpay.Client({ apiKey: '' });
  var bitcoins = req.body.bitcoin;
  console.log(bitcoins);
  var invoiceOptions = { 
    price: bitcoins, 
    currency: 'BTC',
    notificationURL: 'http://localhost:3000/bitpay/payment',
    transactionSpeed: 'high',
    fullNotifications: true,
    notificationEmail: 'ditamihai@gmail.com',
    redirectURL: 'http://localhost:3000/bitpay/payment'
  };
  client.createInvoice(invoiceOptions, function(err, invoice) {
    console.log(invoice);
    var order = new Order({
          user: req.user,
          cart: cart,
          address: req.body.address,
          name: req.body.name,
          paymentId: invoice.id,
          currency: invoice.currency,
          paymentType: 'bitcoin',
          totalBTC: bitcoins
    });
    order.save(function(err, result) {
        console.log(err);
        console.log(result);
        req.session.cart = null;
        res.redirect(invoice.url);
    });
  });
});

router.get('/bitpay/payment',function(req, res, next) {
  console.log(req.body);
  req.flash('success', 'The transaction was successful');
  res.redirect('/');
});

router.get('/coupon/:coupon',function(req, res, next) {
  var coupon = req.params.coupon;
  var currency = req.cookies.currency;
  //res.send(coupon);
  Coupon.findOne({code: coupon }, function(err, docs) {
    if (err) {
      return res.write('Error!');
    }
    
    if (!docs) {
      req.flash('error', 'this coupon is not valid.');
      return res.send('This coupon is not valid.');
    }

    var cart = new Cart(req.session.cart);
    cart.addCoupon(docs.code, docs.discount, currency);
    req.session.cart = cart;

    console.log(docs);

    res.redirect('/show-cart');

  });
});

router.get('/delete/coupon',function(req, res, next) {
  console.log('am ajuns aici...');
  var currency = req.cookies.currency;
  var cart = new Cart(req.session.cart);
  cart.removeCoupon(currency);
  req.session.cart = cart;

  res.redirect('/show-cart');
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/signin');
}
