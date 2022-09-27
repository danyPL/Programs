let szanse=0;
const Anwser = Number(Math.floor(Math.random()*10+1))
let label = document.querySelector("#wynik");
const losuj = () => {
    let liczba = document.querySelector("#liczba").value;
    szanse++;
    liczba == Anwser ? label.innerHTML = ` Gratuluje udało ci się zgadnąć po ${szanse} próbie wynik to ${Anwser}`
    : liczba < Anwser ? label.innerHTML = 'Za mala'
    : label.innerHTML = 'za duza';

}
    