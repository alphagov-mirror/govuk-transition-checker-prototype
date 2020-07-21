'use strict'

const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const groups = require('./groups');

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
  // sort((a,b) => a.priority - b.priority).
  return actions
}

exports.findActionsByAudienceAndGroup = (audience, group) => {
  let actions = this.findActionsByAudience(audience)
  actions = actions.filter(obj => obj.grouping_criteria.includes(group))
  return actions
}

// -----------------------------------------------------------------------------
// Action groups
// -----------------------------------------------------------------------------

// Business does not have grouping criteria
// exports.findActionsByGroup = (group) => {
//   let actions = []
//   actions = this.find().filter(obj => obj.grouping_criteria.includes(group))
//   return actions
// }

// exports.findGroupActions = () => {
//   const actions = {}
//
//   groups.find().forEach((group) => {
//     actions[group.key] = this.findActionsByAudienceAndGroup('citizen', group.key)
//   })
//
//   return actions
// }

// exports.findActionsByAnswers = (answers, rules) => {
//
// }

// exports.findGroupActionsByAnswers = (answers, rules) => {
//   const actions = {}
//
//   console.log('Rules', rules);
//
//   groups.find().forEach((group) => {
//
//     if (answers.indexOf(group.key) !== -1) {
//       actions[group.key] = this.findActionsByAudienceAndGroup('citizen', group.key)
//     }
//
//   })
//
//   return actions
// }

exports.findCitizenActionsByAnswers = (answers, rules) => {
  const actions = []
  const results = {}

  this.find().forEach((action) => {
    if (rules.indexOf(action.id) !== -1) {
      actions.push(action)
    }
  })

  groups.find().forEach((group) => {
    results[group.key] = actions.filter(obj => obj.audience === 'citizen' && obj.grouping_criteria.includes(group.key))
  })

  return results
}
