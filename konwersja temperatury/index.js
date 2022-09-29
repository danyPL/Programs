let text_box = document.querySelector("#text_box");
let celcius = document.querySelector("#celcius");
let fahrenheit = document.querySelector("#fahrenheit");
let label = document.querySelector("#templabel");
let temp;
const test = () => {
   if(celcius.checked){
        temp = text_box.value;
        temp = Number(temp)
        temp = toCelcius(temp)
        label.innerHTML = Math.round(temp) + "°C";
   }
   else if(fahrenheit.checked){
    temp = text_box.value;
    temp = Number(temp)
    temp = toFarenheit(temp)
    label.innerHTML = Math.round(temp) + '°F';
   }
   else{
    label.innerHTML = "Podaj temperature";
   }
}


const toCelcius = (temp) => {
    return (temp - 32) * (5/9);
}
const toFarenheit = (temp) => {
    return temp * 9 / 5 + 32; 
    }