import { User } from "@prisma/client";
import * as userRepository from "../repositories/userRepository";

export async function getUsers() {
   return await userRepository.findManyUsers();
}

export const createUser = async (user: User) => {
   return await userRepository.createUser(user);
};

export const updateUser = async (user: User) => {
   return await userRepository.updateUser(user);
};

export const deleteUser = async (id: number) => {
   return await userRepository.deleteUser(id);
};

export const findUniqueUser = async (id: number) => {
   return await userRepository.findUniqueUser(id);
};

export const findUserByName = async (name: string) => {
   return await userRepository.findUserByName(name);
};
