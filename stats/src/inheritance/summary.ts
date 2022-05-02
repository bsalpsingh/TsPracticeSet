import { MatchData } from "../matchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}
//?  composing the instances of clases that follow Analyzer & OutputTarget interfaces
//?  into Summary Class
export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  //  summary has access to prop and methods of intances of analysis and  output classes
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
