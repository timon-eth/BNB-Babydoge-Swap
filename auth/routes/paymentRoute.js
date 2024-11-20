const express = require("express");
const {
  processPayment,
  paytmResponse,
  getPaymentStatus,
  savePaymentStatus,
} = require("../controllers/paymentController");
const { isAuthenticatedUser } = require("../middlewares/user_actions/auth");

const router = express.Router();

router.route("/payment/process").post(processPayment);
// router.route('/stripeapikey').get(isAuthenticatedUser, sendStripeApiKey);

router.route("/callback").post(paytmResponse);

router.route("/payment/save").post(savePaymentStatus);

router.route("/payment/status/:id").get(isAuthenticatedUser, getPaymentStatus);

module.exports = router;
