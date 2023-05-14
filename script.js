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

// let housingButton = document.getElementById("housingButton");
let NAWButton = document.getElementById("NAWButton");
let savingsButton = document.getElementById("savingsButton");
let debtButton = document.getElementById("debtButton");

let NAWSpentValue = 0;
let savingsSpentValue = 0;
let debtSpentValue = 0;

let button = document.getElementById("calcButton");

let inputs = document.querySelectorAll(".inputs");
console.log(inputs);

//calculates how much spend if budget goes perfect
function calculateGoodPercents() {
	let netIncome = Math.round(parseInt(netIncomeBox.value));
	console.log(netIncome);
	let idealHousing = netIncome * 0.25;
	let idealNAW = netIncome * 0.55;
	let idealSavings = netIncome * 0.2;

	idealHousingBox.innerHTML = Math.round(idealHousing);
	idealNAWBox.innerHTML = Math.round(idealNAW);
	idealSavingsBox.innerHTML = Math.round(idealSavings);
	idealDebtBox.innerHTML = "0";
}

netIncomeBox.addEventListener("input", () => {
	calculateGoodPercents();
});

function calcActualValues() {
	//selects all items
	let housingSpent = document.getElementById("housingValue");
	let NAWSpent = document.querySelectorAll(".NAWValue");
	let savingsSpent = document.querySelectorAll(".savingsValue");
	let debtSpent = document.querySelectorAll(".debtValue");

	//gets savings values
	[...savingsSpent].forEach((item) => {
		let value = parseInt(item.value);
		if (isNaN(value)) {
			return;
		} else {
			savingsSpentValue += value;
		}
		let parsedSavings = Math.round(parseInt(savingsSpentValue));
		actualSavingsBox.innerHTML = parsedSavings;
	});

	//gets needs/wants values
	[...NAWSpent].forEach((item) => {
		let value = parseInt(item.value);
		if (isNaN(value)) {
			return;
		} else {
			NAWSpentValue += value;
		}
		let parsedNAW = Math.round(parseInt(NAWSpentValue));
		actualNAWBox.innerHTML = parsedNAW;
	});

	//gets debt values
	[...debtSpent].forEach((item) => {
		let value = parseInt(item.value);
		if (isNaN(value)) {
			return;
		} else {
			debtSpentValue += value;
		}
		let parsedDebt = Math.round(parseInt(debtSpentValue));

		actualDebtBox.innerHTML = parsedDebt;
	});

	let parsedHousing = Math.round(parseInt(housingSpent.value));
	if (isNaN(parsedHousing)) {
		return;
	} else {
		actualHousingBox.innerHTML = parsedHousing;
	}

	//calculates total
	let totalSpent =
		parseInt(housingSpent.value) +
		parseInt(debtSpentValue) +
		parseInt(NAWSpentValue) +
		parseInt(savingsSpentValue);
	console.log(totalSpent);
	spentBox.innerHTML = totalSpent.toFixed(0);

	let netIncome = Math.round(parseInt(netIncomeBox.value));
	let housingPercent = (housingSpent.value / netIncome) * 100;
	let savingsPercent = (savingsSpentValue / netIncome) * 100;
	let NAWPercent = (NAWSpentValue / netIncome) * 100;
	let debtPercent = (debtSpentValue / netIncome) * 100;

	actualHousingPercentBox.innerHTML = `${Math.round(housingPercent)}%`;
	actualSavingsPercentBox.innerHTML = `${Math.round(savingsPercent)}%`;
	actualNAWPercentBox.innerHTML = `${Math.round(NAWPercent)}%`;
	actualDebtPercentBox.innerHTML = `${Math.round(debtPercent)}%`;

	NAWSpentValue = 0;
	savingsSpentValue = 0;
	debtSpentValue = 0;
}

//Calculates actual values
[...inputs].forEach((input) => {
	input.addEventListener("input", () => {
		calcActualValues();
	});
});

// //calculate button
// button.addEventListener("click", () => {

// });

//Add more buttons
function addRow(rowType) {
	let textInput = document.createElement("input");
	let numInput = document.createElement("input");

	textInput.setAttribute("type", "text");
	textInput.setAttribute("placeholder", "Item");

	numInput.setAttribute("type", "number");
	numInput.setAttribute("placeholder", "Cost");
	// numInput.classList.add("inputs");
	numInput.setAttribute("class", `${rowType}Value inputs`);
	numInput.addEventListener("input", () => {
		calcActualValues();
	});

	let wrapper = document.getElementById(`${rowType}Wrapper`);
	wrapper.appendChild(textInput);
	wrapper.appendChild(numInput);

	console.log(inputs);
}
// housingButton.addEventListener("click", () => {
// 	addRow("housing");
// });
NAWButton.addEventListener("click", () => {
	addRow("NAW");
});
savingsButton.addEventListener("click", () => {
	addRow("savings");
});
debtButton.addEventListener("click", () => {
	addRow("debt");
});
