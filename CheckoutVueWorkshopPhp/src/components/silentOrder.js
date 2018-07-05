const axios = require('axios');
const $ = require('jquery');

const Provider = "Simulado";

class SilentOrder {
	constructor() {
		this.creditCardSelector = "";
		this.cvvSelector = "";
		this.expirationDateSelector = "";
		this.cardHolderSelector = "";
		this.cardBrandSelector = "";
		this.accessTokenSelector = "";
	}

	setCreditCardSelector(creditCardSelector) {
		this.creditCardSelector = creditCardSelector;
		return this;
	}

	setCvvSelector(cvvSelector) {
		this.cvvSelector = cvvSelector;
		return this;
	}

	setExpirationDateSelector(expirationDateSelector) {
		this.expirationDateSelector = expirationDateSelector;
		return this;
	}

	setCardHolderSelector(cardHolderSelector) {
		this.cardHolderSelector = cardHolderSelector;
		return this;
	}

	setCardBrandSelector(cardBrandSelector) {
		this.cardBrandSelector = cardBrandSelector;
		return this;
	}

	setAccessTokenSelector(accessTokenSelector) {
		this.accessTokenSelector = accessTokenSelector;
		return this;
	}

	getCreditCard() {
		return $(this.creditCardSelector);
	}

	getCvv() {
		return $(this.getCvv);
	}

	getExpirationDate() {
		return $(this.expirationDateSelector);
	}

	getHolderName() {
		return $(this.cardHolderSelector);
	}

	getBrand() {
		return $(this.cardBrandSelector);
	}

	getAccessToken() {
		let match = document.cookie.match(new RegExp(this.accessTokenSelector + '=([^;]+)'));
		if (match) return match[1];
		else throw "Accesstoken not found";
	}

	sendTransaction({
		amount,
		MerchantOrderId
	}) {
		var params = {
			"MerchantOrderId": MerchantOrderId,
			"Payment": {
				"Type": "CreditCard",
				"Amount": amount,
				"Provider": Provider,
				"Installments": 1,
				"CreditCard": {
					"CardNumber": this.getCreditCard(),
					"Holder": this.getHolderName(),
					"ExpirationDate": this.getExpirationDate(),
					"SecurityCode": this.getCvv(),
					"Brand": this.getBrand()
				}
			}
		}
		
		return axios.post("https://apisandbox.cieloecommerce.cielo.com.br/1/sales", params, {
			headers: {
				Authorization: "Bearer " + this.getAccessToken(),
				"Access-Control-Allow-Origin": "*"
			}
		});
	}
}

export default SilentOrder
