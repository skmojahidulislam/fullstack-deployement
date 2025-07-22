// server/index.js
const express = require("express");
const app = express();
const port = 3001;

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Mujahid" },
    { id: 2, name: "Lyarinx" },
  ]);
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}/api/users`);
});
