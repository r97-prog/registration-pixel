var mongoose= require("mongoose");

mongoose.connect("mongodb+srv://rishabh:gorzR3libdIegmmh@cluster0.cvk4k.mongodb.net/rishabh",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successfully")
}).catch((error)=>{
    console.log("Connection Error " +error)
});

module.exports = mongoose;