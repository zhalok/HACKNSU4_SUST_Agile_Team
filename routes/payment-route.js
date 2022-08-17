const express = require("express");
const payment_router = express.Router();
const payment_controller = require("../controllers/payment-controller");
payment_router.post(
  "/initialize-payment",
  payment_controller.initalize_payment
);
payment_router.post("/success", payment_controller.success);
payment_router.post("/failure", payment_controller.failure);
payment_router.post("/cancel", payment_controller.cancel);

module.exports = payment_router;
