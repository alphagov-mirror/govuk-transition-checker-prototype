'use strict'

const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const directoryPath = path.join(__dirname, '../data/')
const criteria = yaml.safeLoad(fs.readFileSync(directoryPath + 'criteria.yaml', 'utf8'))

exports.find = function () {
  return criteria.criteria
}

exports.findCriteriaByAudience = (audience) => {
  const criteria = this.find().filter(obj => obj.audience === audience)
  return criteria
}
