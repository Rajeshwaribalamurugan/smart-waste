const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
    await client.connect();
    console.log("MongoDB Connected");
}
connectDB();

const db = client.db("smartwaste");
const users = db.collection("users");

app.post("/register", async (req, res) => {
    const data = req.body;
    await users.insertOne(data);
    res.send("User Registered");
});

app.post("/login", async (req, res) => {
    const user = await users.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if(user) res.send("Login Success");
    else res.send("Invalid Login");
});

app.listen(5000, () => console.log("Server running on 5000"));