import { Router } from "express";
import * as authController from "../../controllers/auth";
// import rateLimit from "express-rate-limit";
const authRouter = Router();

// // ini contoh per sub route
// const limiter = rateLimit({
//    windowMs: 1 * 60 * 1000, // 5 minutes
//    limit: 3, // each IP can make up to 10 requests per `windowsMs` (5 minutes)
//    standardHeaders: true, // add the `RateLimit-*` headers to the response
//    legacyHeaders: false, // remove the `X-RateLimit-*` headers from the response
// });

// authRouter.use(limiter);

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

export default authRouter;
