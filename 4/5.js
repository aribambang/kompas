function removeDuplicate(arr) {
  let result = [];
  let duplicate = {};

  for (let i = 0; i < arr.length; i++) {
    if (!duplicate[arr[i]]) {
      duplicate[arr[i]] = 0;
      result.push(arr[i]);
    }
    duplicate[arr[i]] += 1;
  }

  return result;
}

function fib(n) {
  let first = 0;
  let sec = 1;
  let sum = 0;
  let result = [];

  sum = first + sec;
  result.push(sum);
  while (sum <= n) {
    result.push(sum);
    first = sec;
    sec = sum;
    sum = first + sec;
  }
  return removeDuplicate(result);
}

function countFibo(arr) {
  const max = Math.max.apply(null, arr);
  const fibo = fib(max);
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < fibo.length; j++) {
      if (arr[i] === fibo[j]) {
        result++;
      }
    }
  }
  return result;
}

const array = [1, 2, 3, 4, 5, 1, 4, 6, 8, 10];
console.log(countFibo(array));
