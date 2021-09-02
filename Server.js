var nodemailer = require('nodemailer');
var newman     = require('newman')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'kasunishankayapa1996@gmail.com',
           pass: 'greenuniversity'
       }
   });

   const mailOptions = {
    from: 'kasunishankayapa1996@gmail.com', // sender address
    to: 'kasun.yapa@arimaclanka.com', // list of receivers
    subject: 'Nodemailer', // Subject line
    html: '<p>Your html here</p>'// plain text body 
    ,attachments: [
        {
            filename: 'newman-run-report-2021-09-02-07-51-07-745-0.html',
            path: "C:/Users/KasunYapa/Desktop/TestAPI/newman" + '/newman-run-report-2021-09-02-07-51-07-745-0.html'
        }
    ]

  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });