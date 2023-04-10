const { Users, HiredFreelancers } = require('../util/database')
const Sequelize = require('sequelize');
class FreelancerController {
  async showAllFreelancers(req, res) {
    let freelancers = await Users.findAll({ where: { roleId: 1 } })
    res.send({ freelancers })
  }
  async hireFreelancer(req, res) {
    let hiredfreelancer = await HiredFreelancers.create({
      clientId: req.body.clientId,
      freelancerId: req.body.freelancerId
    })
    res.send(hiredfreelancer)
  }

  // Freelancer to the profile page of the client
  async getHiredFreelancer(req, res) {
    const hiredFreelancers = await HiredFreelancers.findAll({
      where: {
        clientId: req.user.id
      },
      include: { all: true, nested: true }
    });
    res.send(hiredFreelancers)
  }

  // search freelancers by their salary
  async searchBySalary(req, res) {
    const freelancers = await Users.findAll({
      where: {
        salary: {
          [Sequelize.Op.lte]: req.body.salaryRange
        }
      },
    })
    res.send({ freelancers })
  }

  // filter freelancers by their salary
  async filterBySalary(req, res) {
    const ascending = req.body.ascending;
    const condition = ascending ? 'salary' : 'salary';
    const freelancers = await Users.findAll({
      where: { roleId: 1 },
      order: [[condition, ascending ? 'DESC' : 'ASC']]
    })
    res.send({ freelancers })
  }

}
module.exports = new FreelancerController()
