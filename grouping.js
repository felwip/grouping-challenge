// The task is to write a function that takes in two arguments (number of people and number of groups) and returns the number of possible distributions of the people into the amount of groups. Return value should be a number.

//newest personal approach

function calc(n, k) {
  //termination state
  if (n < k) return;

  //base state
  if (n <= k + 1) return 1;

  //recursion state
  if (n > k) {
    return calc(n - 1, k) + calc(n - 2, k);
  } else return;
}

console.log(calc(9, 5));
