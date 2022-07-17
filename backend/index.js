const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  console.log("hello");
});

app.listen(5001, () => console.log("Server running at 5001"));
