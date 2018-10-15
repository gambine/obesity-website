function calorieEstimator() {

	//input variables
	var weight = document.getElementById('weight').value;
	var height = document.getElementById('height').value;
	var male = document.getElementById('male').checked;
	var female = document.getElementById('female').checked;
	var age = document.getElementById('age').value;

	//activity level radio buttons
	var actLevelOne = document.getElementById('actLevelOne').checked;
	var actLevelTwo = document.getElementById('actLevelTwo').checked;
	var actLevelThree = document.getElementById('actLevelThree').checked;
	var actLevelFour = document.getElementById('actLevelFour').checked;
	var actLevelFive = document.getElementById('actLevelFive').checked;

	//check for valid inputs
	if ((male == false) && (female == false)) {
		alert("Please select your sex.")
		return;
	}
	if ((weight == "") || (weight < 0)) {
		alert("Please enter your weight to the nearest whole kgs.");
		return; 
	}
	if ((height == "") || (height < 0)) {
		alert("Please enter your height in centimetres.");
		return;
	}
	if (age < 0) {
		alert("Please enter a valid age");
		return;
	}
	if ((actLevelOne == false) && (actLevelTwo = false) && (actLevelThree = false) && (actLevelFour = false) && (actLevelFive = false)) {
		alert('Please select an Activity Level');
		return;
	}

	//activity level variables
	var actLevelOne = 1.2;
	var actLevelTwo = 1.375;
	var actLevelThree = 1.55;
	var actLevelFour = 1.725;
	var actLevelFive = 1.9;

	//calculate calorie intake estimate
	if (female == true) {
		var femaleBMR = Math.round((161) - (10 * weight) + (6.25 * height) - (5 * age))
			for (var i=0; i < document.calorieForm.actLevelGroup.length; i++) {
				if (document.calorieForm.actLevelGroup[i].checked) {
					var finalBMR = Math.round((maleBMR || femaleBMR) * document.calorieForm.actLevelGroup[i].value);
					document.getElementById("calOutput").innerText = Math.round(finalBMR);
				}
			}
		return femaleBMR;
	}

	else {
		var maleBMR = Math.round((5) + (10 * weight) + (6.25 * height) - (5 * age))
			for (var i=0; i < document.calorieForm.actLevelGroup.length; i++) {
				if (document.calorieForm.actLevelGroup[i].checked) {
					var finalBMR = Math.round((maleBMR || femaleBMR) * document.calorieForm.actLevelGroup[i].value);
					document.getElementById("calOutput").innerText = Math.round(finalBMR);
				}
			}
		return maleBMR;
	}

	// link bmiOutput to html
	document.getElementById("calOutput").innerText = Math.round(finalBMR);

	// interpret BMR number
	var interpretation = "";

	
	// link calComment to HTML
	document.getElementById("calComment").innerText = interpretation;

}

function Reset() {

	//reset input values on HTML
	document.getElementById('weight').value = "";
	document.getElementById('height').value = "";
	document.getElementById('male').checked = "";
	document.getElementById('female').checked = "";	
	document.getElementById('age').value = "";
	document.getElementById('actLevelOne').checked = "";
	document.getElementById('actLevelTwo').checked = "";
	document.getElementById('actLevelThree').checked = "";
	document.getElementById('actLevelFour').checked = "";
	document.getElementById('actLevelFive').checked = "";
	document.getElementById('calOutput').innerText = "";
}
