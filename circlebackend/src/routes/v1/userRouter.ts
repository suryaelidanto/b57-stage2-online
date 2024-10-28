import { Router } from "express";
import * as userController from "../../controllers/user";
const userRouter = Router();

userRouter.get("/", userController.getUser);
userRouter.post("/", userController.createUser);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

userRouter.get("/detail/:id", userController.getUserById);
userRouter.get("/search", userController.getUserByQuery);

export default userRouter;
