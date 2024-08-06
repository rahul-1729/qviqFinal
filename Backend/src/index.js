const dotenv = require('dotenv');

const path = require("path");
const envPath = path.resolve(__dirname, "./config.env"); //irrespective CWD path is fixed
dotenv.config({ path: envPath });
const express = require("express");
const dbConnect = require("./utils/dbConnect");
const apiRoutes = require("./routes/user-routes");
const productRoutes = require("./routes/product-routes.js")
const bodyParser = require("body-parser");
const passort = require("passport");
const passportAuth = require("./utils/jwt-middleware.js");
const cors = require("cors");

PORT =process.env.PORT;
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(passort.initialize());
passportAuth(passort);
app.use("/uploads", express.static("uploads"));
app.use("/user", apiRoutes);
app.use("/product" , productRoutes);
app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT} `);
  dbConnect();
});
