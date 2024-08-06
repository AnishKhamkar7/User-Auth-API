import validator from "validator";

export default class validateUser {
  static emailValidation(email: string): boolean {
    return validator.isEmail(email);
  }

  static passwordValidation(password: string): boolean {
    const options = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    };

    return validator.isStrongPassword(password, options);
  }
}
