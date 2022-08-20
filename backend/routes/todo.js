var express = require("express");
var router = express.Router();

let todos = [{ id: 0, title: "Create todo list", status: "DONE" }];

/* GET todo listing. */
router.get("/", function (req, res, next) {
  res.json([...todos]);
});

/* ADD todo listing. */
router.post("/", function (req, res, next) {
  console.log(req);
  todos.push(req.body);
  res.json([...todos]);
});

module.exports = router;
