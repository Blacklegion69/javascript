/**
 *
 * 🫒 Title : express_text
 * 🫒 Description : A simple express server with express.text() uses
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 24 june 2023
 *
 **/

// Dependency
const express = require("express");

// App object
const app = express();

// using text()
app.use(express.text());

app.get("/", (req, res) => {
  console.log("Wow we got a hit on home route");
  res.send("Wow you hit on home route");
});

app.get("/user", (req, res) => {
  console.log("Wow we got a hit on user route");
  res.send("Wow you hit on user route");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("you hit on home route using post method");
});

app.listen(5173, () => {
  console.log("App successfully running at port ```5173```");
});
