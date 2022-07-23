const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3001;

// const db = mysql.createPool({
//   host: "awstest.cct8a3ls518h.us-east-2.rds.amazonaws.com",
//   user: "admin",
//   password: "741203Jll!",
//   database: "test",
// });

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM sunglasses";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});

app.get("/api/get2", (req, res) => {
  const sqlSelect = "SELECT * FROM sunglasses ORDER BY productprice ASC;";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});

app.get("/api/get3", (req, res) => {
  const sqlSelect = "SELECT * FROM sunglasses ORDER BY productprice DESC;";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});

// app.get("/", (req, res) => {
//   const sqlInsert = "INSERT INTO test_img (img_id,image) VALUES (8,'lol')";
//   db.query(sqlInsert, (err, result) => {
//     res.send("Hello Jorge");
//   });
// });

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
