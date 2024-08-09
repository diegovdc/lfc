import { parse } from "csv-parse/sync";
import fs from "fs";

export function createDB() {
  const data = fs.readFileSync("./data/WebsiteFabricaInfo.csv", "utf8");

  const records = parse(data, {
    columns: true,
    skip_empty_lines: true,
  });
  //   fs.writeFileSync("./db.json", JSON.stringify(records, null, 2));
  return records;
}
