'use strict';
// задача №1
function solveEquation(a, b, c) {
	let res = [];
	let D = b * b - 4 * a * c;
	console.log('D = ' + D);
	if (D < 0) {
			res.push();
		} else	if (D === 0) {
			res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
		} else if (D > 0) {
			let tmp = [];
			tmp.push((-b + Math.sqrt(D)) / (2 * a));
			tmp.push((-b - Math.sqrt(D)) / (2 * a));
			res["quadratic roots"] = tmp;
	}
	return res;
}
console.log(solveEquation(1,-2,-3));

// задача №2
function calculateTotalMortgage(percent, contribution, amount ,countMonths){
	if(isNaN(percent)){
    return false;
    };
    if(isNaN(contribution)){
    return false;
    };
    if(isNaN(amount)){
    return false;
    };
    if(isNaN(countMonths)){
    return false;
    };

	let totalAmount; // общая сумма
	let S = amount - contribution; // сумма кредита - первоначальный взнос = тело кредита
	let P = percent / 12 / 100; // процентная ставка
	let monthlyPayment = S * (P + (P / (((1 + P)**countMonths) - 1))); /*Платеж = S * (P + (P / (((1 + P)^n) - 1))),  где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
	*/
	totalAmount = Number((monthlyPayment * countMonths).toFixed(2));
	return totalAmount; 
}

console.log(calculateTotalMortgage(10, 0, 50000, 12)) // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)) // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)) // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)) // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)) // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)) // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)) // 12479.52