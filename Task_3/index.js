const express = require("express");
const fs = require("fs");
const app = express();

const filePath = "./data.json";
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

app.get("/students", (req, res) => {
  res.json(data);
});

app.get("/students/active", (req, res) => {
  let arr = data.filter((el) => {
    return el.status === "active";
  });
  res.json(arr);
});

app.get("/students/inactive", (req, res) => {
  let arr = data.filter((el) => {
    return el.status !== "active";
  });
  res.json(arr);
});

app.get("/students/top", (req, res) => {
  let averageArr = data.map((el) => {
    let average = 0;
    for (let i = 0; i < el.grades.length; i++) {
      average += el.grades[i];
    }
    return { average: average / 3, id: el.id };
  });
  let sortArr = averageArr.sort((a, b) => b.average - a.average);
  let top = data.filter((el) => {
    return el.id === sortArr[0].id;
  });

  res.json(top);
});

app.get("/students/fail", (req, res) => {
  let averageArr = data.map((el) => {
    let average = 0;
    for (let i = 0; i < el.grades.length; i++) {
      average += el.grades[i];
    }
    return { average: average / 3, id: el.id };
  });
  let fail = averageArr.filter((el) => {
    return el.average < 60;
  });
  let studentFail = data.filter((el) => {
    for (let i = 0; i < fail.length; i++) {
      return el.id === fail[i].id;
    }
  });
  res.json(studentFail);
});

app.listen(3000, "localhost", () => {
  console.log("Server is running on port 3000 .......");
});
