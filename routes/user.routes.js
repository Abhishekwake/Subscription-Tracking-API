import { Router } from "express";
import { getUser,getUsers } from "../controllers/user.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";
const userRouter = Router();
// userRouter.get('/', (req,res)=> { res.send( {title: "GET All Users"} ); }); older
userRouter.get('/', authorize,getUsers);

// userRouter.get('/:id', (req,res)=> { res.send( {title: "GET user details"} )}); older
userRouter.get('/:id',getUser);

userRouter.post('/', (req,res)=> { res.send( {title: "Create new user"} )});

userRouter.delete('/:id', (req,res)=> { res.send( {title: "delete user"} )});

export default userRouter;
