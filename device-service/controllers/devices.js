const db = require("../models");
const Devices = db.devices;
// Create and Save a new Device
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  console.log(req.body.tags);
  // Create a Device
  const device = new Devices({
    name: req.body.name,
    make: req.body.make,
    model: req.body.model,
  });
  // Save Device in the database
  device
    .save(device)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating device."
      });
    });
};
// Retrieve all Devices from the database.
exports.getAll = (req, res) => {
  Devices.find()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving device list."
      });
    });
};
// Find a single Device with an id
exports.get = (req, res) => {
  const id = req.params.id;
  Devices.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found device with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving device with id=" + id });
    });
};
// Update a Device by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Devices.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update device with id=${id}. Maybe device was not found!`
        });
      } else res.send({ message: "Device was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating device with id=" + id
      });
    });
};
// Delete a device with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Devices.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete device with id=${id}. Maybe device was not found!`
        });
      } else {
        res.send({
          message: "Device was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete device with id=" + id
      });
    });
};