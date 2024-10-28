import { Threads } from "@prisma/client";
import prisma from "../libs/prisma";

export const createThread = async (thread: Threads) => {
   return await prisma.threads.create({
      data: {
         content: thread.content,
         file: thread.file,
         userId: thread.userId,
      },
   });
};

export const findManyThreads = async () => {
   return await prisma.threads.findMany();
};

export const findUniqueThread = async (id: number) => {
   return await prisma.threads.findUnique({
      where: { id },
   });
};
