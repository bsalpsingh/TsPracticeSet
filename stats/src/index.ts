import { MatchReader } from "./matchReader";
import { CsvFileReader } from "./csvFileReader";
import { WinAnalysis } from "./analyzers/winAnalysis";

import { HtmlReport } from "./reportTargets/htmlReport";
import { Summary } from "./inheritance/summary";

// fromCsv is a staic method on Match reader that inits the csv reader
// & returns new instance of matchreader
const matchReader = MatchReader.fromCsv("./football.csv");
// read  data in csv file & load the data from csv reader to match reader
matchReader.load();
// the data is available under matches property of matchReader

// creating new summary instances
const summary = new Summary(new WinAnalysis("Tottenham"), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);

// genric contraints(contraints on generic types)

interface Printable {
  print(): void;
}

const printElementSummary = <T extends Printable>(collection: T[]): void => {
  collection.forEach((element: T): void => {
    element.print();
    //   the type that defines element may not have print property
    //   so we add a constraint to type that it must implement the Property
    //   using interface using extends keyword
  });
};

printElementSummary<string>(["bishal", "bivek", "bishwas"]);
// strings donot have print property (donot follow printable)

class House implements Printable {
  constructor(public owner: string) {}

  // implementing print
  print(): void {
    console.log(`this is ${this.owner}'s house`);
  }
}
// the instances of house class follow printable
printElementSummary<Printable> ([new House("Bishal"), new House("bivek")]);
