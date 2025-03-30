function calculateSum(numbers: number[]): number {
  let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(`The sum of the array is: ${calculateSum(numbers)}`);
