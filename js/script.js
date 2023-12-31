/*
!  ##############################################
!  ################ Код урока 1 #################
!  ##############################################

*  Создание переменных допустимо через:
?  let - переменная
?  const - константа (неизменяемая переменная)
!  var - устаревший способ, так лучше не объявлять переменные во избежание нарушения области видимости. 

*  Название переменных может содержать:
*  Буквы - [A-Z, a-z]   !(Могут начинаться)
*  Цифры - [0 - 9] 
*  Символы - _, $   !(Могут начинаться)

!  ###########################################################
?  Для передачи переменной определенного значения необходимо использовать оператор присвоения
?  Оператор присвоения - "=" 
!  ###########################################################
*/

let number1 = 5 //*  Создали переменную с названием number1 и присвоили ей значение - число 5
let string1 = 'Hello world' //*  Создали переменную с названием string1 и присвоили ей значение - строка 'Hello world'
const myName = "Виктор" //*  Создали константу с названием number1 и присвоили ей значение - Строка "Виктор"

/*
!  ##########################################################
?  Вывод в консоль производится функцией console.log()
?  Можно передавать параметры через запятую
!  ##########################################################
*/
// console.log(number1, string1, myName)

/*
!  ##########################################################
?  Математические операторы
*  Плюс [+]
*  Минус [-]
*  Умножить [*]
*  Разделить [/]
*  Остаток от деления [%] 10 % 3 => 1
*  Возведение в степень [**]
*  Инкремент (увеличение на единицу) [++]
*  Декремент (уменьшение на единицу) [--]

!  ##########################################################
*/
// console.log(5 + 10)
// console.log(10 / 2)
// console.log(30 - 10)
// console.log(10 % 3)
// console.log(2 ** 3)

/*
!  ##########################################################
?  Префиксный - выполняется в первую очередь
?  Постфиксный - выполняется в самым последним, даже после присваивания
!  ##########################################################
*/
console.log('Переменная number1 постфиксный = ', number1++)
// console.log(number1)
// number1 = number1 + 1
console.log('Переменная number1 до изменения = ', number1)

console.log('Переменная number1 префиксная = ', ++number1)
console.log(number1)
// number1 = number1 + 1
// console.log(number1)
/*
!  ##########################################################
?  Типы данных
*  Числа (целые и вещественные) - number [1, 10, 20975907, 1.5, .7, 10.345]
*  Большие числа - BigInt [9007199254740991n] обычно не используются
*  Строки - string ['Слово', 'Целое предложение', "Еще несколько слов"]
*  Булевы значения - boolean [true, false]
?  Определение типа typeof
!  ##########################################################
*/
let a = .01
console.log(typeof true)
console.log(typeof 'Word')
console.log(typeof 13)
console.log(typeof 12356n)
console.log(typeof 1.1)

/*
!  ##########################################################
!  ####################### ДЗ ###############################
!  ##########################################################
1. Создай файл JS и подключить его к index.html 
2. Создайте 2 переменные num1 и num2 положите в них 2 произвольных целых числа. Выведите их в консоль.
3. Выполните математические операции с данными числами (например увеличте одно на 5 второе в 10 раз) и сохраните в те же переменные
4. Выведите результат в консоль
5. Создайте 2 переменные со словами и выведите их в консоль
6. Создайте переменные strNum1 со значением '5' и strNum2 со значением '10'
7. Попробуйте все математические операции с этими числами (+, -, *, /, %, **). Выведите результат в консоль. С камим результатом вы не согласны? 
*  Пример:
let a = 5, b = 8
console.log(a+b)
console.log(a-b)
...
...
...

8. Создайте 2 переменные num3 и num4 со значениями 3 и 5 соответственно. Не используя других переменных, а только математические операторы поменяйте их местами. Например num3 было 3, а стало 5
!  ##########################################################
*/
