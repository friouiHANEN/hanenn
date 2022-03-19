const express = require("express");
const DBconnect = require("./routes/dbconnet");

const app = express();

DBconnect();

app.use(express.json());

const PORT = 5000;
app.use("/envir", require("./routes/envir"));
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("y5dm✌👍💖");
});
