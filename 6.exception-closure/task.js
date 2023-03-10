// Задача 1. Форматтер чисел
function parseCount(value) {
	let res = Number.parseFloat(value);
	if (isNaN(res)) {
		throw new Error('Невалидное значение');
	}
	return res;
}

function validateCount(value) {
	try {
		return parseCount(value)
	} catch (error) {
		return error;
	}
}
// Задача 2. Треугольник
class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (a > b + c || b > a + c || c > a + b) {
			throw new Error('Треугольник с такими сторонами не существует')
		}
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = this.perimeter / 2;
		return Number(((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}