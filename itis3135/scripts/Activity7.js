function validateEntry()   
{   
	var num = window.prompt("Jasper Dalmatian welcomes you! Please enter a number!");
	
	//validates number
	if(!isNaN(num) && num != "" && num < 11){
		//gets the absolute value of the number
		var finalNumber = Math.abs(num);
		
		//rounds the number to the nearest integer
		finalNumber = Math.round(finalNumber);
		
		//sets the text in html
		document.getElementById("polygons").innerHTML = "Entered number: " + finalNumber;
		var returnName = getShape(finalNumber);
		document.getElementById("shape").innerHTML = "The polygon is: " + returnName;
	} else{
		//recalls the function if the number is invalid
		validateEntry();
	}
} 

function keyPress(){
	const calculator = document.querySelector('.calculator')
	const keys = calculator.querySelector('.calc_keys')

	keys.addEventListener(‘click’, e => {
 		if (e.target.matches(‘button’)) {
   		
 		}
	})
}

function getShape(number){
	var shapeName;
	
	//finds the name of the polygon
	if(number == 1){
		shapeName = "Henagon";
	} else if(number == 2){
		shapeName = "Digon";
	} else if(number == 3){
		shapeName = "Trigon";
	} else if(number == 4){
		shapeName = "Tetragon";
	} else if(number == 5){
		shapeName = "Pentagon";
	} else if(number == 6){
		shapeName = "Hexagon";
	} else if(number == 7){
		shapeName = "Heptagon";
	} else if(number == 8){
		shapeName = "Octagon";
	} else if(number == 9){
		shapeName = "Enneagon";
	} else if(number == 10){
		shapeName = "Decagon";
	}
	return shapeName;
}