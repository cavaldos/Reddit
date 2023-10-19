import express from "express";
const app = express();
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import colors from "ansicolors";
import IP from "./config/IP.js";
import startWebSocketServer from "./config/socket.js";
import http from "http";
import "./config/firebase.js";
import MONGODB from "./config/mongod.js";
import { authRouter, userRouter } from "./api/routes/index.js";


const server = http.createServer(app);
const corsOptions = {
  origin: "*",
};



app.use(express.json());
dotenv.config();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
MONGODB.connectdb();
// // =======================================

// // Routes
app.use("/auth", authRouter);
app.use("/user", userRouter);


// // =======================================


const port = process.env.PORT || 4000;
const host = "0.0.0.0";
server.listen(port, () => {
  console.log(`\n  🚀  ➜ Local:    `, colors.blue(`http://localhost:${port}`));
  console.log(`  🚀  ➜ Network:  `, colors.green(`http://${IP}:${port}\n`));
});
startWebSocketServer(server);
