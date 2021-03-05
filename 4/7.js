function sortArray(arr) {
  return arr.sort((a, b) => b - a);
}

const array = [1, 2, 3, 4, 5, 1, 4, 6, 8, 10];
console.log(sortArray(array));
