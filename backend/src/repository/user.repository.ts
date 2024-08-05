import { prisma } from "../db/user.db";

export default class userRepository {
  async findById(userId: string) {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
