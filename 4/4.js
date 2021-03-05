function countEven(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) count += 1;
  }

  return count;
}

const array = [1, 2, 3, 4, 5, 1, 4, 6, 8, 10];
console.log(countEven(array));
