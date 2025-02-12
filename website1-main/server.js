require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

// lets tackle cors
const corsOptions = {
    origin: 'http://localhost:3001',
    methods:"GET, POST, PUT, DELETE,PATCH, HEAD",
    Credentials : true,
  };
app.use(cors(corsOptions));

//express middleware
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);


//very imp
app.use(errorMiddleware);

connectDb().then(() =>{
const PORT = 5000;
    app.listen(PORT, () => {
    console.log(`sever is running at port: ${PORT}` );
});
});