const axios = require("axios");

axios
  .get("https://mini-maths-quiz-api.iamashuu397.repl.co/multiplication")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
