const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
//validate
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


//we use this are this also 
//router.get("/",(req, res) =>{
//    res
//    .status(200)
//    .send("Welcome to thw nexether by using router");
//});

//This part is easy we use hear chaining part by usig get ,post put like taht

router.route("/").get(authControllers.home);

// router.route("/register").post(register);
// before calling it check the first and after they will call

router.route('/register')
.post( validate(signupSchema), authControllers.register);
router.route('/login').post( authControllers.login);


module.exports = router;