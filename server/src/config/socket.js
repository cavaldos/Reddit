import * as WebSocket from "ws";
import { WebSocketServer } from "ws";

import cors from "cors";
const corsOptions = {
  origin: "*",
};

function startWebSocketServer(server) {
  const wss = new WebSocketServer({
    server,
    noServer: false,
    clientTracking: true,
    cors: corsOptions,
  });
  const connections = new Set();
  wss.on("connection", (socket) => {
    console.log("Client connected ");
    connections.add(socket);

    console.log("Number of connections:", connections.size);
    socket.on("message", (message) => {
      const decodedMessage = message.toString();
      const messageObject = JSON.parse(decodedMessage);

      console.log("Received message:", messageObject);
      const { receiverId } = messageObject;

      connections.forEach((connection) => {
        connection.id = receiverId;
        if (connection !== socket) {
          // Check if the connection's ID matches the recipient ID
          if (connection.id === receiverId) {
            connection.send(decodedMessage);
          }
        }
      });
      // Gửi tin nhắn vừa nhận về client gốc
      // socket.send(decodedMessage);
    });

    socket.on("close", () => {
      console.log("Client disconnected");
      connections.delete(socket);
    });
  });
}

export default startWebSocketServer;
