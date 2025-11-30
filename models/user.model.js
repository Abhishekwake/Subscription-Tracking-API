import mongoose from "mongoose";
const userSchema = new mongoose.Schema( {
    name : { 
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email : {
        type: String,
        required: [true,'Useremail is required'],
        unique: true,
        trim:true,
        lowercase:true,
        match:[/\S+@\S+\.\S+/,'Please fill a valid email address']
    } ,
    password : {
        type: String,
        required: [true,'Userpassword is required'],
        minLength: 8,
        maxLength: 50,
        match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,'Password must contain at least one uppercase letter, one lowercase letter, and one number']
    }
},{timestamps:true})
const User = mongoose.model('User',userSchema);
export default User;