const CustomError = require("../extensions/custom-error");

const chainMaker = {
  dataStr:[],
  getLength() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.dataStr.length
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.dataStr.push(value)
    return this
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!Number.isInteger(position)){
      this.dataStr=[]
      throw Error ('Position is not a number')
    }
    if(position<1 || position>this.dataStr.length) {
      this.dataStr=[]
      throw Error('Parameter out of range')
    }
    this.dataStr.splice(position-1,1)
    return this
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.dataStr.reverse()
    return this
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let result
    this.dataStr.forEach((item,index)=>index===0?result=`( ${item} )`:result+=`~~( ${item} )`)
    this.dataStr=[]
    return result
  }
};

module.exports = chainMaker;
