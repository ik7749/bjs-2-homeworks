'use strict';
// задача №1
function solveEquation(a, b, c) {
	let d = b * b - 4 * a * c;
  let tmp = [];

  if (d === 0) {
    tmp.push(-b / (2 * a));
  } else if (d > 0) {
    tmp.push((-b + Math.sqrt(d) ) / (2 * a));
    tmp.push((-b - Math.sqrt(d) ) / (2 * a));
  }
  return tmp;
}
console.log(solveEquation(1,-2,-3));
console.log(solveEquation(1,12,36));
console.log(solveEquation(1,2,20));

// задача №2
function calculateTotalMortgage(percent, contribution, amount ,countMonths){

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
  /*	if(isNaN(percent)){
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
*/
	let totalAmount; // общая сумма
	let s = amount - contribution; // сумма кредита - первоначальный взнос = тело кредита
	let p = percent / 12 / 100; // процентная ставка
	let monthlyPayment = s * (p + (p / (((1 + p)**countMonths) - 1))); /*Платеж = S * (P + (P / (((1 + P)^n) - 1))),  где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
	*/
	totalAmount = Number((monthlyPayment * countMonths).toFixed(2));
	return totalAmount; 
}

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52
