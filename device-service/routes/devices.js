var express = require('express');
var router = express.Router();

var deviceController = require('../controllers/devices');

// Create a new Tutorial
router.post("/", deviceController.create);
// Retrieve all Tutorials
router.get("/", deviceController.getAll);
// Retrieve a single Tutorial with id
router.get("/:id", deviceController.get);
// Update a Tutorial with id
router.put("/:id", deviceController.update);
// Delete a Tutorial with id
router.delete("/:id", deviceController.delete);

module.exports = router;
