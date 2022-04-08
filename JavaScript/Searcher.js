const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// search by users bio
module.exports = async (bio) => {
  const users = await prisma.users.findMany({
    where: {
      Bio: {
        contains: bio,
      },
    },
  });
  return users;
};
