import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authentication = (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const { authorization } = req.headers;

   if (!authorization) {
      res.status(401).json({ message: "Unauthorized" });
      return;
   }

   const token = authorization.split(" ")[1];

   if (!token) {
      res.status(401).json({ message: "Unauthorized" });
      return;
   }

   const decoded = jwt.verify(token, "SECRETKEY");

   if (!decoded) {
      res.status(401).json({ message: "Unauthorized" });
      return;
   }

   res.locals.user = decoded

   next();
};
