const bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
};

//console.log(bubbleSort([5, 1, 6, 3, 4, 12, 5, 6, 4, -2]));

const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let temp = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = temp;
    }
  }
  return arr;
};

//console.log(selectionSort([5, 1, 6, 3, 4, 12, 5, 6, 4, -2]));

const mergeSort = arr => {
  if (arr.length === 1) {
    return arr;
  }
  let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  return merge(left, right);
};

const merge = (left, right) => {
  let results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
};

console.log(mergeSort([5, 1, 6, 3, 4, 12, 5, 6, 4]));
