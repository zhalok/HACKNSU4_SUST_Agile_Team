const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow_Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

const payment_route = require("./routes/payment-route");

app.get("/", (req, res, next) => {
  res.json("Hello server");
});
app.use("/payment", payment_route);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code);
  res.json({ message: error.message });
});
app.listen(process.env.PORT, () => {
  console.log("Listening on port no " + process.env.PORT);
});
