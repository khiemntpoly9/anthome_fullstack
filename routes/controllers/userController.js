// import model User vào file  userController
const { Role, Account, Address } = require('../../models/dbModel');
// Nodemail
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');

// .ENV
require('dotenv').config();

// Sử dụng biến môi trường JWT_SECRET
const JWT_SECRET = process.env.JWT_SECRET;

const bcrypt = require('bcryptjs');
const saltRounds = 10;

const UserController = {
  // Auth Login
  authLogin: async (req, res) => {
    const { userName, password } = req.body;
    // Tìm kiếm người dùng trong cơ sở dữ liệu
    const user = await User.findOne({
      where: {
        userName: userName,
      },
      include: {
        model: Role,
        attributes: ['nameRole', 'name'],
      },
    });
    // Kiểm tra tính hợp lệ của tên đăng nhập và mật khẩu
    if (!user) {
      return res.status(401).json({ message: 'Tài khoản hoặc mật khẩu không hợp lệ!' });
    }
    // So sánh mật khẩu
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: 'Tài khoản hoặc mật khẩu không hợp lệ!' });
    }
    // Tạo mã thông báo (token) để xác thực yêu cầu của người dùng
    const token = jwt.sign({ userId: user.id, fullName: user.fullName }, JWT_SECRET);
    // Lưu trữ token trong cơ sở dữ liệu
    user.token = token;
    await user.save();
    // Trả về token cho trang đăng nhập
    console.log(`Name Role: ${user.role.nameRole}`);
    res.json({
      id: user.id,
      username: user.userName,
      role: user.role.nameRole,
      token: token,
    });
  },

  // Logout
  authLogout: async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Không tìm thấy token xác thực' });
    }
    try {
      const decodedToken = jwt.verify(token, JWT_SECRET);
      const userId = decodedToken.userId;
      // Thực hiện xoá phiên làm việc của người dùng trên server ở đây
      // ...
      const user = await User.findOne({ where: { id: userId } });
      user.token = null;
      await user.save();
      res.json({ message: 'Đăng xuất thành công' });
    } catch (error) {
      return res.status(401).json({ message: 'Token xác thực không hợp lệ', Token: `${token}` });
    }
  },

  // Lấy tất cả Account
  getAllUsers: async (req, res) => {
    try {
      const users = await Account.findAll({
        attributes: ['id_user', 'first_name', 'last_name', 'email', 'phone'],
        include: [
          {
            model: Role,
            attributes: ['name_role', 'short_role'],
          },
          {
            model: Address,
            attributes: ['id_address', 'name_address'],
          },
        ],
      });
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  // Lấy thông tin Role
  getRoleDetail: async (req, res) => {
    try {
      const listrole = await Role.findAll();
      res.status(200).json(listrole);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  // Lấy thông tin user theo ID
  getUserById: async (req, res) => {
    const { id } = req.query;
    try {
      // Dùng phương thức User.findByPk để tìm 'id' tương ứng
      const user = await Account.findByPk(id, {
        attributes: ['id_user', 'first_name', 'last_name', 'email', 'phone'],
        include: [
          {
            model: Role,
            attributes: ['name_role', 'short_role'],
          },
          {
            model: Address,
            attributes: ['id_address', 'name_address'],
          },
        ],
      });
      if (!user) {
        res.status(404).send('User not found');
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Tạo User
  // Tạo userName giống nhau sẽ bị lỗi, vì bên Model unique: true
  createUser: async (req, res) => {
    const { first_name, last_name, phone, email, password } = req.body;
    try {
      // Kiểm tra userName tồn tại chưa
      const existingUser = await Account.findOne({ where: { email: email } });
      if (existingUser) {
        res.status(400).json({ message: 'Tài khoản đã tồn tại' });
      } else {
        // Mã hoá mật khẩu
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Upload data
        const user = await Account.create({ first_name, last_name, phone, email, password: hashedPassword });
        res.status(201).json({ message: 'Tạo tài khoản thành công!' });

        // Gửi mail khi tạo tài khoản thành công
        let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, // upgrade later with STARTTLS
          auth: {
            user: 'anthomepoly@gmail.com',
            pass: 'khiem1412fpt',
          },
          tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
          },
        });
        let content = '';
        content += `
          <div style="padding: 10px; background-color: #003375">
              <div style="padding: 10px; background-color: white;">
                  <h4 style="color: #0085ff">Gửi mail với nodemailer và express</h4>
                  <span style="color: black">Đây là mail test</span>
              </div>
          </div>
        `;
        const mainOptions = {
          // thiết lập đối tượng, nội dung gửi mail
          from: 'NQH-Test nodemailer',
          to: req.body.email,
          subject: 'Test Nodemailer',
          text: 'Your text is here', //Thường thi mình không dùng cái này thay vào đó mình sử dụng html để dễ edit hơn
          html: content, //Nội dung html mình đã tạo trên kia :))
        };
        transporter.sendMail(mainOptions, function (err, info) {
          if (!err) {
            console.log('Message sent: ' + info.response);
          } else {
            console.log(err);
          }
        });
        // End block mail
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error!' });
    }
  },

  // Sửa thông tin User
  updateUser: async (req, res) => {
    const { id } = req.query;
    const { fullName, password } = req.body;
    try {
      // Mã hoá mật khẩu
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const numRows = await User.update(
        // UpdateAt thêm thời gian lúc update
        { fullName, password: hashedPassword, updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
        { returning: true, where: { id } }
      );
      // Hàm update trả về một mảng có một phần tử, là số lượng bản ghi đã được cập nhật.
      // Nếu số lượng bản ghi này bằng 0, có nghĩa là không tìm thấy người dùng có ID bằng id,
      // ta gửi trả về một mã lỗi 404 và thông báo "User not found".
      if (numRows[0] === 0) {
        res.status(404).send('User not found');
        return;
      }
      const updatedUser = await User.findByPk(id);
      res.send(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Sửa thông role, admin
  updateUserv2: async (req, res) => {
    const { id } = req.query;
    const { fullName, roleid, img_avt } = req.body;
    try {
      const numRows = await User.update(
        { fullName, roleid, img_avt, updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
        { returning: true, where: { id } }
      );
      if (numRows[0] === 0) {
        res.status(404).send('User not found');
        return;
      }
      const updatedUserv2 = await User.findByPk(id);
      res.send(updatedUserv2);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Xoá User
  deleteUser: async (req, res) => {
    const { id } = req.query;
    try {
      const deletedRows = await User.destroy({
        where: { id },
      });
      if (deletedRows === 0) {
        res.status(404).send('User not found');
        return;
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = UserController;
