import fs from "fs";

// resusable CSV file reader class

export abstract class CSVFileReader<RowTuple> {
  // by convention generic types are denoted by T...i.e RowTuple by convention should be written T
  data: RowTuple[] = [];
  constructor(public filename: string) {}
  abstract mapRow(row: string[]): RowTuple;
  // reader methods
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
