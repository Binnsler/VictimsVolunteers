//Asking for the number of victims

var userVictims = prompt("How many disaster victims would you like to submit? Please enter a number, ex. 3, 6, 9.");

confirm("Ok, you will be prompted to enter info for each victim. It'll be a bit redundant, so just be prepared with each victim's name, phone number, and street. ")

victimArray = [];

for(var i = 0; i < userVictims; i++){
	var victimObject = {};
	victimObject.victimName = prompt("What is the victim's name?");
	victimObject.victimPhone = prompt("What is the victim's phone number?");
	victimObject.victimStreet = prompt("What is the victim's street?");
	victimArray.push(victimObject);
}

// Asking for the number of volunteers

var userVolunteers = prompt("How many disaster volunteers would you like to submit? Please enter a number, ex. 3, 6, 9.");

confirm("Ok, you will be prompted to enter info for each volunteer. It'll be a bit redundant, so just be prepared with each victim's name, phone number, and street. ")

volunteerArray = [];

for(var i = 0; i < userVolunteers; i++){
	var volunteerObject = {};
	volunteerObject.volunteerName = prompt("What is the volunteers's name?");
	volunteerObject.volunteerPhone = prompt("What is the volunteers's phone number?");
	volunteerObject.volunteerStreet = prompt("What is the volunteers's street?");
	volunteerArray.push(volunteerObject);
}

var alertDisplay = function(){
	var output = "";
	output+=("In total, we have " + userVictims + " victims:\n");
	for(var i = 0; i < userVictims; i++){
		for(var key in victimArray[i]){
			output +=  key + ": " + victimArray[i][key] + "\n";
		}
		output+= "\n";
	}
	output+=("Additionally, we have " + userVolunteers + " volunteers:\n");
	for(var i = 0; i < userVolunteers; i++){
		for(var key in volunteerArray[i]){
			output += key + ": " + volunteerArray[i][key] + "\n";
		}
		output+="\n";
	}
	return output;
}

alert(alertDisplay());

// alert("We've got a ton of people who need help and a ton of people willing to help.\nFirst of all, the victims:\nThere are " + userVictims + " victims.\nTheir info:\n" + victimArray[1] + victimArray[2]);