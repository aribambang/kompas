function sumDuplicate(arr) {
  let duplicate = {};
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!duplicate[arr[i]]) {
      duplicate[arr[i]] = 0;
    } else {
      count++;
    }
    duplicate[arr[i]] += 1;
  }

  return count;
}

const array = [1, 2, 3, 4, 5, 1, 4, 6, 8, 10];
console.log(sumDuplicate(array));
