
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername (str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL (url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail (email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString (str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray (arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

export function validPhone (phone) {
  const reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
  return reg.test(phone)
}

//  校验手机或者固话
export function validatePhoneTwo (rule, value, callback) {
  const reg = /^(0\d{2,3}-\d{7,8}(\-[0-9]{1,4)?)|(1[34578]\d{9})$/
  if (value === '' || value === undefined || value === null) {
    callback()
  } else {
    if (!reg.test(value) && value !== '') {
      callback(new Error('请输入正确的电话号码：区号-号码'))
    } else {
      callback()
    }
  }
}

//  校验价格（大于等于0，保留两位小数）
export function validPrice (rule, value, callback) {
  const flag = /^\d*(\.\d{1,2})?$/.test(value)
  const isNn = parseFloat(value)
  if ((isNn !== 0 && !isNn) || !flag) {
    callback('请填写大于等于0的数字，且最多两位小数')
  } else {
    callback()
  }
}

//  校验非负整数（0+)
export function validIntZero (rule, value, callback) {
  const flag = /^\d*$/.test(value)
  const isNn = parseFloat(value)
  if ((isNn !== 0 && !isNn) || !flag) {
    callback('请填写大于等于0的整数')
  } else {
    callback()
  }
}

//  校验大于0整数（1+)
export function validIntOne (rule, value, callback) {
  const flag = /^[1-9]\d*$/.test(value)
  const isNn = parseFloat(value)
  if ((isNn !== 0 && !isNn) || !flag) {
    callback('请填写大于0的整数')
  } else {
    callback()
  }
}

//  校验价格（大于等于0，保留一位小数）
export function validPriceO (rule, value, callback) {
  const flag = /^\d*(\.\d{1})?$/.test(value)
  const isNn = parseFloat(value)
  if ((isNn !== 0 && !isNn) || !flag) {
    callback('请填写大于等于0的数字，且最多1位小数')
  } else {
    callback()
  }
}
