import { Router } from "express";
const userRouter = Router();
userRouter.get('/', (req,res)=> { res.send( {title: "GET All Users"} ); });

userRouter.get('/:id', (req,res)=> { res.send( {title: "GET user details"} )});

userRouter.post('/', (req,res)=> { res.send( {title: "Create new user"} )});

userRouter.delete('/:id', (req,res)=> { res.send( {title: "delete user"} )});