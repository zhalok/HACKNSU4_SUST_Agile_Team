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
  post_body["success_url"] = "http://localhost:5000/payment/success";
  post_body["fail_url"] = "http://localhost:5000/payment/failure";
  post_body["cancel_url"] = "http://localhost:5000/payment/cancel";
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
      res.status(200).json(response);
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
  // res.json("Nice");
  console.log(req.method);
  console.log(req.body);

  res.json("hello");
};

module.exports = payment_controller;
