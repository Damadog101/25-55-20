let netIncomeBox = document.getElementById("netIncome");
let spentBox = document.getElementById("moneySpent");

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

netIncomeBox.addEventListener("input", () => {
	calculateGoodPercents();
});

button.addEventListener("click", () => {
	[...savingsSpent].forEach((item) => {
		let value = parseInt(item.value);
		if (isNaN(value)) {
			return;
		} else {
			savingsSpentValue += value;
		}
		let parsedSavings = parseInt(savingsSpentValue).toFixed(2);
		actualSavingsBox.innerHTML = parsedSavings;
	});
	[...NAWSpent].forEach((item) => {
		let value = parseInt(item.value);
		if (isNaN(value)) {
			return;
		} else {
			NAWSpentValue += value;
		}
		let parsedNAW = parseInt(NAWSpentValue).toFixed(2);
		actualNAWBox.innerHTML = parsedNAW;
	});
	[...debtSpent].forEach((item) => {
		let value = parseInt(item.value);
		if (isNaN(value)) {
			return;
		} else {
			debtSpentValue += value;
		}
		let parsedDebt = parseInt(debtSpentValue).toFixed(2);

		actualDebtBox.innerHTML = parsedDebt;
	});

	let parsedHousing = parseInt(housingSpent.value).toFixed(2);
	if (isNaN(parsedHousing)) {
		return;
	} else {
		actualHousingBox.innerHTML = parsedHousing;
	}

	let totalSpent =
		parseInt(housingSpent.value) +
		parseInt(debtSpentValue) +
		parseInt(NAWSpentValue) +
		parseInt(savingsSpentValue);
	console.log(totalSpent);
	spentBox.innerHTML = totalSpent.toFixed(2);
});
