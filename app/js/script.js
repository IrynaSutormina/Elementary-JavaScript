// 1) Используя Math найти максимальное и минимальное число из ряда  чисел 17,21,55,78,31,2,9,43 
let num = [17, 21, 55, 78, 31, 2, 9, 43]; 
console.log('1. \nmin number ' + Math.min(...num));
console.log('max number ' + Math.max(...num));

// 2) Получить число из строки “100$” 
console.log('2. Number from 100$ - ' +parseInt('100$'));

// 3) Проверить результат вычисления 0.6+0.7 . Добиться того, что бы  результатом было (1.3)
let sum = 0.6 + 0.7;
console.log('3. 0.6+0.7= ' + sum.toFixed(1));

// 4) Работа с Max.random()    - получить случайное число и округлить его до 2 цифр после запятой    - получить случайное число от 0 до 100 
let fortune =  Math.random();
console.log('4. \nFortune float number - ' + fortune.toFixed(2));
console.log('Fortune number 0-100 - ' + Math.floor(Math.random() * 101));


let string = 'some test string';

//  1) Получить первую и последнюю букву строки
let lastSimvol = string.length - 1; //находим позицию последнего символа
console.log('\nString \n1. \nFirst letter -' + string.charAt(0));
console.log('Last letter - ' + string.charAt(lastSimvol));

// 2) Сделать первую и последнюю букву в верхнем регистре 
console.log('2. - ' + string[0].toUpperCase() + string.substring(1,lastSimvol) + string[lastSimvol].toUpperCase());

// 3) Найти положение слова ‘string’ в строке 
console.log('3. position string - ' + string.indexOf('string'));

// 4) Найти положение второго пробела 
let space1 = string.indexOf(' '); //находим позицию первого пробела
console.log('4. Second space position - ' + string.indexOf(' ', space1+1)); //

// 5) Получить строку с 5-го символа длиной 4 буквы 
console.log('5. - ' + string.substr(5,4));

// 6) Получить строку с 5-го по 9-ый символ 
console.log('6. - ' + string.slice(5, 9)); //строка, не включая 9ый символ

// 7) Получить новую строку из исходной, путем удаления последних 6-ти символов
let new_string = string.slice(0, lastSimvol-6);
console.log('7. - ' + new_string);

// 8) Получить число из строки ‘$300’ 
let price = '$300';
console.log('8. - ' + parseInt(price));//тк первый символ не число, получаем NaN
let numFromStr = '$300'.slice(1);
console.log('   - ' + parseInt(numFromStr));
