const db = require('../models/index')
const Sequelize = require('sequelize');

const userTest = {
    getAllUsers: async(req, res) => {
        try {
            const users = await db.User.findAll();
            res.status(200).json(users);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal Server Error' });
          }
    }
}
module.exports = userTest;
