import express from "express";
import ConnectToDB from "./db/db.js";
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  console.log("a new log");
  res.send("send something new ");
});
const startListening = () => {
  try {
    app.listen(PORT, () => {
      console.log("Server running on port 3000");
    });
  } catch (error) {
    console.error(error.message);
  }
};

ConnectToDB()
  .then((data) => startListening())
  .catch((err) => console.log("could not set up the server " + err.message));
