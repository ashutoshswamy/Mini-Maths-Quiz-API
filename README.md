# Mini Maths Quiz API

API that returns two random numbers and then their sum, difference, product and quotient

**Basic API Endpoint** - *https://mini-maths-quiz-api.ashutoshswamy397.repl.co*

## Endpoints

| Endpoint                                                                       | Method | Use                                            |
| ------------------------------------------------------------------------------ | ------ | ---------------------------------------------- |
| [/addition](mini-maths-quiz-api.ashutoshswamy397.repl.co/addition)             | GET    | To get two random numbers and their sum        |
| [/subtraction](mini-maths-quiz-api.ashutoshswamy397.repl.co/subtraction)       | GET    | To get two random numbers and their difference |
| [/multiplication](mini-maths-quiz-api.ashutoshswamy397.repl.co/multiplication) | GET    | To get two random numbers and their product    |
| [/division](mini-maths-quiz-api.ashutoshswamy397.repl.co/division)             | GET    | To get two random numbers and their quotient   |

## Example

```js
const axios = require("axios");

axios
  .get("https://mini-maths-quiz-api.ashutoshswamy397.repl.co/addition")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```
