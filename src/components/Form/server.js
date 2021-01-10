let express = require("express");
let app = express();
const path = require("path");
let nodemailer = require("nodemailer");

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// test account ----------------------
let testAccount = await nodemailer.createTestAccount();
let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user, // generated ethereal user
    pass: testAccount.pass, // generated ethereal password
  },
});

// -------------------------
nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.REACT_APP_CONTACT_MAIL_ACCOUNT,
    pass: process.env.REACT_APP_CONTACT_MAIL_PASSWORD,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

router.post("/access", (req, res, next) => {
  let name = req.body.name;
  let subject = req.body.subject;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n subject: ${subject} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: email,
    to: REACT_APP_CONTACT_MAIL_ACCOUNT,
    subject: subject,
    message: message,
    content: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
