/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express"
import { envVars } from "../modules/config/env"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const globalErrorHandler = (err : any, req: Request, res: Response, next: NextFunction) => { //global err handler
    
    const statusCode = 5000
    const message = `Something Went Wrong !! ${err.message}`

  res.status(statusCode).json({
    success: false,
    message,
    err,
    stack: envVars.NODE_ENV === "development" ? err.stack : null
  })
}