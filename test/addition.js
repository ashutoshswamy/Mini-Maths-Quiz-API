const axios = require("axios");

axios
  .get("https://mini-maths-quiz-api.iamashuu397.repl.co/addition")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
