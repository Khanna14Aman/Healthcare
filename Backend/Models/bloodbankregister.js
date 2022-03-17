const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const bloodbankregister = mongoose.Schema(
  {
    ownername: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bloodbankname: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

bloodbankregister.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

bloodbankregister.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(15);
  this.password = await bcrypt.hash(this.password, salt);
});

const bloodbank = mongoose.model("bloodbank", bloodbankregister);
module.exports = bloodbank;
