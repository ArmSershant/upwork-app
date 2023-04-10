const Sequelize = require('sequelize');
const FinishedWorks = (sequelize) => sequelize.define('finishedworks', {
  freelancerId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  workId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  clientId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: true,
    default: null,
  },
  review: {
    type: Sequelize.STRING,
    allowNull: true
  }
},
  {
    freezeTableName: true,
    timestamps: false
  })
module.exports = FinishedWorks;
