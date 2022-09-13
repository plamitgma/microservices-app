var express = require('express');
var router = express.Router();

var userController = require('../controllers/users');

// Create a new Tutorial
router.post("/", userController.create);
// Retrieve all Tutorials
router.get("/", userController.getAll);
// Retrieve a single Tutorial with id
router.get("/:id", userController.get);
// Update a Tutorial with id
router.put("/:id", userController.update);
// Delete a Tutorial with id
router.delete("/:id", userController.delete);

module.exports = router;
