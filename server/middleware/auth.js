import jwt from "jsonwebtoken";
import ENV from "../config.js";

// auth middleware
export default async function Auth(req, res, next) {
  try {
    //access authorize header to validate request
    const token = req.headers.authorization.split(" ")[1];
    const decodeToken = await jwt.verify(token, ENV.JWT_SECRET);

    req.user = decodeToken;

    // res.json(token)  
    next();
    
  } catch (error) {
    res.status(401).json({ error: "Authentication failed" });
  }
}


export function localVariables(req,res,next){
     req.app.locals = {
        OTP : null,
        resetSession : false
     }
     next()
}

