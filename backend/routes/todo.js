var express = require("express");
var router = express.Router();
var { randomBytes } = require("crypto");
const getUniqueId = () => randomBytes(16).toString("hex");

let taskNames = [
  "Cook a meal",
  "Complete a coding challenge",
  "Go for a walk",
  "Call mom",
  "Research courses",
  "Read a book",
];

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

/* GET a random todo name. */
router.get("/name", function (req, res, next) {
  res.json(taskNames[Math.floor(Math.random() * taskNames.length)]);
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

  if (index > -1)
    todos.splice(index, 1, {
      ...todos[index],
      status: todos[index].status === "DONE" ? "UNDONE" : "DONE",
    });

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
