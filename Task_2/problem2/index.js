import inquirer from "inquirer";

import fs from "fs";

let question = [
  {
    type: "input",
    name: "username",
    message: "please enter username to get his repositories",
  },
];

let array = [];

inquirer.prompt(question).then((answer) => {
  let path = `https://api.github.com/users/${answer.username}/repos`;
  let file = `./${answer.username}.txt`;
  fetch(path)
    .then((res) =>{
     return res.json()
    })
    .then((data) => {
      
      if (fs.existsSync(file)) {
        console.log("The file exist =>", file);
      } else {
        data.map((el) => {
          array.push(el["full_name"]);
        });
        fs.writeFileSync(file, array.join("\n"), "utf-8");
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
});
