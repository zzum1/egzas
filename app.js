const express = require("express");
const authRoute = require("./routes/authRoute");
const replyRoute = require("./routes/replyRoute")
const ticketRoute = require("./routes/ticketRoute")


const app = express();
app.use(express.json());


app.use("/", (req, res, next) => {
    console.log(`${req.method} is coming!`);
    next();
  });

app.use("/api/v1/auth", authRoute);
app.use("/api/tickets", replyRoute);
app.use("/api/tickets", ticketRoute);

module.exports = app;