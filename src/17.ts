function sumOfSquares(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}

console.log(sumOfSquares(5)); // Output: 55
