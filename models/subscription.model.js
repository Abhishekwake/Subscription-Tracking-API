import mongoose from "mongoose";
const subscriptionSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: [true,'Subscription name is required'],
        trim: true,
        minLength: 2,
        maxLength:100,
    },
    price: {
        type: Number,
        required: [true,'Subscription price is required'],
        min: [0,'Price must be greater than 0']
    },
    currency: {
        type: String,
        enum: ['USD','EUR','GBP'],
        default: 'USD',
    },
    frequency: {
        type: String,
        enum: ['daily','weekly','montly','yearly'],
    },
    category: {
        type: String,
        enum: ['sports','news','entertainment','lifestyle','finance','polictics','others'],
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type:String,
        enum: ['active','cancelled','expired'],
        default: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
     

    },{timestamps:true});