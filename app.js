const express = require("express");
const os = require("os");

const app = express();
const port = 3000;

app.get("/api/ivan", (req, res) => {
  res.send({
    hostname: os.hostname(),
    uptime: process.uptime(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/healthcheck", require("express-healthcheck")());

app.use(express.static("public"));
