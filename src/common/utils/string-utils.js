/**
 * Functions are being exported using module.exports, so we can use the methods in
 * node.js and ES6 client side.
 * */

/**
 * @description Capitalize the first letter in a string
 *
 * @export
 * @param {string} someString
 * @returns {string} Returns string with the first character capitalized
 */
function capitalizeFirstLetter(someString = '') {
  const stringCopy = [...someString].join('')

  return stringCopy.charAt(0).toUpperCase() + stringCopy.slice(1)
}

/**
 * @description Return undefined if passed string is empty, otherwise pass the string thru
 *
 * @export
 * @param {string} someString
 * @returns {(undefined|string)} undefined or string
 */
function coerceEmptyStringToUndefined(someString) {
  if (someString === '') {
    return undefined
  }

  return someString
}

const flattenMessages = (nestedMessages, prefix = '') => {
  if (nestedMessages === null) {
    return {}
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value })
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}

module.exports = {
  capitalizeFirstLetter,
  coerceEmptyStringToUndefined,
  flattenMessages,
}
