import { Router } from "express";
import * as threadController from "../../controllers/threads";
import { authentication } from "../../middlewares/authentication";
import { upload } from "../../middlewares/file-upload";
const threadRouter = Router();

threadRouter.post(
  "/",
  authentication,
  upload.single("file"),
  threadController.createThread
);

threadRouter.get("/", threadController.getThreads);

threadRouter.get("/:id", threadController.getThreadById);

export default threadRouter;
