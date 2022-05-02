import { OutputTarget } from "../inheritance/summary";
import fs from "fs";
export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
        <div>
        
        <h1>Analysis Report </h1>
        ${report}
        </div> 
        `;
    fs.writeFileSync("htmlReport.html", html);
  }
}
