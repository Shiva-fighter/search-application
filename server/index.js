const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const Company = require("./db/comSchema")

app.use(express.json());
app.use(cors());
require("./db/config");
const Product = require("./db/comSchema");

// Company.find({},function(err,comSchema){
//     if(err){
//         console.warn(err);
//     } 
//     console.warn(comSchema)
// })
// app.get("/",(req,res)=>{
//     res.send("helo from sever")
// })

app.get("/:key", async(req,res)=>{
    let result = await Company.find({
        "$or":[
            {
                primaryText:{$regex:req.params.key}
            },
            {
                headline:{$regex:req.params.key}
            },
            {
                description:{$regex:req.params.key}
            }
        ]
    }, {"imageUrl":1, "com_name":1, "com_url" : 1, "CTA":1 });
    res.send(result);
})

//app.listen(3000);
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})