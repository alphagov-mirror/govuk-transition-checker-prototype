'use strict'

const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const Groups = require('./groups')
const Helpers = require('./helpers')

const directoryPath = path.join(__dirname, '../data/')
const actions = yaml.safeLoad(fs.readFileSync(directoryPath + 'actions.yaml', 'utf8'))

exports.find = () => {
  return actions.actions
}

exports.findActionById = (actionId) => {
  const action = this.find().filter(obj => obj.id === actionId)
  return action[0]
}

exports.findActionsByAudience = (audience) => {
  const actions = this.find().filter(obj => obj.audience === audience)
  // actions.sort((a,b) => a.grouping_criteria[0] - b.grouping_criteria[0])
  actions.sort((a,b) => b.priority - a.priority)
  return actions
}

exports.findActionsByAudienceAndGroup = (audience, group) => {
  let actions = this.findActionsByAudience(audience)
  actions = actions.filter(obj => obj.grouping_criteria.includes(group))
  return actions
}

exports.findCitizenActionsByAnswers = (answers, rules) => {
  const actions = []
  const results = {}

  this.find().forEach((action) => {
    if (rules.indexOf(action.id) !== -1) {
      actions.push(action)
    }
  })

  actions.sort((a,b) => b.priority - a.priority)

  Groups.find().forEach((group) => {
    results[group.key] = actions.filter(obj => obj.audience === 'citizen' && obj.grouping_criteria.includes(group.key))
  })

  return results
}

exports.findCitizenActionGroupCriteria = (answers, rules) => {
  const actions = []
  const results = {}
  const criteria = {}

  this.find().forEach((action) => {
    if (rules.indexOf(action.id) !== -1) {
      actions.push(action)
    }
  })

  Groups.find().forEach((group) => {
    results[group.key] = actions.filter(obj => obj.audience === 'citizen' && obj.grouping_criteria.includes(group.key))
    criteria[group.key] = []
    results[group.key].forEach((item) => {
      const itemCriteria = Helpers.flattenObject(item.criteria)
      itemCriteria.forEach((criterion) => {
        if (answers.indexOf(criterion) !== -1 && criteria[group.key].indexOf(criterion) === -1) {
          criteria[group.key].push(criterion)
        }
      })
    })
  })

  return criteria
}
