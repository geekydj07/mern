const url="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact")
const para=document.getElementById("para")
let promise=fetch(url)

.then(data=>data.json()).then
(data=>{
    console.log(data);
para.innerHTML=data[0].text;
fact1.innerHTML=data[1].text;
fact2.innerHTML=data[2].text;
fact3.innerHTML=data[3].text;

})
const getfact=async()=>{
    console.log("getting data.....")
    let response=await fetch(url);
    console.log(response);
    let data= await response.json();
    console.log(data);
};                
