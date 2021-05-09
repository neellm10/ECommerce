require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = async()=> {
    try{
        await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://user-000:user-000@ecomm.gwrez.mongodb.net/Ecomm?retryWrites=true&w=majority", {
             useNewUrlParser: true,
             useUnifiedTopology: true
        });
        console.log("MongoDB Connection SUCCESSFUL");
    }
    catch(error){
     console.error("Connection Failed"); 
     process.exit(1);     
    }
};
module.exports=connectDB;