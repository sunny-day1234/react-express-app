var express = require("express");
var app = express();

app.get("/api/users", function (req, res) {
  res.send([
    {
      id: 1,
      name: "one1111",
    },
    {
      id: 2,
      name: "two2222",
    },
  ]);
});

app.listen(5051, function () {
  console.log("Example app listening on port 3000!");
});
