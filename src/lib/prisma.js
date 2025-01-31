import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const prismaGlobal = global;

if (process.env.NODE_ENV != "production") prismaGlobal.prisma = prisma;

export default prisma;