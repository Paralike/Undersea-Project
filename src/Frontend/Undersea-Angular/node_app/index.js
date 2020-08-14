var express = require("express");
var server = express();
var options = {
  index: "index.html",
};
const PORT = process.env.PORT || 80;

server.use("/", express.static("./dist/", options));

server.all("*", function (req, res, next) {
  res.sendFile("dist/index.html", { root: __dirname });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
