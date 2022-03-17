const bloodbank = require("../Models/bloodbankregister");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const showbloodbanks = asyncHandler(async (req, res) => {
  const bloodbanknames = await bloodbank.find({});
  res.json(bloodbanknames);
});

const registerbloodbank = asyncHandler(async (req, res) => {
  const {
    ownername,
    email,
    password,
    bloodbankname,
    country,
    state,
    city,
    pincode,
    phonenumber,
  } = req.body;
  const userExists = await bloodbank.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Already registered bloodbank");
  }
  const newregister = await bloodbank.create({
    ownername,
    email,
    password,
    bloodbankname,
    country,
    state,
    city,
    pincode,
    phonenumber,
  });
  if (newregister) {
    res.status(201).json({
      _id: newregister._id,
      ownername: newregister.ownername,
      email: newregister.email,
      bloodbankname: newregister.bloodbankname,
      country: newregister.country,
      state: newregister.state,
      city: newregister.city,
      pincode: newregister.pincode,
      phonenumber: newregister.phonenumber,
      token: generateToken(newregister._id),
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await bloodbank.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      ownername: user.ownername,
      email: user.email,
      bloodbankname: user.bloodbankname,
      country: user.country,
      state: user.state,
      city: user.city,
      pincode: user.pincode,
      phonenumber: user.phonenumber,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Wrong email or password");
  }
});
module.exports = { registerbloodbank, authUser, showbloodbanks };
