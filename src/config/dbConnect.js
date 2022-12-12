import mongoose from "mongoose";
export const DBConnection = async () => {
  console.log("hola");
  console.log(process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("bd conectado ");
  } catch (error) {
    console.log(error);
  }
};
