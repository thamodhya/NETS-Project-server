
const mongoose = require("mongoose");

const EditKT = new mongoose.Schema(
  {
    kt_name: {
    type: String,
    required: true
  },
  kt_intro: {
    type: String,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  old_data: {
    kt_name: String,
    kt_intro: String,
     
  },
  updatedby:{type: String},
},
  {
    collection: "editkts",
  }
);

const model = mongoose.model("EditKTData", EditKT);
module.exports = model;