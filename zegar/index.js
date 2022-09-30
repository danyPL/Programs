

let spanHours = document.querySelector("#hours");
let spanMinutes = document.querySelector("#minutes");
let spanSeconds = document.querySelector("#secounds");
let clock = document.querySelector("#clock");
let bnt = document.querySelector("#btn");

const start = () => {
    setInterval(() => {
        const dzien = new Date();
        let godzina = dzien.getHours();
        let minuta = dzien.getMinutes();
        let sekunda = dzien.getSeconds();
        spanSeconds.style.transform = `rotate(${(360/60) * sekunda}deg)`;
        spanMinutes.style.transform = `rotate(${(360/60) * minuta}deg)`; 
        spanHours.style.transform = `rotate(${(360/12) * godzina}deg)`; 
       
        if(godzina == 12 || minuta == 60 || sekunda == 60) { clock.style.backgroundColor = "RoyalBlue"; }
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

