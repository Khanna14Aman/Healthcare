const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const bloodbankroutes = require("./routes/bloodbankroutes");
const connectDB = require("../Backend/config/db");
const {
  errorHandler,
  notFound,
} = require("../Backend/middleware/errormiddleware");

dotenv.config({ path: "../.env" });

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/bloodbank", bloodbankroutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1969;
app.listen(
  PORT,
  console.log(`app is running at port number ${PORT} click here to go `)
);
