const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (username) => {
  console.log(`hello from events in node js to ${username}`);
});

eventEmitter.on("greet", (username) => {
  console.log(`heyy from events in node js to ${username}`);
});

eventEmitter.once("pushNotify", () => {
  console.log("This event will run only once");
});

// Emit the eventd
eventEmitter.emit("greet", "rohit");
// eventEmitter.emit("greet", "dudee");

// eventEmitter.emit("pushNotify");

// eventEmitter.emit("greet", "broooo");

const myListener = () => {
  console.log("I am test listener");
};

eventEmitter.on("test", myListener);

eventEmitter.emit("test");
eventEmitter.removeListener("test", myListener);
eventEmitter.emit("test");

console.log(eventEmitter.listeners("greet"));
