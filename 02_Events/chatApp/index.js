const ChatRoom = require("./chatRoom.js");

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`${user} has joined the chat`);
});

chat.on("message", (user, message) => {
  console.log(`${user} : ${message}`);
});

chat.on("leave", (user) => {
  console.log(`${user} has left the chat`);
});

// simulating the chat
chat.join("Rohit");
chat.join("Sumedh");

chat.sendMessage("Rohit", "hey Sumedh hello to everyone");
chat.sendMessage("Sumedh", "hey Rohit hello to everyone");

chat.leave("Rohit");
chat.sendMessage("Rohit", "this message wont be sent");
chat.leave("Sumedh");
