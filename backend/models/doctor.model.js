import mongoose from "mongoose";
const doctorschema = new mongoose.Schema(
  {
    name: {
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
    image: {
      type: String,
      required: true,
    },
    speciality: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
     
    },
    fee: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    Slots_booked: {
      type: Object,
      default: {},
    },
  },
  { minimize: false }
);
const Doctor = mongoose.models.Doctor || mongoose.model("Doctor", doctorschema);
export default Doctor;
