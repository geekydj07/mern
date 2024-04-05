let studentinfo={
    rollNo:12,
    name:"Dheeraj Jadaun",
    course:"MCA",
    College:"kiet",
    marks:[10,20,30],
    music:()=>console.log("play music"),
    play: function playfun(){console.log("play cricket")},
};
console.log(studentinfo.play);

let arrayvalue=[studentinfo,studentinfo,studentinfo,studentinfo];
arrayvalue.forEach(item=>console.log(item.name));