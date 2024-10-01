const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require("./models/todoModel");

const port = 8000;

const app = express();
app.use(cors());
app.use(express.json());

async function connectDb() {
  try {
    const response = await mongoose.connect("<your mongo connection string>");

    if (response) {
      console.log("connected to db");
    }
  } catch (err) {
    console.log(err);
  }
}

connectDb();

app.get("/todos", async (req, res) => {
  const data = await TodoModel.find({});
  res.status(200).json(data);
});

app.post("/todos/create", async (req, res) => {
  const data = await TodoModel.create({
    title: req.body.title,
    isCompleted: false,
    synced: true,
  });

  res.status(201).json({ data });
});

app.listen(port, () => {
  console.log("[server]: running on port " + port);
});
