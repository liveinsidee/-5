// дз-1
const removeDuplicates = (array) => {
  return Array.from(new Set(array));
};
const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(duplicatesArray);
console.log(uniqueArray);


// дз-2
// function filterAndMapBooks(bookArray) {
//   const booksWithU = bookArray.filter(book => book.includes('у'));
//   const mappedBooks = bookArray.map(book => {
//     if (book.includes('у')) {
//       return book + ' - книга с буквой "у"';
//     } else {
//       return book;
//     }
//   });
//   console.log("Книги с буквой 'у':");
//   booksWithU.forEach(book => console.log(book));
//   console.log("Остальные книги:");
//   mappedBooks.forEach(book => {
//     if (!book.includes('у')) {
//       console.log(book);
//     }
//   });
// }
// const books = [
//   "Книга 1",
//   "Книга 2 с буквой у",
//   "Книга 3",
//   "Книга 4 с буквой у",
//   "Книга 5"
// ];
// filterAndMapBooks(books);


// дз-3
// const users = [
//   { name: 'Айбике', age: 25 },
//   { name: 'София', age: 32 },
//   { name: 'Bob', age: 28 },
//   { name: 'Аарон', age: 123456789 },
//   { name: 'Иван', age: 30 },
//   { name: 'Айдана', age: 19 },
//   { name: 'Настя', age: 33 },
//   { name: 'Sophia', age: 22 }
// ];
//
// const youngestUser = users.reduce((min, user) => (user.age < min.age ? user : min));
// const oldestUser = users.reduce((max, user) => (user.age > max.age ? user : max));
// const ageDifference = oldestUser.age - youngestUser.age;
// console.log(`Самый молодой пользователь: ${youngestUser.name}`);
// console.log(`Самый старый пользователь: ${oldestUser.name}`);
// console.log(`Разница в возрасте: ${ageDifference} лет.`);
