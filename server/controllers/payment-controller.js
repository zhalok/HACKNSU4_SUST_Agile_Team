const sslcommerz = require("../utils/payment_settings");
const { v4: uuidv4 } = require("uuid");
const payment_controller = {};

payment_controller.initalize_payment = (req, res, next) => {
  const {
    total_amount,
    cus_name,
    cus_email,
    cus_phone,
    cus_add1,
    cus_city,
    multi_card_name,
    number_of_tickets,
    ticket_name,
  } = req.body;
  // console.log(req.body);
  let post_body = {};
  post_body["total_amount"] = total_amount;
  post_body["currency"] = "BDT";
  post_body["tran_id"] = uuidv4();
  post_body["success_url"] = `${process.env.BASE}/payment/success`;
  post_body["fail_url"] = `${process.env.BASE}/payment/failure`;
  post_body["cancel_url"] = `${process.env.BASE}/payment/cancel`;
  post_body["ipn_url"] = `${process.env.BASE}/payment/ipn`;
  post_body["emi_option"] = 0;
  post_body["cus_name"] = cus_name;
  post_body["cus_email"] = cus_email;
  post_body["cus_phone"] = cus_phone;
  post_body["cus_add1"] = cus_add1;
  post_body["cus_city"] = cus_city;
  post_body["cus_country"] = "Bangladesh";
  post_body["shipping_method"] = "NO";
  post_body["multi_card_name"] = multi_card_name;
  post_body["num_of_item"] = number_of_tickets;
  post_body["product_name"] = ticket_name;
  post_body["product_category"] = "train-ticket";
  post_body["product_profile"] = "general";

  sslcommerz
    .init_transaction(post_body)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      next(error);
    });
};
payment_controller.success = (req, res, next) => {
  res.json({ message: "Successful payment" });
};
payment_controller.failure = (req, res, next) => {};
payment_controller.cancel = (req, res, next) => {};
payment_controller.ipn = (req, res, next) => {
  if (req.body.val_id) {
    // fetch(
    //   "https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php",
    //   {
    //     headers: "content-type:x-www-form-urlencoded",
    //     body: new URLSearchParams({
    //       val_id: req.body.val_id,
    //       store_id: process.env.STORE_ID,
    //       store_passwd: process.env.STORE_PASSWORD,
    //       format: "json",
    //     }),
    //   }
    // )
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
  }
};

module.exports = payment_controller;
