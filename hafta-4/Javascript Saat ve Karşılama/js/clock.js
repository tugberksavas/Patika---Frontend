let fullName = prompt("Adınız: ");
let myName = document.querySelector('#myName');
myName.innerHTML= fullName;


function showTime() {
  const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
   let date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   let day = weekday[date.getDay()];
   let myClock = document.querySelector('#myClock');
   myClock.innerHTML=`${hours}:${minutes}:${seconds} ${day}`;
} 

setInterval(showTime, 1000);