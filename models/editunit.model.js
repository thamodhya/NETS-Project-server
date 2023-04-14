
const mongoose = require("mongoose");

const EditUnit = new mongoose.Schema(
  {
  unit_name: {
    type: String,
    required: true
  },
  unit_intro: {
    type: String,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  old_data: {
    unit_name: String,
    unit_intro: String,
     
  },
  updatedby:{type: String},
},
  {
    collection: "editunits",
  }
);

const model = mongoose.model("EditUnitData", EditUnit);
module.exports = model;