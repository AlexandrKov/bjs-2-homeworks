function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = [...arr];
  sum = sum.reduce(function(sum, current){return sum + current;}, 0);

  avg = +((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let sum = 0;
  sum = [...arr];
  sum = sum.reduce(function(sum, current){return sum + current;}, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (let i = 0; i < arrOfArr.length; i++) {
      let result = func(...arrOfArr[i]);
      if (result > maxWorkerResult) {
        maxWorkerResult = result;
      }
    }
    return maxWorkerResult;
}
