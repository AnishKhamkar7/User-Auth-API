import { prisma } from "../db/user.db";
import { ApiError } from "../utils/errorHandler";

export default class userRepository {
  async findById(userId: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new ApiError.NotFoundError("User Not Found");
    }
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new ApiError.NotFoundError("User Not Found");
    }

    return user;
  }

  async createUser({ email, password }: { email: string; password: string }) {
    const createdUser = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    if (!createdUser) {
      throw new ApiError.InternalServerError("User Registration Failed");
    }

    return createdUser;
  }

  async updateUser({ email, password }: { email: string; password: string }) {
    const updatedUser = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    if (!updatedUser) {
      throw new ApiError.InternalServerError("User Cannot be updated");
    }

    return updatedUser;
  }
}
