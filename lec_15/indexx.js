const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.get("/userData", (req, res) => {
  fs.readFile("./users.json", "utf-8", function (err, data) {
    if (err) return res.status(500).send("Error reading user data");
    const allUsers = JSON.parse(data || "[]");
    res.json(allUsers);
  });
});

app.get("/user-register", (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});

app.post("/adduser", (req, res) => {
  const { id, name, username, role } = req.body;
  const newUser = { id, name, username, role };

  fs.readFile("./users.json", "utf-8", function (err, data) {
    if (err) return res.status(500).send("Failed to read user file");

    let allUsers = [];
    try {
      allUsers = JSON.parse(data || "[]");
    } catch (parseErr) {
      return res.status(500).send("Corrupt users.json");
    }

    allUsers.push(newUser);

    fs.writeFile("./users.json", JSON.stringify(allUsers, null, 2), function (err) {
      if (err) return res.status(500).send("Failed to save user");
      res.send("User Registered Successfully");
    });
  });
});

app.listen(3333, () => {
  console.log("Server Started on http://localhost:3333");
});