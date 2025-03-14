"use strict";

/* 

псевдокод:
    создать переменную результат со значением 0
    создать массив
    
    привести число к массиву по одной цифре
    пройтись по каждой цифре в массиве
    создать копию массива
    заменить элемент по текущему индексу в копии массива на пустую строку
    преобразовать массив к строке потом к числу
    если полученное число больше, что лежит в переменной результат,
    записать туда

*/

function deleteDigit(n) {
  let result = 0;
  let arr2 = String(n).split("");
  arr2.forEach((e, i) => {
    let stack = [...arr2];
    stack.splice(i, 1, "");
    result = Math.max(result, Number(stack.filter((e) => !!e).join("")));
  });
  return result;
}

console.log(deleteDigit(152))
console.log(deleteDigit(998982))
console.log(deleteDigit(1001))