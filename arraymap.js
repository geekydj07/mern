let value=[1,2,3,4,5,6,7,8,9,10];
value.push(11);
// console.log(value);
// value.map(item=>console.log(`value *10=${(item*10)}`));
// let sumValue=value.reduce((a,b)=>a+b);
// console.log(`sume of array is=${sumValue}`);
let evenNum=value.filter(item=>item%2===0);
console.log(evenNum);