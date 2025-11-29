import express from 'express';
import { PORT } from './config/env.js';
const app = express();
app.get("/",(req,res) => {
    res.send("Welcoming to subscription tracking API")
});
app.listen(PORT, () =>
     console.log(`Subscription Tracking API is running on http://localhost:${PORT}`)
);
export default app;