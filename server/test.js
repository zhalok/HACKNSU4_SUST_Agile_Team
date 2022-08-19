const mysqlClient = require("./utils/database_config");

mysqlClient.query(
  "insert into ticket_transaction (ticket_id,user_id,issue_date,payment_trans_id,paid_amount) values (?)",
  [[1, 1, "2022-08-19", "d4834c4d-6e90-4e2f-b5c2-8edb766c9bd1", "100"]],
  (err1, rows) => {
    if (err1) {
      console.log(err1);
    } else {
      console.log("Transaction happened successfully");
    }
  }
);
