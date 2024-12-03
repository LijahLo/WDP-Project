console.log("Good morning!");
console.log("Favorite #");
console.log(7); 
let findSum = (i1,i2,i3) => i1 + i2 + i3; 

function findAverage(i1,i2,i3){
    let sum = findSum(i1,i2,i3) 
    return sum /3;
} 

let findAverage = (i1,i2,i3) => findSum(i1,i2,i3)/3; 
