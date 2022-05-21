function minimumBribes(q: number[]): void {
  let totalBribeCount: number = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] - i - 1 > 2) {
      console.log("Too chaotic");
      return;
    }
    for (let j = i; j < q.length; j++) {
      if (q[i] > q[j]) {
        totalBribeCount++;
      }
    }
  }
  console.log(totalBribeCount);
}
// possible solution with nested loop
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);

// [1,2,5,3,7,6,4,8]
// 2+2+2+2
