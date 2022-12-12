const express = require("express");
const cors = require("cors");
const { port } = require("./configuration");

const app = exporess();

app.use(cors());

app.get("/user", (_, res) => {
    const user = { name: "Vitalii", age: 40 };
    res.json({
        response: true,
        user
    });
});

app.listen(port, _ => console.log(`Listening on ${port}`));