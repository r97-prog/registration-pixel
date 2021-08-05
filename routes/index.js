const { Router } = require('express');
var express = require('express');
var router = express.Router();
var studentSchema = require("../models/student");

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
    // console.log(req.body)
    // return
    
    let password = req.body.password;
    let cpassword = req.body.confirmpassword;
    
    if(password === cpassword){
      
      let registerStudent = {
        name:req.body.fname,
        lastname:req.body.lastname,
        email:req.body.email,
        gender:req.body.gender,
        phone:req.body.phone,
        address:req.body.address,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
      }
      console.log("register : ", registerStudent);
      let registered = await studentSchema.create(registerStudent);
      console.log("registered : ", registered);
      // res.render('index', { title: 'Express' });
      res.status(200).json(registered);
    }else{
      res.send("password not match")
    }
  }catch(error){
    console.log(error);
    res.status(400).send(error);
  }
});

// Get request login
router.post("/login",async(req,res)=>{
  try{
    const email = req.body.email;
    const password = req.body.password;

    const useremail = await studentSchema.findOne({email:email});
    console.log(useremail);
   
    res.status(200).send("Successfully login")

// if(useremail.password === password){

// }else{
//   res.send("Invalid credentials")
// };
    // console.log(`${email}and password is ${password}`)
  }catch(error){
    res.status(400).send("invalid credentials")
  }
});

// PATCH request update the student with id 
router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        // let email = req.body.Email
        // let data = {
        //     email : req.body.Email
        // }
        const updateStudents = await student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        console.log(updateStudents);
        res.send(updateStudents);
    }catch(e){
        res.status(400).send(e);
    }
});

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
