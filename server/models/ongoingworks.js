const Sequelize = require('sequelize');
const Ongoingworks = (sequelize) => sequelize.define('ongoingworks', {
  freelancerId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  workId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
},
  {
    freezeTableName: true,
    timestamps: false
  })
module.exports = Ongoingworks;