const SSLCommerz = require("sslcommerz-nodejs");

let settings = {
  isSandboxMode: true,
  store_id: process.env.STORE_ID,
  store_passwd: process.env.STORE_PASSWORD,
};

let sslcommerz = new SSLCommerz(settings);

console.log(sslcommerz);
module.exports = sslcommerz;
