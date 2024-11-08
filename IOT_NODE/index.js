const express = require("express"); // import library express = require ("express") , express is for creating server

const app = express();

const port = 4000; // 80 default port 

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/IOT.html");
}); 
// css --> background-color  js --> backgroundColor
//it must called server
const server = app.listen(port, function () {
  console.log("Server is running at port " + port);
});

const wsServer = require("ws").Server; // ws is a library , is for using webSocket protocol
const ws_Server = new wsServer({ server }); // conncetion between express and ws , connection between server and protocol

let light_intnesity = 0;
/* ws_Server is the whole server,  ws --> is for single client */
ws_Server.on("connection", function (ws) {
  console.log("Client connected");

  ws.on("message", function (msg) {
    light_intnesity = msg.toString();
    console.log(light_intnesity); // for debugging
    broadcast(light_intnesity);
  });

  ws.on("close", function () {
    console.log("Client disconnected");
  });
});

function broadcast(msg) {
  ws_Server.clients.forEach(function (client) {
    if (client.readyState === client.OPEN) {
      // if client still connected
      client.send(msg);
    } else {
      console.log("client off");
    }
  });
}


