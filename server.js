import { WebSocketServer } from "ws";

const wsserver = new WebSocketServer({ port: 80 });

wsserver.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log(`Message receieved: ${data}`);
  });

  ws.send(`Hello from the server! Num of clients: ${wsserver.clients.size}`);
});
