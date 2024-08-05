import userRepository from "../repository/user.repoitory";

export default class UserServices {
  UserRepository: userRepository;

  constructor(UserRepository: userRepository) {
    this.UserRepository = UserRepository;
  }
}
