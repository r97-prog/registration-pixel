var express = require('express');
var router = express.Router();
var studentSchema = require("../models/student");
const crypto = require('crypto');

//  GET home page. 
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express'})
});

//  run on server 

router.get('/register',(req, res) => {
  res.render('index')
});

router.post("/register",async(req,res)=>{
  try{
  let data = JSON.parse(req.body.data);
    var email = data.email;
    var emailCheck = await studentSchema.findOne({email:email});
    console.log(emailCheck);
    if(emailCheck){
      res.status(200).json({"message":"Email already exists."});
    } else {
      let encryptedPassword = encrypt(data.password);
      // const decipher = crypto.createDecipher('aes192','a password');
      // decrypted = decipher.update(encrypted,'hex','utf8');
      // decrypted += decipher.final('utf8');
      // console.log("decrypted : ",decrypted);
      return

      let registerStudent = {
        name:data.fname,
        lastname:data.lastname,
        email:data.email,
        password:data.password,
      }
      console.log("register",registerStudent)
      let registered = await studentSchema.create(registerStudent);
      console.log("registered : ", registered);
      res.status(200).json(registered);
    }
     }catch(error){
     console.log(error);
     res.status(401).send(error);
     }

});


// Get request login
router.post("/login",async(req,res)=>{
  try{
    var email = req.body.email;
    var password = req.body.password;

    var checkEmail = await studentSchema.findOne({email:email});
    if(checkEmail) {
      if(password === checkEmail.password) {
        req.session.email = email
        req.session.userId = checkEmail._id
        console.log(req.session);
        res.status(200).send("Login successfully.")


      } else {
        res.send("Password not matched.")
      }
      // res.redirect("/users");
    }
  }catch(error){
    console.log(error)
    res.status(400).send("invalid credentials")
  }
});

// PATCH request update the student with id 
// router.patch("/students/:id",async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         // let email = req.body.Email
//         // let data = {
//         //     email : req.body.Email
//         // }
//         const updateStudents = await student.findByIdAndUpdate(_id,req.body,{
//             new:true
//         });
//         console.log(updateStudents);
//         res.send(updateStudents);
//     }catch(e){
//         res.status(400).send(e);
//     }
// });

// // Delete request 

router.delete("/students/:id",async(req,res)=>{
  try{
      const deleteStudent = await student.findOneAndDelete(req.params.id);
          if(!req.params.id){
              return res.Status(400).send();
          }
          res.send(deleteStudent);
  }catch(e){
      res.status(500).send(e);
  }
});

module.exports = router;


function encrypt(password) {
  const cipher = crypto.createCipher('aes192','a password');
  var encrypted = cipher.update(password,'utf8','hex');
  encrypted += cipher.final('hex');
  return encrypted
}
