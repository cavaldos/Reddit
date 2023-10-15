const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
var colors = require("ansicolors");
const networkInterfaces = require("./config/IP");
const IP = networkInterfaces.getIPAddresses();
const startWebSocketServer = require("./config/socket");
const http = require("http");
const server = http.createServer(app);

const {
  authRouter,
  postRouter,
  userRouter,
  
  subredditRouter,
} = require("./api/routes/index");

app.use(express.json());
dotenv.config();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// =======================================

// Routes
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);

app.use("/subreddit", subredditRouter);


const port = process.env.PORT || 5000;
const host = "0.0.0.0";
server.listen(port, () => {
  console.log(`\n  🚀  ➜ Local:    `, colors.blue(`http://localhost:${port}`));
  console.log(`  🚀  ➜ Network:  `, colors.green(`http://${IP}:${port}\n`));
});

startWebSocketServer(server);
