const sum = (firstNumber: number) => {
  return (secondNumber: number) => {
    return (thirdNumber: number) => {
      return firstNumber + secondNumber + thirdNumber;
    };
  };
};

const result = sum(1)(2)(3);
console.log(result)
