import express from "express";
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  console.log("a new log");
  res.send("send something  ");
});
app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
