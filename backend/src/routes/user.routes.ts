import { Router } from "express";
import UserController from "../controller/user.controller";
import UserServices from "../service/user.service";
import UserRepository from "../repository/user.repository";

const userRepository = new UserRepository();
const userService = new UserServices(userRepository);
const userController = new UserController(userService);

const router = Router();

router.route("/register").post(userController.registerUser);

export default router;
