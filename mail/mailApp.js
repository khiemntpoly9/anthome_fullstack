// .ENV
require('dotenv').config();
// Nodemail
const nodemailer = require('nodemailer');
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
  testMail: async (email) => {
    try {
      let info = await transporter.sendMail({
        from: '"Ant Home Poly" <anthomepoly@gmail.com>',
        to: email, // nhận tham số Email truyền vào
        subject: 'Tạo tài khoản thành công!',
        html: `
          <b>Chúc mừng bạn đã tạo tài khoản thành công 1!</b>
        `,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = mailApp;
