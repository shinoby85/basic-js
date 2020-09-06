const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof sampleActivity!=="string" || Number(sampleActivity)>MODERN_ACTIVITY || Number(sampleActivity)<=0 || isNaN(Number(sampleActivity))){
    return false;
  }
  let k=0.693/HALF_LIFE_PERIOD
  let t=Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k
  return Math.ceil(t)

};
