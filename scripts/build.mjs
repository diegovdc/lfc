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
const dbEN = structureDB("id", "en", db_);

// delete dist directory if it exists
if (existsSync("./dist")) {
  rmSync("./dist", { recursive: true });
}

function trans(lang, db, key) {
  if (lang === "es") {
    return dbES?.[key]?.text || "key not found " + key;
  }
  if (lang === "en") {
    return dbEN?.[key]?.text || "key not found " + key;
  }
  throw new Error("Language not supported");
}

const options = { trans, dbES, dbEN };

//////////
// PAGES
/////////
const pages = [
  "index",
  "acto1",
  "acto2-parte1",
  "acto2-parte2",
  "acto3",
  "epilogo",
];

function writePartialFile(lang, options, page) {
  writeFileSync(
    `./dist/${lang}/partials/${page}.html`,
    renderFile(`./pug/partials/${page}.pug`, options)
  );
}

// write partials files
function writePartialsFiles(lang, options) {
  mkdirSync(`./dist/${lang}/partials`, { recursive: true });
  const db = lang === "es" ? dbES : dbEN;
  options = { ...options, lang, trans2: (key) => trans(lang, db, key), db };
  pages.forEach((page) => {
    writePartialFile(lang, options, page);
  });
}

function writePageFile(lang, options, page) {
  writeFileSync(
    `./dist/${lang}/${page}.html`,
    renderFile(`./pug/${page}.pug`, options)
  );
}

function writePagesFiles(lang, options) {
  mkdirSync(`./dist/${lang}`, { recursive: true });
  const db = lang === "es" ? dbES : dbEN;
  options = { ...options, lang, trans2: (key) => trans(lang, db, key), db };
  pages.forEach((page) => {
    writePageFile(lang, options, page);
  });
}

writePartialsFiles("es", options);
writePartialsFiles("en", options);
writePagesFiles("es", options);
writePagesFiles("en", options);
writeFileSync(
  `./dist/index.html`,
  renderFile("./pug/landing-page.pug", options)
);
writeFileSync(
  `./dist/index-partial.html`,
  renderFile("./pug/partials/landing-page.pug", options)
);

// copy assets dir into dist/assets
mkdirSync("./dist/assets", { recursive: true });
cpSync("./assets", "./dist/assets", { recursive: true });
