module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      make: String,
      model: String
    },
    { timestamps: true }
  );
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Device = mongoose.model("device", schema);
  return Device;
};