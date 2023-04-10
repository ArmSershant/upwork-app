const Sequelize = require('sequelize');
const Requiringworks = (sequelize) => sequelize.define('requiringworks', {
  freelancerId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  workId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  clientId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
},
  {
    freezeTableName: true,
    timestamps: false
  })
module.exports = Requiringworks;
