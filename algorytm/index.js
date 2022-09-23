const eps = 0.000001;
function pierwiastek(P, eps){
    P = prompt("Podaj liczbę z której chcesz wyznaczyć pierwiastek");
    var a = 1, b = P;
    while(Math.abs(a-b)>=eps){
        a = (a+b)/2;
        b = P/a;
    }
    const sum  = `${(a + b) /2}`
    return console.log(sum.slice(0, 6));
}


function wypisz(){
    let pole1 = document.querySelector("#pole1").value;
    let pole2 = document.querySelector("#pole2").value;
    let text = " ";
    for(i=pole1;i<=pole2;i++){
        text = text + i + " ";
    }
        document.querySelector("#wynik").innerHTML = text + " ";

}
