const Sequelize = require('sequelize');
const Users = (sequelize) => sequelize.define('users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  roleId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  salary: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  }
},
  {
    freezeTableName: true,
    timestamps: false
  }
)
module.exports = Users
