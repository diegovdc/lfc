import { renderFile } from "pug";
import { existsSync, rmSync, mkdirSync, writeFileSync, cpSync } from "fs";
import { createDB } from "./create-db.mjs";

function structureDB(key, lang, array) {
  return array.reduce((acc, item) => {
    return {
      ...acc,
      [item[key]]: {
        ...item,
        // generaliza el acceso al contenido textual en los archivos parciales
        text: item[lang],
      },
    };
  });
}
const db_ = createDB();
const dbES = structureDB("id", "es", db_);
const dbEN = structureDB("id", "es", db_);

// delete dist directory if it exists
if (existsSync("./dist")) {
  rmSync("./dist", { recursive: true });
}

// write partials files
function writePartialsFiles(lang, options) {
  mkdirSync(`./dist/${lang}/partials`, { recursive: true });
  options = { ...options, lang, db: lang === "es" ? dbES : dbEN };
  writeFileSync(
    `./dist/${lang}/partials/index.html`,
    renderFile("./pug/partials/index.pug", options)
  );
  writeFileSync(
    `./dist/${lang}/partials/acto1.html`,
    renderFile("./pug/partials/acto1.pug", options)
  );
}

function writePagesFiles(lang, options) {
  mkdirSync(`./dist/${lang}`, { recursive: true });
  options = { ...options, lang, db: lang === "es" ? dbES : dbEN };
  writeFileSync(
    `./dist/${lang}/index.html`,
    renderFile("./pug/index.pug", options)
  );

  writeFileSync(
    `./dist/${lang}/acto1.html`,
    renderFile("./pug/acto1.pug", options)
  );
}

writePartialsFiles("es", {});
writePartialsFiles("en", {});
writePagesFiles("es", {});
writePagesFiles("en", {});
writeFileSync(`./dist/index.html`, renderFile("./pug/landing-page.pug", {}));
writeFileSync(
  `./dist/index-partial.html`,
  renderFile("./pug/partials/landing-page.pug", {})
);

// copy assets dir into dist/assets
mkdirSync("./dist/assets", { recursive: true });
cpSync("./assets", "./dist/assets", { recursive: true });
