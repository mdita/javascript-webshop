module.exports = function Cart(oldCart) {
	this.items = oldCart.items || {};
	this.totalQ = oldCart.totalQ || 0;
	this.totalPrice = oldCart.totalPrice || 0;
	this.shippingValues = { price: {usd: 5, eur:4 } };
	this.shipping = oldCart.shipping || 0;
	this.totalPriceShipping = oldCart.totalPriceShipping || 0;
	this.coupon = oldCart.coupon || {};
	this.totalAllThree = oldCart.totalAllThree || 0;

	this.add = function(item, id, currency) {
		var storedItems = this.items[id];
		if (!storedItems) {
			storedItems = this.items[id] = {item: item, qty: 0, price: 0};
		}
		storedItems.qty++;
		storedItems.oldPrice = storedItems.price;
		if (currency === 'usd') {
			storedItems.price = storedItems.item.price.usd * storedItems.qty;
			this.shipping = this.shippingValues.price.usd;
		} else {
			storedItems.price = storedItems.item.price.eur * storedItems.qty;
			this.shipping = this.shippingValues.price.eur;
		}
		console.log(storedItems.item.price);
		console.log(storedItems.price);
		console.log(storedItems.qty);
		this.totalQ++;
		console.log('pret total after');
		console.log(this.totalPrice);
		this.totalPrice += storedItems.price - storedItems.oldPrice;
		this.currency = currency;
		this.totalPriceShipping = this.totalPrice + this.shipping;
		console.log('pret total before');
		console.log(this.totalPrice);
		if (this.coupon.value) {
			this.coupon.value = this.totalPrice * this.coupon.discount;
		}

		this.totalAllThree = this.totalPrice + this.shipping - (this.coupon.value ? this.coupon.value : 0);
	};

	this.addCoupon = function(code, discount, currency) {
		this.currency = currency;
		
		console.log('din metoda');
		console.log(code);
		console.log(discount);
		this.coupon = {
			code: code,
			discount: discount,
			value: (discount * this.totalPrice).toFixed(2)
		}

		this.totalAllThree = this.totalPrice + this.shipping - (this.coupon.value ? this.coupon.value : 0);
	}

	this.removeCoupon = function(currency) {
		this.currency = currency;

		delete this.coupon.code;
		delete this.coupon.discount;
		delete this.coupon.value;

		this.totalAllThree = this.totalPrice + this.shipping - (this.coupon.value ? this.coupon.value : 0);
	}

	this.removeOne = function(id) {
		if(this.items[id].currency === 'eur') {
			this.items[id].qty--;
			this.items[id].price -= this.items[id].item.price.eur;
			this.totalQ--;
			this.totalPrice -= this.items[id].item.price.eur;
			this.totalPriceShipping = this.totalPrice + this.shipping;

			if (this.coupon.value) {
				this.coupon.value = this.totalPrice * this.coupon.discount;
			}

			this.totalAllThree = this.totalPrice + this.shipping - (this.coupon.value ? this.coupon.value : 0);
		} else {
			this.items[id].qty--;
			this.items[id].price -= this.items[id].item.price.usd;
			this.totalQ--;
			this.totalPrice -= this.items[id].item.price.usd;
			this.totalPriceShipping = this.totalPrice + this.shipping;

			if (this.coupon.value) {
				this.coupon.value = this.totalPrice * this.coupon.discount;
			}

			this.totalAllThree = this.totalPrice + this.shipping - (this.coupon.value ? this.coupon.value : 0);
		}

		if (this.items[id].qty <= 0) {
			delete this.items[id];
		}
	}

	this.removeAll = function(id) {
		delete this.coupon.code;
		delete this.coupon.discount;
		delete this.coupon.value;

		this.totalQ -= this.items[id].qty;
		this.totalPrice -= this.items[id].price;
		this.totalPriceShipping = this.totalPrice + this.shipping;
		this.totalAllThree = this.totalPrice + this.shipping - (this.coupon.value ? this.coupon.value : 0);

		delete this.items[id];
	}

	this.generateArray = function() {
		var arr = [];
		for (var id in this.items) {
			arr.push(this.items[id]);
		}
		return arr;
	};

	this.update = function(currency) {
		this.currency = currency;
		console.log(this.currency);
		var updateTotalPrice = 0;
		for(var i in this.items) {
			console.log(this.items[i]);
			if(currency === 'eur') {
				this.items[i].price = this.items[i].qty * this.items[i].item.price.eur;
				this.items[i].oldPrice = (this.items[i].qty - 1) * this.items[i].item.price.eur;
				updateTotalPrice += this.items[i].price;
				this.shipping = this.shippingValues.price.eur;
			} else {
				this.items[i].price = this.items[i].qty * this.items[i].item.price.usd;
				this.items[i].oldPrice = (this.items[i].qty - 1) * this.items[i].item.price.usd;
				updateTotalPrice += this.items[i].price;
				this.shipping = this.shippingValues.price.usd;
			}
    	}
    	this.totalPrice = updateTotalPrice;
    	this.totalPriceShipping = this.totalPrice + this.shipping;

    	if (this.coupon.value) {
    		this.coupon.value = this.totalPrice * this.coupon.discount;
		}

		this.totalAllThree = this.totalPrice + this.shipping - (this.coupon.value ? this.coupon.value : 0);
		// this.items.forEach(function(element){
		// 	console.log('sa testam update here....');
		// 	console.log(element);
		// });
	}
};