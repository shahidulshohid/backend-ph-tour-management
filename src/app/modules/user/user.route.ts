/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response, Router } from "express";
import { UserControllers } from "./user.controller";
import { AnyZodObject } from "zod";

const validateRequest = (zodSchema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {

    req.body = await zodSchema.parseAsync(req.body);

    console.log(req.body);

    // next();
  };

const router = Router();

router.post(
  "/register",

  UserControllers.createUser
);
router.get("/all-users", UserControllers.getAllUsers);
export const UserRoutes = router;
