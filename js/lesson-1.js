// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

//const userInput = prompt("Введіть число")
//alert(+userInput === 10 ? "Вірно" : "Невірно")
//console.log("userInput:", +userInput);


// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

const min = Math.floor(Math.random() * (59 - 0) + 0);

//let quarter;
//if (min >= 0 && min <=14) {
//    quarter = "першу";
//}
//else if (min >= 15 && min <= 29) {
  //  quarter = "другу";
//}
//else if (min >= 30 && min <= 44) {
 //   quarter = "третю";
//}
//else {
  //  quarter = "четверту";    
//}

//alert(`${min} входить в ${} чверть`);

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної resu
// Значення змінної result виведіть в консоль.

// const number = prompt("Введіть число від 1 до 4");
// let message;
// switch (number) {
//     case "1":
//         message = "зима";        
//         break;
//     case "2":
//         message = "весна";        
//         break;
//     case "3":
//         message = "літо";        
//         break;
//     case "4":
//         message = "осінь";        
//         break;

//     default:
//         message = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";

// }
// console.log(message);

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number!";
//   }
//   return a < b ? a : b;
// }

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
let number = 0;
while (number <= 20) {
    console.log(number);
    number++;
}

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;

//   for (let i = max; i >= min; i--) {
//     console.log(i); // Виводимо число

//     if (i % 2 === 0) {
//       sum += i; // Додаємо парне число до суми
//     }
//   }

//   return sum; // Повертаємо суму парних чисел
// }

// // Приклад виклику:
// const result = getNumbers(3, 10);
// console.log("Сума парних чисел:", result);


// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i); // якщо не ділиться ні на 3, ні на 5
//     }
//   }
// }

// // Приклад виклику:
// fizzBuzz(20);


// // Потрібно підрахувати кількість парних чисел у заданому діапазоні
// // "Кількість парних чисел Count"
// const start = 1;
// const end = 36;

// let counter = 0;

// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//     counter++;
//   }
// }

// console.log("Кількість парних чисел:", counter);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const number1 = 1;
// const formatNumber = String(number1).padStart(3, "0");
// console.log(formatNumber);

function leftFillNumber(num, targetLength) {
    return num.toString().padStart(targetLength, "0");
}
const min = Number(prompt("Введіть кількість хвилин"));
const minsInDay = min % 1440; // відсікли час поза добою
const holeMin = minsInDay % 60; // визначили хвилини поточної години
const hours = (minsInDay - holeMin) / 60 === 24 ? 0 : (minsInDay - holeMin) / 60;
console.log(`${leftFillNum(hours, 2)}:${leftFillNum(holeMin, 2)}`);
