const Sequelize = require('sequelize');
const sequelize = new Sequelize('upwork_app_db', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost',
  password: 'password'
})
const Users = require('../models/users')(sequelize)
const Roles = require('../models/roles')(sequelize)
const Works = require('../models/works')(sequelize)
const Ongoingworks = require('../models/ongoingworks')(sequelize)
const FinishedWorks = require('../models/finishedworks')(sequelize)
const HiredFreelancers = require('../models/hiredfreelancers')(sequelize)
const Requiringworks = require('../models/requiringworks')(sequelize)

Users.belongsTo(Roles, { foreignKey: 'roleId' });
Roles.hasMany(Users, { foreignKey: 'roleId' });
Works.belongsTo(Users, { foreignKey: 'clientId' });
// Requiring Works
Users.hasMany(Requiringworks, { foreignKey: 'freelancerId', as: "freelancer" });
Users.hasMany(Requiringworks, { foreignKey: 'clientId', as: "client" });
Requiringworks.belongsTo(Users, { foreignKey: 'freelancerId', as: "freelancer" });
Requiringworks.belongsTo(Users, { foreignKey: 'clientId', as: "client" });
Requiringworks.belongsTo(Works, { foreignKey: 'workId' });
// Applied Works
Ongoingworks.belongsTo(Works, { foreignKey: 'workId' });
Ongoingworks.belongsTo(Users, { foreignKey: 'freelancerId' });
// Finished Works
FinishedWorks.belongsTo(Users, { foreignKey: 'freelancerId' });
FinishedWorks.belongsTo(Users, { foreignKey: 'clientId' });
FinishedWorks.belongsTo(Works, { foreignKey: 'workId' });
// Hired Freelancers
HiredFreelancers.belongsTo(Users, { foreignKey: 'freelancerId', as: "freelancer" });
HiredFreelancers.belongsTo(Users, { foreignKey: 'clientId', as: "client" })
sequelize.sync()
module.exports = { sequelize, Users, Roles, Works, Ongoingworks, FinishedWorks, HiredFreelancers, Requiringworks }
