// Задача 1. Инкапсуляция студента
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
// 2 добавление предмета
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}
// 4 добавление оценок
Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    return undefined;
 }
this.marks.push(...marks);
}
// 5 среднее арифметическое оценок
Student.prototype.getAverage = function () {
if (this.marks === undefined) {
  return 0;
} else {
  return this.marks.reduce((acc, cur) => acc + cur / this.marks.length, 0) 
  }
}
// 6 исключение студента
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
// Пример
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
