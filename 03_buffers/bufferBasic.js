const { Buffer } = require("node:buffer");

// const buf = Buffer.from("Hello Chia");

// console.log(buf);
// console.log(buf.toString());

// const bufTwo = Buffer.allocUnsafe(150);
// console.log(bufTwo);

// const buf = Buffer.alloc(50);
// buf.write("Hello Chia");
// console.log(buf.toString());
// console.log(buf.length);

// const buf = Buffer.from("Rohit");
// console.log(buf.toString());
// console.log(buf.toString("ucs2", 0, buf.length));

// const buf = Buffer.from("Chai");
// buf[0] = 0x4a;
// console.log(buf);
// console.log(buf.toString());

const buf1 = Buffer.from("Hello ");
const buf2 = Buffer.from("Rohit");

const buf3 = Buffer.concat([buf1, buf2]);

console.log(buf3.toString());
