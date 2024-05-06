let socket = new WebSocket("ws://localhost:80");

socket.onopen = (e) => {
  console.log("Handshake completed!");
  socket.send("Hello from the client!");
};

socket.onmessage = (e) => {
  console.log(`Message from server: ${e.data}`);
};

socket.onclose = (e) => {
  console.log("Connection closed!");
};
