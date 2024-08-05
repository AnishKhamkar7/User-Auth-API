import { Request, Response } from "express";
import UserServices from "../service/user.service";
import userRepository from "../repository/user.repoitory";

export default class UserController {
  static registerUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const userServices = new UserServices(new userRepository());
  };
}
