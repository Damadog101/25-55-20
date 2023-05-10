let netIncomeBox = document.getElementById("netIncome");
let idealHousingBox = document.getElementById("idealHousing");
let idealNAWBox = document.getElementById("idealNAW");
let idealSavingsBox = document.getElementById("idealSaving");
let idealDebtBox = document.getElementById("idealDebt");

let actualHousingBox = document.getElementById("actualHousing");
let actualNAWBox = document.getElementById("actualNAW");
let actualSavingsBox = document.getElementById("actualSaving");
let actualDebtBox = document.getElementById("actualDebt");

let actualHousingPercentBox = document.getElementById("actualHousingPercent");
let actualNAWPercentBox = document.getElementById("actualNAWPercent");
let actualSavingsPercentBox = document.getElementById("actualSavingPercent");
let actualDebtPercentBox = document.getElementById("actualDebtPercent");

let housingSpent = document.getElementById("housingValue");
let NAWSpent = document.querySelectorAll(".NAWValue");
let savingsSpent = document.querySelectorAll(".savingsValue");
let debtSpent = document.querySelectorAll(".debtValue");

let NAWSpentValue = 0;
let savingsSpentValue = 0;
let debtSpentValue = 0;

let button = document.getElementById("calcButton");

function calculateGoodPercents() {
	let netIncome = parseInt(netIncomeBox.value).toFixed(2);
	console.log(netIncome);
	let idealHousing = netIncome * 0.25;
	let idealNAW = netIncome * 0.55;
	let idealSavings = netIncome * 0.2;

	idealHousingBox.innerHTML = idealHousing.toFixed(2);
	idealNAWBox.innerHTML = idealNAW.toFixed(2);
	idealSavingsBox.innerHTML = idealSavings.toFixed(2);
	idealDebtBox.innerHTML = "0.00";
}

function getValue(e) {
	console.log(e);
	let value = parseInt(e.value);
	return value;
}

netIncomeBox.addEventListener("input", () => {
	calculateGoodPercents();
});

button.addEventListener("click", () => {
	for (item in savingsSpent) {
		let value = parseInt(item.value);
		savingsSpentValue += value;
		actualSavingsBox.innerHTML = savingsSpentValue.toFixed(2);
	}
	for (item in debtSpent) {
		let value = parseInt(item.value);
		debtSpentValue += value;
		actualDebtBox.innerHTML = debtSpentValue.toFixed(2);
	}
	for (item in NAWSpent) {
		console.log(item);
		let value = parseInt(item.value);
		NAWSpentValue += value;

		actualNAWBox.innerHTML = NAWSpentValue.toFixed(2);
	}
	actualHousingBox.innerHTML = parseInt(housingSpent.value).toFixed(2);

	// housingSpentValue += housingSpent.forEach(getValue());
	// NAWSpentValue += NAWSpent.forEach(getValue());
	// debtSpentValue += debtSpent.forEach(getValue());
});
