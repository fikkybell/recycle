//connecting to express server
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')



//Dotenv config
const dotenv = require('dotenv')
dotenv.config();

// connecting to mongo server
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Db connection successful'))
  .catch((err) => {
    console.log(err)
  })


//Using router for the api crud requests
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const stripeRoute = require("./routes/stripe");
const dataRoute = require("./routes/data");

// for application to take in JSON object and it has to be above the Route
app.use(express.json());
app.use(cors());
app.use("/api/checkout", stripeRoute)
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/data", dataRoute);

app.listen(5000, () => {
  console.log("working")
})