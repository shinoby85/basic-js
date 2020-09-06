const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(members)) return false
    return members.map(item=>typeof (item)==="string"?item.trim()[0].toUpperCase():'').sort().join('')

};
