const mysqlClient = require("../utils/database_config");
const mysqlClient = require("../utils/database_config");
const ticket_route_controller = {};
ticket_route_controller.sell_ticket = () => {
  mysqlClient.query(
    "insert into ticket_transaction (ticket_id,user_id,issue_date,payment_trans_id,paid_amount) values (?)",
    [[ticket_id, cus_email, "2022-08-19", tran_id, total_amount]],
    (err1, rows) => {
      if (err1) {
        mysqlClient.rollback();
      } else {
        console.log("Transaction happened successfully");
      }
    }
  );
};

module.exports;
