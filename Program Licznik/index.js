

let liczba=0;
function ustaw(typ){
document.getElementById("Licznik").innerHTML = liczba;

if(typ == 1){
liczba -=1;	
document.getElementById("Licznik").innerHTML = liczba;
}
else if(typ == 2){
	liczba+=1;
	document.getElementById("Licznik").innerHTML = liczba;	
}
else if(typ == 3){
	liczba=0;
	document.getElementById("Licznik").innerHTML = liczba;
	
}

}
