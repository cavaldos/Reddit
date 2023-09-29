const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
var colors = require("ansicolors");
const networkInterfaces = require("./src/config/IP.ts");
const IP = networkInterfaces.getIPAddresses();

app.use(express.json());
dotenv.config();
app.use(morgan("tiny"));
app.use(cors());
// =======================================

// Routes
app.use("/", (req, res) => {
  res.send("Hello World , wellcome to my Open AI Service");
});

app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
const host = "0.0.0.0";
const server = app.listen(port, host, () => {
  console.log(`\n  🚀  ➜ Local:    `, colors.blue(`http://localhost:${port}`));
  console.log(`  🚀  ➜ Network:  `, colors.green(`http://${IP}:${port}\n`));
});
