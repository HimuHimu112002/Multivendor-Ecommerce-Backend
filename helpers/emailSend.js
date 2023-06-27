const nodemailer = require("nodemailer");

async function EmailSend(email) {
   
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mdhmaktaruzzaman9101@gmail.com",
        pass: "mopgvxmusxutzubs",
      },

    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻"',
      to: email,
      subject: "Offer",
      text: "Hello world?",
      html: `<h1 style="font-family: Arial, Helvetica, sans-serif;color: #262626;">OREBI</h1> <h2 style="font-family: Arial, Helvetica, sans-serif;font-size: 34px; color: #262626;">Please confirm your email </h2> <p style="font-family: Arial, Helvetica, sans-serif;">Welcome to our orebi ecommerce family. For continue please verify your email address.</p><button style="background-color: #262626; color: white; padding: 10px 10px; border-radius: 5px; cursor: pointer; font-family: Arial, Helvetica, sans-serif;" >Click Here</button>`,

    });
  
}

module.exports = EmailSend