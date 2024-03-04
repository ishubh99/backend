import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import { log } from "console";


dotenv.config({
  path:'./env'
})


connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log("mongo connection failed!!", err);
})







// import express from "express";

// const app = express();


// (async () =>{
//   try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/$
//     {DB_NAME}`)
//     app.on("error",(error) => {
//       console.log("ERROR: ", error);
//       throw error
//     })
//     app.listen(process.env.PORT, ()=> {
//       console.log(`APP is listening on port ${process.env.PORT}`);
//     })

//   }
//   catch(error){
//     console.error("ERROR: ",error)
//   }

// } )()