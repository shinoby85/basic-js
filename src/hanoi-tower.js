const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let obj={}
  obj.turns=findStep(disksNumber)
  let turnSec=turnsSpeed/3600
  obj.seconds=Math.floor(obj.turns/turnSec)
  return obj
};
function findStep(num) {
  if(num===1)return num;
  return findStep(num-1)*2+1;
}