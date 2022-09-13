var express = require('express');
var router = express.Router();

var userController = require('../controllers/users');

// Create a new User
router.post("/", userController.create);
// Retrieve all Users
router.get("/", userController.getAll);
// Retrieve a single User with id
router.get("/:id", userController.get);
// Update a User with id
router.put("/:id", userController.update);
// Delete a User with id
router.delete("/:id", userController.delete);

module.exports = router;
