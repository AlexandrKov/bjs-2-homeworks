"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    arr;
  } else if (d == 0) {
    arr = [-b / (2 * a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)];
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution;
  let n = countMonths;
  let a = percent / 100;
  let P = 1 / 12 * a;
  
  let paymentMonths = S * (P + (P / (((1 + P) ** n) - 1)));

  let payment = (paymentMonths * n).toFixed(2);
  
  return +payment;
}