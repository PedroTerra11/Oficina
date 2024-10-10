import { Schema, model } from "mongoose";

const vehicleSchema = new Schema({
  plate: {
    type: String,
    required: true,
    unique: true,
    maxLength: 7,
    minLength: 7
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  maintenance: [{
    type: Schema.Types.ObjectId,
    ref: 'Maintenance'
  }]
});

const Vehicle = model("Vehicle", vehicleSchema);

export default Vehicle;
