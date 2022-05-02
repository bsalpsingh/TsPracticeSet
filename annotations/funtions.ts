const sum = (a: number, b: number): number => a + b;
//          (argument annotation): return value annotation=> functions body

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};



//  ? destructuring with annotations


const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(`todays date is ${date}  & weather is ${weather}`);
};


