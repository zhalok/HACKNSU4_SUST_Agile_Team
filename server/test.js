const mysqlClient = require("./utils/database_config");

mysqlClient.query(
  "insert into ticket_transaction (ticket_id,user_id,issue_date,payment_trans_id,paid_amount) values (?)",
  [[1, "rahmanzhalok@gmail.com", "2022-08-19", "1222", "100"]],
  (err1, rows) => {
    if (err1) {
      console.log(err1);
    } else {
      console.log("Transaction happened successfully");
    }
  }
);
