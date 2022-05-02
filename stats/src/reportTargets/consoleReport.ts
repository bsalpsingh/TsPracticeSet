import { OutputTarget } from "../inheritance/summary";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    //   report is return of run method of the analyzer instances
    console.log(report);
  }
}
