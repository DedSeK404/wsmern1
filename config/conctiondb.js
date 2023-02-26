const mongoose=require("mongoose")
const conectiondb = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect("mongodb://127.0.0.1:27017/restapi");
    console.log("data base is connected")
  } catch (error) {
    console.log(error)
  }
};
module.exports= conectiondb



//process.env.mongourl