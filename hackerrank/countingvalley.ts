function countingVallyes(steps: number, path: string[]): number {
  let mountainCount: number = 0;
  let valleyCount: number = 0;
  let pathSequence: string[] = [];
  let altitude: number = 0;
  let firstStep: string;
  let lastStep: string;
  path.forEach((step) => {
    if (step === "U") {
      altitude++;
    } else {
      altitude--;
    }
    pathSequence.push(step);
if (pathSequence.length > 2) {
  pathSequence = [pathSequence[1], pathSequence[pathSequence.length - 1]];
}
    if (altitude === 0) {
      firstStep = pathSequence[0];
      lastStep = pathSequence[pathSequence.length - 1];
      

      if (firstStep === "U" && lastStep === "D") {
        mountainCount++;
      } else {
        valleyCount++;
      }
      console.log(pathSequence);
      pathSequence = [];
    }
  });

  return valleyCount;
}
let valleyCount = countingVallyes(8, "DDUUDDUDUUUD".split(""));
console.log(valleyCount);
