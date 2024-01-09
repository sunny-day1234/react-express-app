var express = require("express");
var app = express();

app.get("/api/users", function (req, res) {
  res.send([
    {
      id: 1,
      name: "one1111000000",
    },
    {
      id: 2,
      name: "two2222000000",
    },
  ]);
});

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log("Example app listening on port 3000!");
});
