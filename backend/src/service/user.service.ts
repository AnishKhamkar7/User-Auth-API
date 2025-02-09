import userRepository from "../repository/user.repository";
import { ApiError } from "../utils/errorHandler";
import validateUser from "../utils/validation.utils";

export default class UserServices {
  UserRepository: userRepository;

  constructor(UserRepository: userRepository) {
    this.UserRepository = UserRepository;
  }

  async checkExistingUser(email: string) {
    const existingUser = await this.UserRepository.findByEmail(email);

    if (existingUser) {
      return new ApiError.BadRequestError("Email Already exists");
    }
  }

  async createUser({ email, password }: { email: string; password: string }) {
    await this.checkExistingUser(email);

    const isEmailValid = validateUser.emailValidation(email);
    const isPasswordValid = validateUser.passwordValidation(password);

    if (!isEmailValid) {
      throw new ApiError.BadRequestError("Invalid Email ID");
    }

    if (!isPasswordValid) {
      throw new ApiError.BadRequestError("Invalid Password");
    }

    const user = await this.UserRepository.createUser({ email, password });

    return user;
  }
}
