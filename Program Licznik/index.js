let counter = document.querySelector("#Licznik");
let number=0;
	
function ustaw(typ){
	counter.innerHTML = number;
	switch(typ){
	case 1:
	number--;	
	counter.innerHTML = number;
		break;
		
	case 2:
	number++;
	counter.innerHTML = number;
		break;
		
	default:
	number=0;
	counter.innerHTML = number;
		break;
	}

}