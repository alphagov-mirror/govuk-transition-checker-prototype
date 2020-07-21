'use strict'

const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const directoryPath = path.join(__dirname, '../data/')
const groups = yaml.safeLoad(fs.readFileSync(directoryPath + 'groups.yaml', 'utf8'))

exports.find = () => {
  return groups.groups
}

exports.findById = (groupId) => {
  const group = this.find().filter(obj => obj.key === groupId)
  return group
}
