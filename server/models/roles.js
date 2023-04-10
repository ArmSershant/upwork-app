const Sequelize = require('sequelize')
const Roles = (sequelize) => sequelize.define('roles', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
},
  {
    freezeTableName: true,
    timestamps: false
  })
module.exports = Roles
