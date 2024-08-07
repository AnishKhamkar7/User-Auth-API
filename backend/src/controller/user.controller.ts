import { Request, Response } from "express";
import UserServices from "../service/user.service";

export default class UserController {
  userService: UserServices;

  constructor(userService: UserServices) {
    this.userService = userService;
  }
  registerUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await this.userService.createUser({ email, password });

    return res.status(200).json(user);
  };
}
