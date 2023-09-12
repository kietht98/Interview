function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let isSorted = true;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = false;
      }
    }
    if (isSorted) {
      break;
    }
    console.log(arr);
  }
}

function bubbleDoWhile(arr) {
  let isSorted = true;
  do {
    isSorted = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = true;
      }
    }
  } while (isSorted);
}
