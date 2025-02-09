import validator from "validator";
import { ApiError } from "./errorHandler";
import bcrypt from "bcrypt";

export default class ValidateUser {
  static emailValidation(email: string) {
    const isEmailValid = validator.isEmail(email);

    if (!isEmailValid) {
      return new ApiError.BadRequestError("Invalid Email Format");
    }
  }

  static passwordValidation(password: string) {
    const options = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    };

    const isPasswordValid = validator.isStrongPassword(password, options);

    if (isPasswordValid) {
      return new ApiError.BadRequestError("Invalid Password Format");
    }
  }
  static async passwordEncrypt(password: string): Promise<string> {
    try {
      return await bcrypt.hash(password, 10);
    } catch (error) {
      throw new ApiError.InternalServerError("Error hashing password");
    }
  }

  static async passwordVerify(newPassword: string, hashedPassword: string): Promise<boolean> {
    try {
      return await bcrypt.compare(newPassword, hashedPassword);
    } catch (error) {
      throw new ApiError.InternalServerError("Error verifying password");
    }
  }
}
