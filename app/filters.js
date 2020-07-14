'use strict'

module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  let filters = {}

  /* ------------------------------------------------------------------
    utility function to get an error for a component
    example: {{ errors | getErrorMessage('title') }}
    outputs: "Enter a title"
  ------------------------------------------------------------------ */
  filters.getErrorMessage = function (array, fieldName) {
    if (!array || !fieldName) {
      return null
    }

    const error = array.filter( (obj) =>
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
      items.push(item)
    })

    return items
  }

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
