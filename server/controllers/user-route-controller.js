const mysqlClient = require("../utils/database_config");

const user_route_controller = {};
user_route_controller.add_user = (req, res, next) => {
  const { name, email, address, city, phone, password } = req.body;
  mysqlClient.query;
};
