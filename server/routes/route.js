import { Router } from "express";
const router = Router();
import * as controller from '../controllers/appController.js'
import Auth, {localVariables} from "../middleware/auth.js";
import { registerMail } from "../controllers/mailer.js";

// const {register }= require("../controllers/appController")

// Post method
router.route('/register').post(controller.register); // register user
router.route('/registerMail').post(registerMail); // send the email
// router.route('/authenticate').post(controller.verifyUser,(req,res)=>res.end()); //authenticate user 
router.route('/authenticate').post(controller.verifyUser, (req, res) => {
    res.status(201).send({ message: "User authenticated" });
});      
router.route('/login').post(controller.verifyUser, controller.login); // login in app         

// Get Method 
router.route("/user/:username").get(controller.verifyUser, controller.getUser) // user with username
router.route("/generateOTP").get(controller.verifyUser ,localVariables ,controller.generateOTP) // generate random otp
router.route("/verifyOTP").get(controller.verifyUser ,controller.verifyOTP) // verify generated otp
router.route("/createResetSession").get(controller.createResetSession) // reset all the variables

// Put Method
router.route('/updateuser').put(Auth,controller.updateUser) // is use to update the user profile
router.route('/resetPassword').put(controller.verifyUser ,controller.resetPassword) // use to reset password


export default router;
