import mongoose from "mongoose";
const connectToDB = async () => {
  try {
    // await mongoose.connect("mongodb://root:example@172.21.0.2:27017/?authSource=admin");  //got the ip address by doing docker inspect mongodb container
    // console.log("MongoDB connected");                                                       // since we are using docker-compose, we can use the service name as the hostname using dns
    await mongoose.connect(
      "mongodb://root:example@mongodb:27017/?authSource=admin"
    ); //here the service name is mongodb
    console.log("mongoDB connected using dns");
  } catch (error) {
    console.error("error " + error.message);
  }
};

export default connectToDB;
