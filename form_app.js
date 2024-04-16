require('dotenv').config()
const nodemailer = require("nodemailer");
const express= require("express")
const ContactformAction=express()
ContactformAction.use(express.json());

   
    
ContactformAction.post("/send", (req, res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:"techtutez@gmail.com",
            pass:"muzu zvoh rhhj bnbz" 
        },
    });

    const mailOptions = {
        from: req.body.email,
        to: ['gzatrop@gmail.com'],
        subject: `Message from ${req.body.name} : ${req.body.subject}`,
        text: req.body.message
    }
    // let mailOptions = { from: 'bob@bobcares.com', to: ['John@bobcares.com', 'Jane@bobcares.com'], subject: 'Multiple Recipients Test Mail', text: 'This email is being sent to multiple recipients with Nodemailer!' }

    transporter.sendMail(mailOptions, (error, responose) => {
        if(error) {
            console.log(error);
            res.send("error")
        } else {
            console.log("Email Sent");
            res.send("success")
        }
    }); 
});

module.exports = ContactformAction;
