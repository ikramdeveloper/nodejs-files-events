const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const filesHandler = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "lorem.txt"),
      "utf-8"
    );

    // await fsPromises.unlink(path.join(__dirname, "files", "lorem.txt"));

    await fsPromises.writeFile(
      path.join(__dirname, "files", "lorem2.txt"),
      data
    );

    await fsPromises.appendFile(
      path.join(__dirname, "files", "lorem2.txt"),
      "\n\nappendid file"
    );

    await fsPromises.rename(
      path.join(__dirname, "files", "lorem2.txt"),
      path.join(__dirname, "files", "newFile.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "newFile.txt"),
      "utf-8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

filesHandler();

// fs.readFile(
//   path.join(__dirname, "files", "lorem.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// fs.writeFile(
//   path.join(__dirname, "files", "test.txt"),
//   "Just for text\n\n",
//   (err) => {
//     if (err) throw err;
//     console.log("file created");

//     fs.appendFile(
//       path.join(__dirname, "files", "test.txt"),
//       "file appended\n\n",
//       (err) => {
//         if (err) throw err;
//         console.log("file appended");
//       }
//     );
//   }
// );

// if (!fs.existsSync(path.join(__dirname, "new"))) {
//   fs.mkdir(path.join(__dirname, "new"), (err) => {
//     if(err) throw err;
//   });
// }

// if (fs.existsSync(path.join(__dirname, "new"))) {
//   fs.rmdir(path.join(__dirname, "new"), (err) => {
//       if(err) throw err;
//   });
// }

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
