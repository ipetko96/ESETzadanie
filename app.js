const express = require("express");
const os = require("os");

const app = express();
const port = 3000;

app.get("/api/ivan", (req, res) => {
  res.send({
    hostname: os.hostname(),
    uptime: msToHMS(process.uptime() * 1000),
  });
  res.status(200)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/healthcheck", require("express-healthcheck")());

app.use(express.static("public"));

function msToHMS(ms) {
  let hours = Math.floor(ms / 3600000);
  let minutes = Math.floor((ms % 3600000) / 60000)
  let seconds = Math.floor(((ms % 3600000) % 60000) / 1000)
  return minutes == 60 ? seconds + 1 + ":00" : seconds == 60 ? minutes + 1 + ":00" : ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
}