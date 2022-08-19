const mysqlClient = require("../utils/database_config");
const ticket_route_controller = {};

ticket_route_controller.insert_ticket = (req, res, next) => {
  const { seat_no, bogi_no, train_id, status } = req.body;
  const queryString =
    "insert into tickets (seat_no,bogi_no,train_id,status) values (?)";
  mysqlClient.query(
    queryString,
    [[seat_no, bogi_no, train_id, status]],
    (err, row) => {
      if (err) res.json(err);
      else res.json("ticket inserted");
    }
  );
};

ticket_route_controller.get_ticket = (req, res, next) => {
  const queryString = "select * from tickets where status = available";
};

module.exports;
