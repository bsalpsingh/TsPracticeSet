import { Analyzer } from "../inheritance/summary";
import { MatchData } from "../matchData";
import { MatchResults } from "../matchResults";
export class WinAnalysis implements Analyzer {
  wins: number = 0;
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    //   matches arg is return value of the match reader instances after  called upon by load method on themselves
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResults.HomeWin) {
        this.wins++;
      } else if (match[2] === this.team && match[5] === MatchResults.AwayWin) {
        this.wins++;
      }
    }
    return `team ${this.team} won ${this.wins} games`;
  }
}
