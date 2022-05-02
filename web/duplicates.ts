const colorsArray: number[] = [1, 2, 1, 2, 1, 3, 2];

function sockMerchant(n: number, colorsArray: number[]): number {
  const pairMap: { [key: string]: number } = {};
  let oddCounter: number = 0;

  colorsArray.reduce((pairMap, color) => {
    if (!pairMap[color] || pairMap[color] % 2 === 1) {
      return oddCounter++;
    } else {
      return oddCounter--;
    }
  }, oddCounter);
  return oddCounter;
}

sockMerchant(7, colorsArray);
