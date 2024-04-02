import mongoose from "mongoose";
import { dbname } from "../constants.js";

const dbconnect=async()=>{
    try{
        await mongoose.connect(`${process.env.DBURL}/${dbname}`)
        console.log("db connect ok ")
    }catch(err){
        console.log("error---------------",err)
    }
}
export default dbconnect