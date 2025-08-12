import inquirer from "inquirer";
import { Command } from "commander";
import fs from "fs";
import { json } from "stream/consumers";
const program = new Command();

const questions = [
  {
    type: "input",
    name: "title",
    message: "please enter course title : ",
  },
  {
    type: "number",
    name: "price",
    message: "enter course price : ",
  },
];

const filePath = "./courses.json";

program.name("my first project").version("12-8-2025");
program
  .command("add")
  .description("add new task")

  .action(() => {
    inquirer.prompt(questions).then((answer) => {
    
      if (fs.existsSync(filePath)) {
        fs.readFile(filePath, "utf-8", (err, content) => {
          if (err) {
            console.log("error", err);
            process.exit();
          }

          const fileContent = JSON.parse(content);
          fileContent.push(answer);
          fs.writeFile(
            "./courses.json",
            JSON.stringify(fileContent),
            "utf-8",
            () => {
              console.log("add course done");
            }
          );
        });
      } else {
        fs.writeFile(
          "./courses.json",
          JSON.stringify([answer]),
          "utf-8",
          () => {
            console.log("add course done");
          }
        );
      }
    });
  });

program
  .command("list")
  .alias("l")
  .action(() => {
    fs.readFile(filePath, "utf-8", (err, content) => {
      if (err) {
        console.log("error", err);
      } else {
        console.table(JSON.parse(content));
      }
    });
  });

program.parse();
