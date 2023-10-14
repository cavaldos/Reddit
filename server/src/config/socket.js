const WebSocket = require("ws");

function startWebSocketServer(server) {
  
  const wss = new WebSocket.Server({ server });
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

      console.log("ID người nhận: ", receiverId);

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

module.exports = startWebSocketServer;