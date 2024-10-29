import { Request, Response } from "express";
import * as threadServices from "../services/threadService";
import {
   findManyThreads,
   findUniqueThread,
} from "../repositories/threadRepository";

export const createThread = async (req: Request, res: Response) => {
   try {
      const { body, file } = req;
      const user = res.locals.user;

      console.log("user", user)

      body.userId = user.id;

      const thread = await threadServices.createThread(body, file);
      res.json(thread);
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: (error as Error).message });
   }
};

export const getThreads = async (req: Request, res: Response) => {
   try {
      const thread = await findManyThreads();
      res.json(thread);
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: (error as Error).message });
   }
};

export const getThreadById = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const thread = await findUniqueThread(+id);

      if (!thread) {
         res.status(404).json({ message: "Thread not found" });
         return;
      }

      res.json(thread);
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: (error as Error).message });
   }
};
