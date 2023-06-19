var express = require("express");
const cors = require("cors");
var app = express();
app.use(cors());
app.get("/a", function (req, res) {
  console.log({ req: req.originalUrl });
  res.send({ a: "Hello World!" });
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
