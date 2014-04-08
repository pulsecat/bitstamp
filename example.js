var Bitstamp = require('./bitstamp.js');

var publicBitstamp = new Bitstamp();

publicBitstamp.transactions({limit: 100}, console.log);
publicBitstamp.ticker(console.log);
publicBitstamp.order_book(false, console.log);
publicBitstamp.bitinstant(console.log);
publicBitstamp.eur_usd(console.log);

var clientId = '554834';
var key = '4lJpxErEwCIUqkb2zFvcbL3dY6RMm3sV';
var secret = 'PvF6uO10TF5BOvCEFw2xcBXBuYHvADSO';
var privateBitstamp = new Bitstamp(clientId, key, secret);

privateBitstamp.balance(console.log);
//privateBitstamp.user_transactions(100, console.log);
//privateBitstamp.open_orders(console.log);

//    commented out for your protection

// privateBitstamp.cancel_order(id, console.log);
// privateBitstamp.buy(amount, price, console.log);
// privateBitstamp.sell(amount, price, console.log);
// privateBitstamp.create_code(usd, btc, console.log);
// privateBitstamp.check_code(code, console.log);
// privateBitstamp.redeem_code(code, console.log);
// privateBitstamp.sendtouser(customer_id, currency, amount, console.log);
privateBitstamp.withdrawal_requests(console.log);
// privateBitstamp.bitcoin_withdrawal(amount, address, console.log);
privateBitstamp.bitcoin_deposit_address(console.log);
