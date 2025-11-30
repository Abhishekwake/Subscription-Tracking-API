import mongoose from "mongoose";
import { NODE_ENV,DB_URI } from "../config/env.js";
if(!DB_URI){
    throw new Error('Please define MONGODB_URI environment variable inside .env.<devlopment/production>.local');
}
const connectToDatabase = async() => {
// Tells JavaScript: "Inside this function, I will have some asynchronous operations."
    try{
        await mongoose.connect(DB_URI);
        //tell javascript : "stop here , wait until the task is completed,then continue"
        console.log(`Connected to database in ${NODE_ENV} mode`);
        //it is called template literals or string interpolation 
    }catch(error){
        console.log('Error Connecting to database:',error);
        process.exit(1);
    }
}
export default connectToDatabase;
