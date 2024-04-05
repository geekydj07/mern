const msg=()=>console.log("arrow function");
let data=[10,20,30,"name",50,60,msg()];
console.log(data);

// for(let i=0;i<data.length;i++){
//     console.log(`value of ${(i)} is ${data[i]}`);
// }
// for(let index in data){
//     console.log(`value of ${(index)} is ${data[index]}`)
// }
// for(let value of  data){
//     console.log(`value of array=${(value)}`)
// }

data.forEach(value=>console.log(`value of array=${(value)}`));