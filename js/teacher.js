//import {Parent} from './parent.js';
const Parent=require('./parent.js');
  class Teacher extends Parent{
     constructor(name,roll){
         super(name);
         console.log(roll);
     }
 }
 module.exports=Teacher;