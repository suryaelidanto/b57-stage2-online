import { Request, Response } from "express";
import * as authServices from "../services/authService";

export const register = async (req: Request, res: Response) => {
   try {
      const { body } = req;
      const user = await authServices.registerUser(body);
      res.json({
         message: "register success",
      });
   } catch (error) {
      console.log((error as Error).message);
      res.status(500).json({ message: (error as Error).message });
   }
};

export const login = async (req: Request, res: Response) => {
   try {
      const { body } = req;
      const token = await authServices.login(body);
      res.json({
         token,
      });
   } catch (error) {
      console.log((error as Error).message);
      res.status(500).json({ message: (error as Error).message });
   }
};
