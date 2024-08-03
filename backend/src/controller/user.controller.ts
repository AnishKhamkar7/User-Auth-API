import { Request,Response } from "express";

export default class UserController {
    
    static registerUser= async(req:Request,res:Response ) =>{
        const {username, password} = req.body

        
    }

}