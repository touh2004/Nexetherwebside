const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
    },
   // phone: {
    //   type: String,
     //   required: true,
    //},
    password: {
        type: String,
        required: true,
    },
   // isAdmin: {
    //    type: Boolean,
  //      default: false,
  //  },
});

//secure the password with bcycrpt
//middle ware
userSchema.pre('save', async function(next) {
 //console.log("pre method",this);
 const user = this;

 if (!user.isModified("password")){
    next();
 }
 try{
    const SaltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, SaltRound);
    user.password = hash_password;

 } catch (error){
    next(error);
 }
});
//const user = this;
//compare password 
userSchema.methods.comparePassword = async function (password) {
return bcrypt.compare(password, this.password);
};

// secure the password with bcrypt 
//json web tokens;
userSchema.methods.generateToken = async function () {
 try {
   return jwt.sign({
    userId: this._id.toString(),
    email:this.email,
    isAdmin: this.isAdmin,
   },
    process.env.JWT_SECRET_KEY,
    {
    expiresIn : "30d",
    }
);
 } catch (error) {
    console.error(error);
 }
};


// define the models and collection name
const User = new mongoose.model("User",userSchema);

module.exports = User;