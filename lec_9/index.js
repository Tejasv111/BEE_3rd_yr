const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.post("/hi", (req, res) => {
    const user1 = req.body.name;
    const user2 = req.body.password;

    const content = `Name: ${user1}, Password: ${user2}\n`;


    fs.appendFile("users.txt", content, (err) => {
        if (err) {
            console.error("Error writing to file", err);
            return res.status(500).send("Error saving data");
        }

        res.send("User data saved to users.txt");
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});