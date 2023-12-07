
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const username = 'your_username';
const password = 'your_password';

let balance = 0;

app.post('/deposit', (req, res) => {
  if (authenticate(req.body)) {
    const amount = req.body.amount;
    balance += amount;
    res.send(`Deposit successful. Current balance: ${balance}`);
  } else {
    res.status(401).send('Authentication failed. Access denied.');
  }
});

app.post('/withdraw', (req, res) => {
  if (authenticate(req.body)) {
    const amount = req.body.amount;
    if (amount <= balance) {
      balance -= amount;
      res.send(`Withdrawal successful. Current balance: ${balance}`);
    } else {
      res.status(400).send('Insufficient funds');
    }
  } else {
    res.status(401).send('Authentication failed. Access denied.');
  }
});

app.get('/balance', (req, res) => {
  if (authenticate(req.query)) {
    res.send(`Current balance: ${balance}`);
  } else {
    res.status(401).send('Authentication failed. Access denied.');
  }
});

function authenticate(data) {
  return data.username === username && data.password === password;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
