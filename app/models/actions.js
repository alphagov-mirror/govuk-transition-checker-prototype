'use strict'

const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const directoryPath = path.join(__dirname, '../data/')
const data = yaml.safeLoad(fs.readFileSync(directoryPath + 'actions.yaml', 'utf8'))

exports.find = function () {
  return data.actions
}

exports.findActionById = function (actionId) {
  const action = data.actions.filter(obj => obj.id === actionId)
  return action[0]
}
