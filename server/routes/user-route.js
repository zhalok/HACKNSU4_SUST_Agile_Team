const express = require("express");
const router = express.Router();
const user_route_controller = require("../controllers/user-route-controller");

router.post("/add-user", user_route_controller.add_user);
module.exports = router;
