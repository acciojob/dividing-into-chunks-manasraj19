const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const subarrays = [];
  let currentSum = 0;
  let currentSubarray = [];

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] <= n) {
      currentSubarray.push(arr[i]);
      currentSum += arr[i];
    } else {
      subarrays.push(currentSubarray);
      currentSubarray = [arr[i]];
      currentSum = arr[i];
    }
  }

  if (currentSubarray.length > 0) {
    subarrays.push(currentSubarray);
  }

  return subarrays;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
