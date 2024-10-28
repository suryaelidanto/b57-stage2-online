import * as threadRepository from "../repositories/threadRepository";
import { Threads } from "@prisma/client";
import { uploadToCloudinary } from "./uploadService";

export const createThread = async (
   thread: Threads,
   file: Express.Multer.File | undefined
) => {
   if (file) {
      thread.file = await uploadToCloudinary(file);
   }

   return await threadRepository.createThread(thread);
};
