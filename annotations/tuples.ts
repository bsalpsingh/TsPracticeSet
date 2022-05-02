const Drinks = [
  {
    color: "brown",
    sugar: 40,
    carbonated: true,
  },
  {
    color: "orange",
    sugar: 30,
    carbonated: false,
  },
];

// the above record of drinks can be alos represented as tuples

type DrinkAlias = [string, number, boolean];

const pepsiTuple: DrinkAlias = ["brown", 40, true];
const fantaTuple: DrinkAlias = ["orange", 30, true];
// ? the type alias (DrinkAlias) can also be embedded as annotation
