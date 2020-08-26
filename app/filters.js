'use strict'

const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const directoryPath = path.join(__dirname, './data/')
const criteria = yaml.safeLoad(fs.readFileSync(directoryPath + 'criteria.yaml', 'utf8'))
const groups = yaml.safeLoad(fs.readFileSync(directoryPath + 'groups.yaml', 'utf8'))

module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  const filters = {}

  /* ------------------------------------------------------------------
    utility function to get an error for a component
    example: {{ errors | getErrorMessage('title') }}
    outputs: "Enter a title"
  ------------------------------------------------------------------ */
  filters.getErrorMessage = function (array, fieldName) {
    if (!array || !fieldName) {
      return null
    }

    const error = array.filter((obj) =>
      obj.fieldName === fieldName
    )[0]

    return error
  }

  /* ------------------------------------------------------------------
    utility function to parse question options as items understood
    by design system macro
    example: {{ array | optionsToItems }}
    input: [{label: "Something", value: "something"}]
    output: [{text: "Something", value: "something"}]
  ------------------------------------------------------------------ */
  filters.optionsToItems = function (options) {
    if (!options) {
      return null
    }

    const items = []

    options.forEach((option) => {
      const item = {}
      item.text = option.label
      item.value = option.value
      item.checked = option.checked
      item.hint = {}
      item.hint.text = option.hint
      items.push(item)
    })

    return items
  }

  filters.removeItem = function (options, optionValue) {
    if (!optionValue) {
      return null
    }

    const items = options.filter((obj) =>
      obj.value !== optionValue
    )

    return items
  }

  /* ------------------------------------------------------------------
    utility function to parse group heading
    example: {{ 'living-eu' | getGroupHeading }}
    output: 'Living in the EU'
  ------------------------------------------------------------------ */
  filters.getGroupHeading = function (group) {
    let result = []
    result = groups.groups.filter(obj => obj.key === group)
    return result[0].heading
  }

  /* ------------------------------------------------------------------
    utility function to parse criterion text
    example: {{ 'nationality-uk' | getCriterionText }}
    output: 'You are a British national'
  ------------------------------------------------------------------ */
  filters.getCriterionText = function (criterion) {
    let result = []
    result = criteria.criteria.filter(obj => obj.key === criterion)
    return result[0].text
  }

  /* ------------------------------------------------------------------
    utility function to parse answers into a signup URL
    example: {{ answers | parseSignupUrl }}
    output: 'c%5B%5D=nationality-uk&c%5B%5D=living-eu&c%5B%5D=working-uk&
    c%5B%5D=working-eu&c%5B%5D=studying-uk&c%5B%5D=studying-eu&
    c%5B%5D=living-driving-eu&c%5B%5D=visiting-uk&c%5B%5D=visiting-ie&
    c%5B%5D=visiting-eu&c%5B%5D=visiting-row&c%5B%5D=return-to-uk&
    c%5B%5D=does-not-own-operate-business-organisation'
  ------------------------------------------------------------------ */
  filters.parseSignupUrl = function (answers) {
    if (!Array.isArray(answers)) {
      return null
    }

    let queryString = ''

    answers.forEach((answer, i) => {
      queryString += 'c%5B%5D=' + answer
      if (i < (answers.length - 1)) {
        queryString += '&'
      }
    })

    return queryString
  }

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
