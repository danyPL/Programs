let milsec=0;
let sec=0;
let minutes=0;
let stopeer = document.querySelector("#stoper");
let timer1;
const timer = () => {
        milsec++;
        if(milsec < 10) milsec = "0"+milsec;
        if(milsec == 99){
            sec++;
            milsec = 0;
            if(sec < 10){
            sec = "0"+sec;
        }
        }
        stopeer.innerHTML = sec + ":" + milsec;
        timer1 = setTimeout('timer()', 10);  
    }
const stop = () =>{
    clearTimeout(timer1);
}
const reset = () =>{
    clearTimeout(timer1);
    milsec = 0;
    sec = 0;
    stopeer.innerHTML = `0${sec}:${milsec}0`
}