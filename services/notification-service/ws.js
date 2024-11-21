const WebSocket = require("ws");

const wsServer = new WebSocket.Server({ port: 8080 });

wsServer.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log("Received:", message);
    socket.send("Acknowledged: " + message);
  });
});

console.log("WebSocket server running on ws://localhost:8080");
