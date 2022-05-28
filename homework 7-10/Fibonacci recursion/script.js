'use strict';

function fib(a) {
  let x = 1;
  let y = 1;
  for (let i = 3; i <= a; i++) {
    let c = x + y;
    x = y;
    y = c;
  }
  return y;
}

console.log(fib(17));