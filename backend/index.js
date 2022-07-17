const express = require("express");
const app = express();
const fs = require("fs");
const { stringify } = require("querystring");

app.use(express.json());

app.get("/hello", (req, res) => {
  console.log("hello");
});

app.post("/post", (req, res) => {
  console.log(req.body);
  let data = JSON.stringify(req.body);
  fs.appendFile("student.txt", data, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("done");
    }
  });
});

app.listen(5001, () => console.log("Server running at 5001"));
