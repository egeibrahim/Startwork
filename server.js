const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const path = require("path");
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT || 5000;
//Mongodb connection
connectDatabase();

const routers = require("./routers/index");

const app = express();
app.use(express.json());
app.use(cors());

//Router modules
app.use("/api", routers);

//Error Handler
app.use(customErrorHandler);

//Static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () =>
  console.log(
    `Server started on port ${PORT} in ${process.env.NODE_ENV} environment`
  )
);
