import mongoose from "mongoose";



export const Connection=async(USERNAME,PASSWORD)=>{
  const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-yftkynv-shard-00-00.hqzvy6t.mongodb.net:27017,ac-yftkynv-shard-00-01.hqzvy6t.mongodb.net:27017,ac-yftkynv-shard-00-02.hqzvy6t.mongodb.net:27017/?ssl=true&replicaSet=atlas-m1vawd-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
   await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
   console.log('database connected successfully')
  } catch (error) {
    console.log('error while connection with database',error.message);
  }
}

export default Connection