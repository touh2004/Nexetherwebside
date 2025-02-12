const { z } = require("zod");


//creating an object schema 
const  signupSchema = z.object({
    username: z
    .string({ require_error: "Name is required "})
    .trim()
    .min(3, { message: "Name must be at least of 3 chars. "})
    .max(255, {message: "Name must not be more than 255 characters."}),
    email: z
    .string({ require_error: "Email is required "})
    .trim()
    .email({message:"Invalid email address"})
    .min(3, { message: "email must be at least of 3 characters. "})
    .max(255, {message: "email must not be more than 255 characters."}),
   // phone: z
    //.string({ require_error: "Phone number is required "})
    //.trim()
    //.min(10, { message: "Phone number be at least of 10 characters. "})
   // .max(20, {message: "Phone number not be more than 20 characters."}),
    password: z
    .string({ require_error: "Password is required "})
    .trim()
    .min(7, { message: "Password be at least of 6 characters. "})
    .max(1024, "Password can't be greater than 1024 characters."),
});

module.exports = signupSchema;