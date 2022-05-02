function rotLeft(a: number[], d: number): number[] {
  // Write your code here

    for (let i = 0; i < d; i++) {
         let firstNumber: number = a[0];
      a.shift()
   

    a.push(firstNumber);
  }

  return a;
}

console.log(rotLeft([1, 2, 3], 4));
