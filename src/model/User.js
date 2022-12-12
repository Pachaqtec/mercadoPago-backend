import mongoose, { Schema, schema } from "mongoose";

const userSchema = new Schema({
  numero: {
    type: Number,
    required: true,
  },
  idioma: {
    type: String,
    required: true,
  },
  mensaje: {
    type: String,
    required: true,
  },
});
const UserModel = mongoose.model("User", userSchema);

export default UserModel;
