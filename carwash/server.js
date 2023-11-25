const jsonServer = require('json-server');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // path to your db.json file
const dbFilePath = path.join(__dirname, 'db.json');

app.use(jsonServer.defaults());
app.use(express.json());

// Middleware to handle data persistence after requests
app.use((req, res, next) => {
  // Save original send response method
  const originalSend = res.send;

  res.send = function (data) {
    originalSend.apply(res, arguments); // call original send method
    // Write the updated db to db.json after response is sent
    fs.writeFileSync(dbFilePath, JSON.stringify(router.db.getState()), 'utf-8');
  }

  next(); // Continue to json-server router
});

app.use(router); // json-server routes

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
