//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function checkGradeOver70(score) {
  // Start coding here
  return score>70? true:false;
}

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for(let i=0; i<array.length; i++){
   if(operation(array[i]) === true){
    count++;
   }
  }
  return count >=5 ?true:false;
}

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1,checkGradeOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2,checkGradeOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3,checkGradeOver70);

console.log(scoreRoom1Result); //true
console.log(scoreRoom2Result); //false
console.log(scoreRoom3Result); //false

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
Ans.checkGradeOver70 เพราะเป็นfunctionที่ถูกเรียกใช้และเป็นargumentของfunctionอื่น

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
Ans.atLeastFive เพราะเป็นfunctionที่เรียกใช้และมีparameterเป็นfunctionอื่น
====================================
*/
