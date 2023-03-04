'use strict'
// Задача 1
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
    if (max < arr[index]) {
      max = arr[index];
    }
    if (min > arr[index]) {
      min = arr[index];
    }
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}
console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10));  // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5));  // { min: 5, max: 5, avg: 5 }


// Задача 2
function summElementsWorker(...arr) {
  let sum = 0; // сумма элементов массива
  for (let index = 0; index < arr.length; index += 1) {
    sum = sum + arr[index];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  if (arr.length === 0) {
    return 0;
  }
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  }
  let res = max - min; // разница максимального и минимального элементов
  return res;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  if (arr.length === 0) {
    return 0;
  }
    for (let index = 0; index < arr.length; index++) {  
          if(arr[index] % 2 == 0 ){
          sumEvenElement += arr[index];
          } else {
          sumOddElement += arr[index];
       }
     }
     let res = sumEvenElement - sumOddElement; 
     return res; 
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;     
  let countEvenElement = 0;

  if (arr.length === 0) {
    return 0;
  }
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
      if(element % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[index];
        countEvenElement++;
      } 
   }
   let res = sumEvenElement / countEvenElement; //среднее значение чётных элементов
   return res;
}
// summElementsWorker
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// differenceMaxMinWorker
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

//Задача 3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let index = 0; index < arrOfArr.length; index++) {
    const tmp = func(...arrOfArr[index]); // результат функции сохраните в отдельную константу
    if (tmp > maxWorkerResult) { // если полученное значение больше переменной
      maxWorkerResult = tmp; // максимальный результат
    }
  }
  return maxWorkerResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
