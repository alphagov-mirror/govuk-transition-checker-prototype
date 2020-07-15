exports.flattenObject = (data) => {
  const r = []

  return Object.keys(data).reduce((toReturn, key) => {

    if (Object.prototype.toString.call(data[key]) === '[object Date]') {
      r.push(data[key].toString())
    }
    else if ((typeof data[key]) === 'object' && data[key]) {
      let flatObject = this.flattenObject(data[key]);
      Object.keys(flatObject).forEach((k2) => {
        r.push(flatObject[k2])
      })
    }
    else {
      r.push(data[key])
    }

    return r
  }, {})
}
