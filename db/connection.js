var mongoose= require("mongoose");

const mongoURI = "mongodb+srv://rishabh:gorzR3libdIegmmh@cluster0.cvk4k.mongodb.net/rishabh"
// const store = new mongoDBSession({
//     uri:mongoURI,
//     collection:"firstsession",
//   });

mongoose.connect(mongoURI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successfully")
}).catch((error)=>{
    console.log("Connection Error " +error)
});

module.exports = mongoose;