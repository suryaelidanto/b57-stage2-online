import { User } from "@prisma/client";
import prisma from "../libs/prisma";

export const createUser = async (user: User) => {
   return await prisma.user.create({
      data: {
         name: user.name,
         address: user.address,
         email: user.email,
         password: user.password,
      },
   });
};

export const findManyUsers = async () => {
   return await prisma.user.findMany();
};

export const findUniqueUser = async (id: number) => {
   return await prisma.user.findUnique({
      where: { id },
   });
};

export const findUniqueUserByEmail = async (email: string) => {
   return await prisma.user.findUnique({
      where: { email },
   });
};

export const findUserByName = async (query: string) => {
   // SELECT * FROM users WHERE name = 'name'
   return await prisma.user.findMany({
      where: {
         OR: [
            {
               name: {
                  contains: query,
               },
            },
            {
               email: {
                  contains: query,
               },
            },
         ],
      },
   });
};

export const deleteUser = async (id: number) => {
   return await prisma.user.delete({
      where: { id },
   });
};

export const updateUser = async (user: User) => {
   return await prisma.user.update({
      where: { id: user.id },
      data: {
         name: user.name,
         address: user.address,
      },
   });
};
