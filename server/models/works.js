const Sequelize = require('sequelize')
const Works = (sequelize) => sequelize.define('works', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  budget: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  clientId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
  {
    freezeTableName: true,
    timestamps: false
  })
module.exports = Works
