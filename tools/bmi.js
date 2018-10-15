function calculateBMI() {

	//input variables
	var weight = document.getElementById('weight').value;
	var height = document.getElementById('height').value;
	var male = document.getElementById('male').checked;
	var female = document.getElementById('female').checked;

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

	//calculate BMI
	var heightInput = height/100;
	var thisBMI = Math.round(weight/Math.pow(heightInput, 2));

	//link bmiOutput to html
	document.getElementById("bmiOutput").innerText = Math.round(thisBMI);

	//interpret BMI number
	var interpretation = "";

	//IDEA: Eventually add links to other parts of our website via the interpretation
	if (female == true) {
		if (thisBMI < 18.99) {
			interpretation = "You are considered underweight. This may put you at risk of health issues and you should seek further professional information on whether you should increase you weight to within the healthy range."
		}
		else if (thisBMI >= 19 && thisBMI <= 24.99) {
			interpretation = "You are considered in the healthy weight range. The healthy range represents the lowest level of risk for heart disease and diabetes. To stay in the healthy range, you should focus on including more vegetables and whole grains in your diet and staying active regularly."
		}
		else if (thisBMI >= 25 && thisBMI <= 29.99) {
			interpretation = "You are considered overweight. This means you may have an increased risk of health problems such as heart disease and diabetes. The good news is you may be able to reduce this risk through healthier eating and regular physical activity."
		}
		else if (thisBMI >= 30 && thisBMI <= 39.99) {
			interpretation = "You are considered obese. This BMI range means you considered to have increased risk of heart disease and diabetes. However, just by losing 5% - 10% of your current weight, you may be able to reduce your risk of some of these conditions. A combination of healthy eating, an active lifestyle and professional support can help you reach those goals."
		}
		else if (thisBMI >= 40) {
			interpretation = "You are considered morbidly obese. This BMI range means you are at an even higher risk level for various health problems. We suggest you seek professional help to identify your best avenues at reducing these risks."
		}
		else {
			interpretation = "Please input appropriate numbers for height and weight."
		}
	}
	else {
		if (thisBMI < 19.99) {
			interpretation = "You are considered underweight. This may put you at risk of health issues and you should seek further professional information on whether you should increase you weight to within the healthy range."
		}
		else if (thisBMI >= 20 && thisBMI <= 24.99) {
			interpretation = "You are considered in the healthy weight range. The healthy range represents the lowest level of risk for heart disease and diabetes. To stay in the healthy range, you should focus on including more vegetables and whole grains in your diet and staying active regularly."
		}
		else if (thisBMI >= 25 && thisBMI <= 29.99) {
			interpretation = "You are considered overweight. This means you may have an increased risk of health problems such as heart disease and diabetes. The good news is you may be able to reduce this risk through healthier eating and regular physical activity."
		}
		else if (thisBMI >= 30 && thisBMI <= 39.99) {
			interpretation = "You are considered obese. This BMI range means you considered to have increased risk of heart disease and diabetes. However, just by losing 5% - 10% of your current weight, you may be able to reduce your risk of some of these conditions. A combination of healthy eating, an active lifestyle and professional support can help you reach those goals."
		}
		else if (thisBMI >= 40) {
			interpretation = "You are considered morbidly obese. This BMI range means you are at an even higher risk level for various health problems. We suggest you seek professional help to identify your best avenues at reducing these risks."
		}
		else {
			interpretation = "Please input appropriate numbers for height and weight."
		}
	}
	//link bmiComment to HTML
	document.getElementById("bmiComment").innerText = interpretation;

}

function Reset() {

	//reset values on HTML
	document.getElementById('weight').value = "";
	document.getElementById('height').value = "";
	document.getElementById('bmiOutput').innerText = "";
	document.getElementById("bmiComment").innerText = "";
	document.getElementById('male').checked = "";
	document.getElementById('female').checked = "";	
}

