const array = [
  { name: 'John Doe #1', age: 12 },
  { name: 'John Doe ', age: 43 },
  { name: 'John ', age: 53 }
]

/**
 * Method that returns a string
 * with the values of the object
 * keys in the list to be placed
 * at CSV header
 *
 * @param {Array<object>} array
 *
 * @returns {string} The header of
 * CSV file that contains all keys
 * as columns values of the array
 */
const headerCSV = array =>
  `${Object.keys(array[0]).join(',')};`

/**
 * Method that rearrange the given
 * array as parameter to be placed
 * into the CSV file
 *
 * @param {Array<object>} array
 *
 * @returns {string} The CSV content
 * formated to be corrected placed as
 * file content
 */
const contentCSV = array => array
  .map(el => Object.values(el)
    .map(el => typeof el === 'string'
      ? el.trim().split(' ').length > 1
        ? `"${el.trim()};"`
        : el.trim() + ';'
      : el + ';'
    )).join('\n')

/**
 * Given the CSV content already
 * corrected formatted, encode and
 * append info to proceed with the
 * process
 *
 * @param {string} csv
 *
 * @returns The CSV content encoded
 * and appended with the needed info
 * to be properly readed
 */
const configAndEncode = csv =>
  `data:text/csv;charset=utf-8, %EF%BB%BF ${encodeURI(csv)}`

/**
 * Given the array as parameter,
 * format the values into it. If
 * the header parameter it's
 * informed, append to the string
 * a header row with the object
 * keys name. At the end, return
 * the data  encoded and formatted
 * as CSV, ready to be readed as well
 * as such
 *
 * @param {Array<object>} array
 * @param {boolean} [header=false] header
 *
 * @returns The CSV content formatted,
 * encoded and append correctly to be
 * used and placed into a file
 */
const parseToCSV = (array, header = false) => header
  ? configAndEncode(`${headerCSV(array)}\n${contentCSV(array)}`)
  : configAndEncode(contentCSV(array))

console.log(headerCSV(array))
console.log(contentCSV(array))
console.log(parseToCSV(array, true))
