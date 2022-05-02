const colorsArray = [1, 1 ,3 ,1, 2, 1, 3, 3, 3, 3];
function sockMerchant(n, ar) {
  const cardinalCount = {};
  ar.reduce((acc, el) => {
    if (!cardinalCount[el]) {
      cardinalCount[el] = 1;
    } else {
      cardinalCount[el] = cardinalCount[el] + 1;
    }
    return cardinalCount;
  }, cardinalCount);Zd

  const remainders = Object.values(cardinalCount)
    .map((count) => count % 2)
    .reduce((acc, el) => acc + el);
  return (ar.length-remainders)/2;
}
console.log(sockMerchant(7, colorsArray));
