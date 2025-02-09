import { Request, Response } from "express";
import UserServices from "../service/user.service";
import apiResponse from "../utils/apiResponse";

export default class UserController {
  userService: UserServices;

  constructor(userService: UserServices) {
    this.userService = userService;
  }
  registerUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await this.userService.createUser({ email, password });

    return apiResponse(res, 200, user);
  };
}
