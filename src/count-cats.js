const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  //throw new CustomError('Not implemented');
  return backyard.reduce((res,itemStr)=>{
      return res+=itemStr.reduce((pos,item)=>item==='^^'?++pos:pos,0)
  },0)
};
