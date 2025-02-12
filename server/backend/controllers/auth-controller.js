const User = require("../models/user-model");
const bcrypt = require("bcrypt");


//Home page logic

const home = async (req, res) => {
    try {
      res
        .status(200)
        .send("Welcome to the nexether by using router");

    } catch (error) {
        console.log(error);
    }

};

//Registration logic



const register = async (req, res) => {
    try {
        console.log(req.body);
        const{username, email, password} = req.body;

        const userExist = await User.findOne({ email });

        if(userExist) {
            return res.status(400).json({msg: "email already exists"});
        }

        //hash the password 
       // const SaltRound =10;
        //const hash_password = await bcrypt.hash(password, SaltRound);

        const userCreated = await User.create({
            username,
            email, 
            //phone, 
            password,
        });

        res.status(200).json({ 
            msg: "registration successful", 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString(),
         });
    }   catch (error) {
        res.status(400).json("internal server error");
    }
} 
//user login logic

const login = async (req,res) => {
    try {
      const { email, password } = req.body;

      //checking valid or not

      const userExist = await User.findOne( { email });
      console.log(userExist);

      if(!userExist){
        return res.status(400).json({message:"Invalid Credentials "});
      }
       //const user = await bcrypt.compare(password, userExist.password);
      const user = await userExist.comparePassword(password);

      if(user)
      {
        res.status(200).json({ 
            msg: "Login successful", 
            token: await userExist.generateToken(), 
            userId: userExist._id.toString(),
         });
      }else{
        res.status(400).json({message:"Invalid email or password" });
      }
    } catch (error) {
       // res.status(400).json("internal server error");
        next(error);
    }
}

module.exports = { home, register, login};