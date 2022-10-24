const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const connectDb = async ()=>{
    const DB = "mongodb+srv://shiva:shiva@cluster0.h0lvxtm.mongodb.net/company_data?retryWrites=true&w=majority"
    mongoose.connect(DB
    ).then(()=>{
        console.log("conection successful");
    }).catch((err)=> console.log(err));
}

connectDb();