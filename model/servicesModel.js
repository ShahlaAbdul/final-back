import mongoose,{ Schema } from "mongoose";


const servicesSchema = new Schema({
  filial: String,
  location: String,
  hours: {
    weekly: String,
    weekend: String,
  },
  call: String,
});
export const ServiceModel = mongoose.model("Service", servicesSchema);
