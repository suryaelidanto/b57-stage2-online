import { Router } from "express";
import userRouter from "./userRouter";
import authRouter from "./authRouter";
import { authentication } from "../../middlewares/authentication";
// import { upload } from "../../middlewares/file-upload";
// import { uploadToCloudinary } from "../../services/uploadService";
// import { createThread } from "../../controllers/threads";
import threadRouter from "./threadRouter";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "INI APP EXPRESS B57",
  });
});

// router.post("/upload-test", upload.single("file"), async (req, res) => {
//    if (req.file === undefined) {
//       res.json({
//          message: "Please upload a file",
//       });
//    }
//    const url = await uploadToCloudinary(req.file as Express.Multer.File);

//    res.json({
//       message: "Upload success",
//       url,
//    });
// });

router.use("/threads", authentication, threadRouter);

router.use("/users", authentication, userRouter);
router.use(authRouter);

export default router;
