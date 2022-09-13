const db = require("../models");
const Users = db.users;
// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  console.log(req.body.tags);
  // Create a User
  const user = new Users({
    name: req.body.name,
    address: req.body.address,
    tags: req.body.tags,
  });
  // Save User in the database
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating user."
      });
    });
};
// Retrieve all Users from the database.
exports.getAll = (req, res) => {
  Users.find()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user list."
      });
    });
};
// Find a single User with an id
exports.get = (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};
// Update a User by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Users.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe user was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Users.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};