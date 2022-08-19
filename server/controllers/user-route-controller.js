const mysqlClient = require("../utils/database_config");

const user_route_controller = {};
user_route_controller.add_user = (req, res, next) => {
  const { name, password, email, address, phone, city } = req.body;
  const queryString =
    "insert into user (name,pass,email,adrr,phone,city) values (?)";
  // console.log(name);
  // res.json("Hello");
  mysqlClient.query(
    queryString,
    [[name, password, email, address, phone, city]],
    (err, rows) => {
      if (err) {
        next(err);
      } else res.json("User registered successfully");
    }
  );
};

module.exports = user_route_controller;
