'use strict'

const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const directoryPath = path.join(__dirname, '../data/')
const data = yaml.safeLoad(fs.readFileSync(directoryPath + 'actions.yaml', 'utf8'))

exports.find = () => {
  return data.actions
}

exports.findActionById = (actionId) => {
  const action = data.actions.filter(obj => obj.id === actionId)
  return action[0]
}

exports.findActionsByAudience = (audience) => {
  const actions = data.actions.filter(obj => obj.audience === audience)
  // actions.sort((a,b) => a.grouping_criteria[0] - b.grouping_criteria[0])
  // sort((a,b) => a.priority - b.priority).
  return actions
}

exports.findActionsByAudienceGroupingCriteria = (audience, criteria) => {
  // console.log(audience);
  // console.log(criteria);
  let actions = this.findActionsByAudience(audience)
  // console.log('Audience', actions);
  // actions = actions.find(({grouping_criteria}) => grouping_criteria.includes(criteria) )
  actions = actions.filter(obj => obj.grouping_criteria.includes(criteria))
  // console.log('Criteria', actions);
  return actions
}
