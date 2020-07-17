'use strict'

const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const directoryPath = path.join(__dirname, '../data/')
const data = yaml.safeLoad(fs.readFileSync(directoryPath + 'criteria.yaml', 'utf8'))

exports.find = function () {
  return data.criteria
}

exports.findCriteriaByAudience = (audience) => {
  const criteria = data.criteria.filter(obj => obj.audience === audience)
  return criteria
}
