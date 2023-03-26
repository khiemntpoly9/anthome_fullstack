// Nodemail
const nodemailer = require('nodemailer');
// MJML
const mjml2html = require('mjml');
const fs = require('fs');
// .ENV
require('dotenv').config();
//
const createaccount = fs.readFileSync('mail/createaccount.mjml', 'utf8');
const { html } = mjml2html(createaccount);
//   Cấu hình vẫn chuyển
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL, // generated ethereal user
    pass: process.env.PASSWORD, // generated ethereal password
  },
});

const mailApp = {
  createAccount: async (email, res) => {
    try {
      let info = await transporter.sendMail({
        from: '"Ant Home Poly" <anthomepoly@gmail.com>',
        to: email, // nhận tham số Email truyền vào
        subject: 'Tạo tài khoản thành công!',
        html: html,
      });
      res.json({ message: 'Gửi mail thành công!' });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = mailApp;
