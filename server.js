import { createServer } from "http";
import fs from "fs";
const htmlbody = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>W9-D1-Lab1</title>
  </head>
  <body>
    <h1>Welcome to MERN</h1>
  </body>
</html>
`;

let img = fs.readFileSync("./LoL.png");

const SeeOther = 303;
const Ok = 200;
const server = createServer((req, res) => {
  res.writeHead(Ok, {
    "Content-Type": "image",
    //     Location:
    //       "https://static.wikia.nocookie.net/leagueoflegends/images/7/7b/League_of_Legends_Cover.jpg/revision/latest/scale-to-width-down/1200?cb=20191018222445",
  });
  res.end(img);
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
