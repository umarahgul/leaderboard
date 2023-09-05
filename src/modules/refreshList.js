import { scoreList } from "./socerList";

export const refresh =(obj) => {
// create an array object
const obj= {
    name:obj.name,
    score:obj.score
}
// update the array
 scoreList.push (obj);   
 
 // update display
 for(let x =0; x< scoreList.length; x+=1){
const UlObj= document.getElementById('scores');
const liObj=document.createElement('li');
liObj.textContent=scoreList[x].name + " : " + scoreList[x].score;
UlObj.appendChild(liObj);
 }
}