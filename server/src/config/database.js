<<<<<<< HEAD
const { PrismaClient } = require('@prisma/client');
let prisma;

if (process.env.NODE_ENV === 'production') {
=======
import { PrismaClient } from "@prisma/client";
let prisma;

if (process.env.NODE_ENV === "production") {
>>>>>>> khanh
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

const db = prisma;
<<<<<<< HEAD

module.exports = db;
=======
export default db;
>>>>>>> khanh
