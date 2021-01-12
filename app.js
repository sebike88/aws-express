const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  console.log('homepage');
  res.send('Welcome to the homepage');
});

app.listen(port, () => {
  console.log('App Runs');
});
