const express = require("express");
const app = express();
const port = 5080;

app.get("/", (req, res) => {
  console.log("Пользователь на лоадере");
  app.use(express.static("public"));
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log("Сервер запущен на http://localhost:" + port);
});
