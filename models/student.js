var mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const crypto = require ('crypto');
 
// using cipher 

// const cipher = crypto.createCipher('aes192','a password');
// var encrypted = cipher.update('Hello world','utf8','hex');
// encrypted += cipher.final('hex');
// console.log(encrypted)

// using 
// const decipher = crypto.createDecipher('aes192','a password');
// var encrypted = '58acd902cea8e0787357c0e89ce23f7c',
//  decrypted = decipher.update(encrypted,'hex','utf8');
// decrypted = decrypted + decipher.final('utf8');
// console.log(decrypted);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// })
const studentschema = new mongoose.Schema({
    name:{
        type:String,
    },
    lastname:{
        type:String,
    },
    gender:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    },
    password:{
        type:String,
    },
    confirmpassword:{
        type:String,    
    }

});



// password hashing through bcrypt

// studentschema.pre("save",async function(next){
//   try{
//       const salt = await bcrypt.genSalt(10)
//       const hashedPassword = await bcrypt.hash(this.password,salt)
//       this.password = hashedPassword
//       next()
//   }catch (error){
//       next(error) 
//   }
// });


const student = new mongoose.model('student',studentschema);

module.exports = student;