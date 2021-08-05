var mongoose = require("mongoose");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// })
const studentschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true    
    }

});

const student = new mongoose.model('student',studentschema);

module.exports = student;