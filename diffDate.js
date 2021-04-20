const moment = require('moment')

const DATE_IN_INTERVAL = moment()
  .subtract(7, 'minutes')
const DATE_OUT_INTERVAL = moment()
  .subtract(32, 'minutes')

/**
 * Function that compares two dates,
 * the given as parameter, and
 * the current one with the metrics
 * at options.
 *
 * @param {string} dateA
 * @param {object} [options={qty:10,unit:'minutes'}] options
 *
 * @returns {Boolean} If the dateA it's less
 * than the current based at the options,
 * return true, if not returns false
 */
 export const alarmLT = (
  dateA,
  options = {
    qty: 10,
    unit: 'minutes'
}) =>
  moment(dateA)
    .isSameOrAfter(moment().subtract(options.qty, options.unit))

console.log(alarmLT(DATE_IN_INTERVAL)) // This will be printed as True
console.log(alarmLT(DATE_OUT_INTERVAL)) // This will be printed as False
