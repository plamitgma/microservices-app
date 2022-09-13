var express = require('express');
var router = express.Router();

var deviceController = require('../controllers/devices');

// Create a new Device
router.post("/", deviceController.create);
// Retrieve all Devices
router.get("/", deviceController.getAll);
// Retrieve a single Device with id
router.get("/:id", deviceController.get);
// Update a Device with id
router.put("/:id", deviceController.update);
// Delete a Device with id
router.delete("/:id", deviceController.delete);

module.exports = router;
