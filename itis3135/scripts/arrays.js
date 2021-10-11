var personArray = ['Bob Moore', 'Jessica White', 'Nathan Williams'];
var salaryArray = [50800, 62000, 70000];

function displayResults()   
{   
	var max = Math.max.apply(null, salaryArray);

	var totalAmount = 0;

	for(var i = 0; i < salaryArray.length; i++){
		totalAmount = totalAmount + salaryArray[i];
	}

	var average = totalAmount / salaryArray.length;
	
	document.getElementById("results_highest").innerHTML = "Max: $" + max;
	document.getElementById("results_average").innerHTML = "Average: $" + average;
} 

function populateSelectMenu(){

	var box = document.getElementById("select_person");
	box.options.length = 0;

	for(var i =0; i < personArray.length; i++){
		var name = personArray[i] + " $" + salaryArray[i];
		var newSelection = document.createElement("option");
		newSelection.textContent = name;
		newSelection.value = name;
		box.appendChild(newSelection);
	}
}

function displaySalary()
{
	var table = document.getElementById("results_table").getElementsByTagName('tbody')[0];

	while(table.rows.length > 0){
		table.deleteRow(0);
	}	

	for(var i = 0; i < salaryArray.length; i++){

		var myRow = table.insertRow();

		var myCell = myRow.insertCell(0);
		var myText = document.createTextNode(personArray[i]);
		myCell.appendChild(myText);


		var salaryCell = myRow.insertCell(1);
		var salaryText = document.createTextNode("$" + salaryArray[i]);
		salaryCell.appendChild(salaryText);
	}
}

function addSalary()
{

	nameBox = document.getElementById('name').value;
	salaryBox = document.getElementById('salary').value;
	if(!nameBox.length == 0){
		if(!salaryBox.length == 0){
			personArray.push(nameBox);
			salaryArray.push(salaryBox);
			populateSelectMenu();
		} else{
			alert("Enter a salary");
		}
	} else{
		alert("Enter a name");
	}
	return false;
}
