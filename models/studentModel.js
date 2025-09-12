const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    classTeacher: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },

    school: [{ type: mongoose.SchemaTypes.ObjectId, ref: "schools" }],
  },
  { timestamps: true }
);

const studentModel = mongoose.model("students", studentSchema);
module.exports = studentModel;
