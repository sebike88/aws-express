const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
  console.log('homepage');
  res.send('<h1>New App.js</h1>');
});

app.listen(port, () => {
  console.log('App Runs');
});
