function NameAndMood()   
{   
	var name = window.prompt("Enter your name");
	var date = new Date();
	var month = date.getMonth().toString();
	var day = date.getDate();
	var hour = date.getHours().toString();
	var mins = date.getMinutes().toString();
	var mood = window.prompt("How are you doing?");
	document.getElementById("timeP").innerHTML = "Today is: " + month + "/" + day + " and the time is: " + hour + ":" + mins;
	document.getElementById("nameP").innerHTML = "Jasper Dalmatian welcomes you, " + name + "!";
	document.getElementById("moodP").innerHTML = "We're glad you are doing " + mood + "!";
}  