var express = require("express");
var router = express.Router();
var { randomBytes } = require("crypto");
const getUniqueId = () => randomBytes(16).toString("hex");

let todos = [
  {
    id: getUniqueId(),
    title: "Create todo list",
    status: "DONE",
  },
];

/* GET todo listing. */
router.get("/", function (req, res, next) {
  res.json([...todos]);
});

/* ADD todo. */
router.post("/", function (req, res, next) {
  todos.push({ ...req.body, id: getUniqueId() });
  res.json([...todos]);
});

/* EDIT todo status. */
router.put("/:id", function (req, res, next) {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id === id);

  if (index > -1) todos.splice(index, 1, { ...req.body });

  res.json([...todos]);
});

/* DELETE todo status. */
router.delete("/:id", function (req, res, next) {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id === id);

  if (index > -1) todos.splice(index, 1);

  res.json([...todos]);
});

module.exports = router;
