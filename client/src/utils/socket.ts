import { w3cwebsocket as WebSocket } from "websocket";

function connectWebSocket(
  YOUR_CLIENT_ID: any,
  RECEIVER_ID: any,
  onMessageReceived: any
) {
  // const socket = new WebSocket(`ws:${process.env.REACT_APP_API_SOCKET}/?clientId=${YOUR_CLIENT_ID}`);
  //   const socket = new WebSocket(`ws:${process.env.REACT_APP_API_SOCKET}/`);
  const socket = new WebSocket(`ws://localhost:3000/`);

  socket.onopen = () => {
    console.log("Connected to server");
  };

  socket.onmessage = (message: any) => {
    const decodedMessage = JSON.parse(message.data);
    console.log("Received message:", decodedMessage);
    onMessageReceived(decodedMessage);
  };

  socket.onclose = () => {
    console.log("Disconnected from server");
  };

  return socket;
}

function sendMessage(
  socket: any,
  YOUR_CLIENT_ID: any,
  RECEIVER_ID: any,
  content: any
) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    const message = {
      content: content,
      senderId: YOUR_CLIENT_ID,
      receiverId: RECEIVER_ID,
    };
    socket.send(JSON.stringify(message));
    console.log("Sent message:", message);
  }
}

export { connectWebSocket, sendMessage };
