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

const array = [1, 2, 3, 4, 5, 1, 4, 6, 8, 10];
console.log(removeDuplicate(array));
