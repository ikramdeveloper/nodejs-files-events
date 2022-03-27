const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "stream", "lorem.txt"), {
  encoding: "utf-8",
});

const ws = fs.createWriteStream(path.join(__dirname, "stream", "lorem2.txt"));

rs.pipe(ws);

// rs.on("data", (data) => {
//   ws.write(data);
// });
