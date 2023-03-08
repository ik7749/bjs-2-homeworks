// Задача 1. Печатное издание
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
this.name = name;
this.releaseDate = releaseDate;
this.pagesCount = pagesCount;
this.state = 100;
this.type = null;
  }
fix() {
  this.state = this.state * 1.5;
  }
  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
        this._state = 100;
    } else {
      this._state = state;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "detective";
  }
}
// Пример
const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
 );
 console.log(sherlock.releaseDate); //2019
 console.log(sherlock.state); //100
 sherlock.fix();
 console.log(sherlock.state); //100
 const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

// Задача 2. Библиотека

class Library {
  constructor(name, books) {
this.name = name;
this.books = [];
  }
addBook(book) {
if (book.state > 30) {
  this.books.push(book);
  }
}

findBookBy(type, value) {
  for (let book of this.books) {
    if (book[type] === value) {
      return book;
    }
  }
  return null;
}

giveBookByName(bookName) {
  const book = this.findBookBy('name', bookName);
  const bookIndex = this.books.indexOf(book);
  if (bookIndex == 1) {
    this.books.splice(bookIndex, 1);
      return book;
    }
    return null;
  }
}
// Задача 3. Журнал успеваемости * буду делать в мае
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
addMark() {

    }
getAverageBySubject() {

  }

getAverage() {

  }
}
// Пример
const library = new Library("Библиотека имени Ленина");
library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3