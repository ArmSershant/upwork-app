const Sequelize = require('sequelize');
const HiredFreelancers = (sequelize) => sequelize.define('hiredfreelancers', {
  freelancerId: {
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
  }
)
module.exports = HiredFreelancers
