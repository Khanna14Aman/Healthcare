const mongoose = require("mongoose");
const bloodinfo = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "bloodbank",
    },
  },
  {
    timestampes: true,
  }
);
