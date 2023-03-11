const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.redirect("https://github.com/iamashuu397/Mini-Maths-Quiz-API#readme");
});

app.get("/addition", (req, res) => {
  let number1 = Math.floor(Math.random() * 100) + 25;
  let number2 = Math.floor(Math.random() * 100) + 25;
  let answer = number1 + number2;

  res.send({
    number1: number1,
    number2: number2,
    answer: answer,
    status: 200,
  });
});

app.get("/subtraction", (req, res) => {
  let number1 = Math.floor(Math.random() * 100) + 25;
  let number2 = Math.floor(Math.random() * 100) + 25;
  let answer = number1 - number2;

  res.send({
    number1: number1,
    number2: number2,
    answer: answer,
    status: 200,
  });
});

app.get("/multiplication", (req, res) => {
  let number1 = Math.floor(Math.random() * 50);
  let number2 = Math.floor(Math.random() * 50);
  let answer = number1 * number2;

  res.send({
    number1: number1,
    number2: number2,
    answer: answer,
    status: 200,
  });
});

app.get("/division", (req, res) => {
  let number1 = Math.floor(Math.random() * 50);
  let number2 = Math.floor(Math.random() * 50);
  let answer = number1 / number2;

  res.send({
    number1: number1,
    number2: number2,
    answer: answer,
    status: 200,
  });
});

app.listen(3000, () => {
  console.log("Running on http://localhost:3000");
});
