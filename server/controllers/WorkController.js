const { Users, Works, Ongoingworks, FinishedWorks, Requiringworks } = require('../util/database')
const { Op } = require('sequelize')
class WorkController {
  // post
  async postedWork(req, res) {
    let user = await Users.findOne({ where: { id: req.body.clientId } })
    let newWork = Works.create({
      title: req.body.title,
      description: req.body.description,
      budget: req.body.budget,
      category: req.body.category,
      clientId: user.id,
      status: '0'
    })
    res.send(newWork)
  }
  // show all
  async showAllWorks(req, res) {
    let works = await Works.findAll({
      where: {
        status: {
          [Op.notIn]: ["2", "3", "4"]
        }
      }
    })
    res.send({ works })
  }
  // One Work
  async singleWork(req, res) {
    let work = await Works.findOne({ where: { id: req.params.id }, include: { all: true, nested: true } })
    res.send({ work })
  }
  // delete
  async deleteWork(req, res) {
    let id = req.params.id
    let dw = await Works.destroy({ where: { id: id } })
  }
  // require
  async require(req, res) {
    // status 1
    let work = await Works.findOne({
      where: {
        id: req.body.workId,
      }
    })
    work.status = '1'
    await work.save()
    let requiringWork = await Requiringworks.create({
      workId: req.body.workId,
      freelancerId: req.body.freelancerId,
      clientId: req.body.clientId
    })
    res.send(requiringWork)
  }
  async requiredWorks(req, res) {
    let requiringWork = await Requiringworks.findAll({
      where: {
        clientId: req.user.id,
      },
      include: { all: true, nested: true }
    })
    res.send({ requiringWork })
  }
  // apply
  async apply(req, res) {
    // status 2
    let work = await Works.findOne({
      where: {
        id: req.body.workId,
      }
    })
    work.status = '2'
    await work.save()
    let appliedWork = await Ongoingworks.create({
      workId: req.body.workId,
      freelancerId: req.body.freelancerId,
    })
    res.send(appliedWork)
  }
  async appliedWorks(req, res) {
    let ongoingWork = await Ongoingworks.findAll({
      where: {
        freelancerId: req.user.id,
      },
      include: { all: true, nested: true }
    })
    res.send(ongoingWork)
  }
  // finish
  async finishWork(req, res) {
    // status 3
    console.log(req.body)
    let work = await Works.findOne({ where: { id: req.body.workId } })
    work.status = '3'
    await work.save()
    let finishedWork = await FinishedWorks.create({
      workId: req.body.workId,
      freelancerId: req.body.freelancerId,
      clientId: req.body.clientId
    })
    res.send(finishedWork)
  }

  async rateFinishedWork(req, res) {
    let work = await Works.findOne({ where: { id: req.body.workId } })
    work.status = '4'
    await work.save()
    let finishedWork = await FinishedWorks.findOne({
      where: { workId: req.body.workId }
    })
    finishedWork.clientId = req.body.clientId
    finishedWork.rating = req.body.rating
    finishedWork.review = req.body.review
    await finishedWork.save()
    res.send(finishedWork)
  }

  async finishedWorks(req, res) {
    let finishedWork = await FinishedWorks.findAll({
      where: {
        [Op.or]: [
          { clientId: req.user.id },
          { freelancerId: req.user.id }]
      },
      include: { all: true, nested: true }
    })
    res.send(finishedWork)
  }
}
module.exports = new WorkController()
