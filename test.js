var newman     = require('newman')
var nodemailer = require('nodemailer')

newman.run({
    collection: 'Test.postman_collection.json',
    reporters: ['html','cli'],
    reporter: {
        html: {
          export:
            "newman/TestReport.html"
        }}

}).on('done', function (err) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kasunishankayapa1996@gmail.com',
            pass: '<password should be here>'
        }
    });

    let mailOptions = {
        from: 'kasunishankayapa1996@gmail.com',
        to: 'kasun.yapa@arimaclanka.com',
        subject: 'Newman Report Created',
        text: 'Here is the report....',
        attachments: [
            {
                filename: 'TestReport.html',
                path: 'newman' + '/TestReport.html'
            }
        ]
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error)
    } else {
        console.log('Email sent: ' + info.response)
    }
    });
})