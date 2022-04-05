const mongoose = require("mongoose");
const bloodinfo = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "bloodbank",
    },
    Fresh_Frozen_Plasma_BP: {
      type: Number,
      default: 0,
    },
    Platelets_Concentrate_BP: {
      type: Number,
      default: 0,
    },
    Whole_Human_Blood_IP_A_pos: {
      type: Number,
      default: 0,
    },
    Whole_Human_Blood_IP_A_neg: {
      type: Number,
      default: 0,
    },
    Whole_Human_Blood_IP_B_pos: {
      type: Number,
      default: 0,
    },
    Whole_Human_Blood_IP_B_neg: {
      type: Number,
      default: 0,
    },
    Whole_Human_Blood_IP_AB_pos: {
      type: Number,
      default: 0,
    },
    Whole_Human_Blood_IP_AB_neg: {
      type: Number,
      default: 0,
    },
    Whole_Human_Blood_IP_O_pos: {
      type: Number,
      default: 0,
    },
    Whole_Human_Blood_IP_O_neg: {
      type: Number,
      default: 0,
    },
    Packed_Red_Blood_Cells_A_pos: {
      type: Number,
      default: 0,
    },
    Packed_Red_Blood_Cells_A_neg: {
      type: Number,
      default: 0,
    },
    Packed_Red_Blood_Cells_B_pos: {
      type: Number,
      default: 0,
    },
    Packed_Red_Blood_Cells_B_neg: {
      type: Number,
      default: 0,
    },
    Packed_Red_Blood_Cells_O_pos: {
      type: Number,
      default: 0,
    },
    Packed_Red_Blood_Cells_O_neg: {
      type: Number,
      default: 0,
    },
    Packed_Red_Blood_Cells_AB_pos: {
      type: Number,
      default: 0,
    },
    Packed_Red_Blood_Cells_AB_neg: {
      type: Number,
      default: 0,
    },
  },
  {
    timestampes: true,
  }
);

const bloodbankinfo = mongoose.model("bloodbankinfo", bloodinfo);
module.exports = bloodbankinfo;
