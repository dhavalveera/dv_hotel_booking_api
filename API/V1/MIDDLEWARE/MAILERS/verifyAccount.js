const nodemailer = require('nodemailer');
const path = require('path');

const verifyAccount = async (emailTo, token) =>
  new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.email,
        pass: process.env.pwd,
      },
    });

    transporter.verify((err, suc) => {
      if (err) {
        console.log('Nodemailer SMTP has not setup properly because = ', err);
      } else {
        console.log('Nodemailer SMTP has been setup successfully = ', suc);
      }
    });
  });

module.exports = verifyAccount;
