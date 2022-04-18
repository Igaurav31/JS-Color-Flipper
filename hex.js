const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color"); //querySelector is use to select class elements whereas by second method we targed element with id
const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
let hexclr = "#";
for(let i=0; i<6;i++){
    hexclr += hex[getRandomNumber()]; 
}   
color.textContent= hexclr;
document.body.style.backgroundColor= hexclr;

});
function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}
