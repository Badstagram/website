/**
 * Formats the date as DD-MM-YYYY.
 * @return {String} The formatted date.
 */

const getDate = function () {
    const date = new Date();
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear(); //Returns the formatted date.

};