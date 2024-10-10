import { Schema, model } from "mongoose";

const maintenanceSchema = new Schema({
  workshop: {
    type: Schema.Types.ObjectId,
    ref: "Workshop",
    required: true,
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true
  },
  services: [{
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }],
  releaseDate: {
    type: Date,
    default: Date.now,
  },
  totalCost: {
    type: Number,
    default: 0
  }
});

const Maintenance = model("Maintenance", maintenanceSchema);

export default Maintenance;

