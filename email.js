var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'vermaanmol16@gmail.com',
		pass: 'jesus2christ'
	}
});

var mailOptions = {
	from: 'vermaanmol16@gmail',
	to: 'anmolv365@gmail.com',
	subject:'sending Email using Node.js',
	text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
	if(error){
		console.log(error);
	} else {
		console.log('Email sent: '+info.response);
	}
});