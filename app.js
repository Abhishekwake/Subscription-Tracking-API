import express from 'express';
import cookieParser from 'cookie-parser';
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());    

//api/v1/auth/sign-up
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);

app.use(errorMiddleware)
app.get("/",(req,res) => {
    res.send("Welcoming to subscription tracking API")
});
app.listen(PORT, async () => {
     await connectToDatabase();
     console.log(`Subscription Tracking API is running on http://localhost:${PORT}`);
     }
);
export default app;