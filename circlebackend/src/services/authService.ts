import { User } from "@prisma/client";
import { registerSchema } from "../libs/validator/registerSchema";
import { validateData } from "../utils/validateData";
import bcrypt from "bcrypt";
import prisma from "../libs/prisma";
import {
   findUniqueUserByEmail,
   createUser,
} from "../repositories/userRepository";
import { loginSchema, LoginSchema } from "../libs/validator/loginSchema";
import jwt from "jsonwebtoken";

export const registerUser = async (user: User) => {
   const validUser = validateData(registerSchema, user);
   if (validUser.error) {
      throw new Error(validUser.error);
   }

   const existedUser = await findUniqueUserByEmail(user.email);

   if (existedUser) {
      throw new Error("User already exists");
   }

   user.password = await bcrypt.hash(user.password, 10);
   return await createUser(user);
};

export const login = async (loginDTO: LoginSchema) => {
   const validUser = validateData(loginSchema, loginDTO);
   if (validUser.error) {
      throw new Error(validUser.error);
   }

   const { email, password } = loginDTO;
   const user = await findUniqueUserByEmail(email);
   if (!user) {
      throw new Error("Email or password is incorrect");
   }

   const isMatch = await bcrypt.compare(password, user.password);

   if (!isMatch) {
      throw new Error("Email or password is incorrect");
   }

   const token = jwt.sign(user, "SECRETKEY", {
      expiresIn: "1d",
   });

   return token;
};
