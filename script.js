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

function calculateGoodPercents() {
	let netIncome = parseInt(netIncomeBox.value).toFixed(2);
	console.log(netIncome);
	let idealHousing = netIncome * 0.25;
	let idealNAW = netIncome * 0.55;
	let idealSavings = netIncome * 0.2;

	idealHousingBox.innerHTML = idealHousing.toFixed(2);
	idealNAWBox.innerHTML = idealNAW.toFixed(2);
	idealSavingsBox.innerHTML = idealSavings.toFixed(2);
}

netIncomeBox.addEventListener("input", () => {
	calculateGoodPercents();
});
