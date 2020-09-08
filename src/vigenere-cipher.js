const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alfa='abcdefghijklmnopqrstuvwxyz'
  constructor(option=true) {
    this.typeMachine=option
  }
  encrypt(message,key) {
    if (message===undefined || key===undefined){
      throw Error('No params')
    }
    message=message.toLowerCase()
    key=key.toLowerCase()
    let result=''
    key=this.normalizeKey(message,key)
    for (let i=0, j=0;i<message.length;i++){
      if (this.alfa.indexOf(message[i])!==-1) {
        let m_i = this.alfa.indexOf(message[i]) + 1
        let k_i = this.alfa.indexOf(key[j]) + 1
        let r_i = m_i + k_i - 1
        r_i = r_i > 26 ? r_i - 26 : r_i
        result += this.alfa[r_i - 1].toUpperCase()
        j++
      }
      else{
        result+=message[i]
      }
    }
    if (this.typeMachine) {
      return result
    }
    return result.split('').reverse().join('')

  }
  decrypt(message,key) {
    if (message===undefined || key===undefined){
      throw Error('No params')
    }
    /*if (!this.typeMachine){
      message=message.split('').reverse().join('')
    }*/
    message=message.toLowerCase()
    key=key.toLowerCase()
    let result=''
    key=this.normalizeKey(message,key)
    for (let i=0, j=0;i<message.length;i++) {
      if (this.alfa.indexOf(message[i]) !== -1) {
        let m_i = this.alfa.indexOf(message[i]) + 1
        let k_i = this.alfa.indexOf(key[j]) + 1
        let r_i = m_i - k_i + 1
        r_i = r_i < 1 ? r_i + 26 : r_i
        result += this.alfa[r_i - 1]
        j++
      } else {
        result += message[i]
      }
    }
    //return result.toUpperCase()



    //Данный код под вопросом
    if (this.typeMachine) {
      return result.toUpperCase()
    }
    return result.split('').reverse().join('').toUpperCase()


  }
  normalizeKey(message,key){
    let result=''
    let msgNum=message.split('').reduce((num,item)=>this.alfa.indexOf(item)!==-1?++num:num,0)
    if(msgNum>key.length){
      let num=msgNum-key.length
      let fullWord=Math.floor(num/key.length)+1
      for (let i=0;i<fullWord;i++){
        result+=key
      }
      fullWord=msgNum-result.length
      for (let i=0;i<fullWord;i++){
        result+=key[i]
      }
    }
    else if(msgNum<key.length){
      for (let i=0;i<msgNum;i++){
        result+=key[i]
      }
    }
    else {
      result=key
    }
    return result
  }


}

module.exports = VigenereCipheringMachine;
