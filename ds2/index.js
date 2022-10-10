
let spanHours = document.querySelector("#hours");
let spanMinutes = document.querySelector("#minutes");
let spanSeconds = document.querySelector("#secounds");
let clock = document.querySelector("#clock");
let bnt = document.querySelector("#btn");
const generate = () =>{
let currencolor="#";

let maxlenght = 4;
let random = Math.floor(Math.random*9+1);
for(var i=0;i<maxlenght;i++){
currencolor += random;
console.log(currencolor);
}
return;
}
const start = () => {
    setInterval(() => {
        const dzien = new Date();
        let godzina = dzien.getHours();
        let minuta = dzien.getMinutes();
        let sekunda = dzien.getSeconds();
        spanSeconds.style.transform = `rotate(${(360/60) * sekunda}deg)`;
        spanSeconds.style.BackgroundColor = ``
        spanMinutes.style.transform = `rotate(${(360/60) * minuta}deg)`; 
        spanHours.style.transform = `rotate(${(360/12) * godzina}deg)`;
    godzina == 12 && minuta == 60 && sekunda == 60 ? clock.style.BackgroundColor = "Blue" : start()
    }, 1000)
}

$(document).ready(function(){
    $(bnt).click(function(){
      $("div").animate({
        height: 'toggle'
      });
      $(bnt).toggle.css("display","none");
    });
  });
start()