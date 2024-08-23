import { startPlayback } from "./audio-player.js";
import * as acto1 from "./acto1.js";
import * as acto2 from "./acto2.js";
import * as acto3 from "./acto3.js";
import * as terremoto from "./terremoto.js";
import * as epilogo from "./epilogo.js";

const dynamicRoot = document.getElementById("root");

const loadedPages = {};

function runPageInitScript(page) {
  if (page === "acto1") {
    acto1.init();
  }

  if (page === "acto2-parte1") {
    acto2.init();
  }

  if (page === "acto2-parte2") {
    acto2.init2();
  }

  if (page === "acto3") {
    acto3.init();
  }

  if (page === "terremoto") {
    terremoto.init();
  }
  if (page === "epilogo") {
    epilogo.init();
  }
}

function setPage({ text, page, lang }) {
  loadedPages[lang + "_" + page] = text;
  dynamicRoot.innerHTML = text;
  document.body.dataset["lang"] = lang;
  document.body.dataset["page"] = page;
  setTimeout(() => {
    removeLinkListeners();
    setLinkListeners();
    window.scrollTo({ top: 0 });
    runPageInitScript(page);
  }, 0);
}

async function loadPage(lang, page) {
  lang = lang || localStorage.getItem("lang");
  if (page in loadedPages) {
    setPage({ text: loadedPages[lang + "_" + page], page, lang });
  }
  const request =
    page === "/"
      ? fetch(`/index-partial.html`)
      : fetch(`/${lang}/partials/${page}.html`);

  return request
    .then((response) => response.text())
    .then((text) => setPage({ text, page, lang }));
}

function getLangFormhref(anchor) {
  return anchor.href.split("/")?.[3];
}

function registerLinkClick(e) {
  e.preventDefault();
  // if event was on a span inside the link
  const anchor = e.target.closest("a");
  const page = anchor.dataset.page;
  const lang = getLangFormhref(anchor);
  // if anchor has landing-page class, save the lang to the localStorage
  if (anchor.classList.contains("landing-page")) {
    localStorage.setItem("lang", lang);
  }
  if (!lang) {
    console.warn("language is undefined", anchor);
  }
  loadPage(lang, page);
  if (e.target.dataset?.["startPlayback"]) {
    startPlayback();
  }
  history.pushState({ page, lang }, null, `/${lang}/${page}.html`);
}

// Function to handle back navigation
function handlePopState(event) {
  const state = event.state;
  if (state && state.page) {
    event.preventDefault();
    loadPage(state.lang, state.page);
  }
}

function setLinkListeners() {
  const links = [...document.getElementsByClassName("link-js")];
  links.forEach((link) => {
    link.addEventListener("click", registerLinkClick);
  });
}

function removeLinkListeners() {
  const links = [...document.getElementsByClassName("link-js")];
  links.forEach((link) => {
    link.removeEventListener("click", registerLinkClick);
  });
}

// Helper function to extract page from URL
function getPageFromUrl(url) {
  const parts = url.split("/");
  return parts[2]?.replace(".html", "") || "/"; // Assuming the URL structure is /lang/page.html
}

function getLangFromUrl(url) {
  const parts = url.split("/");
  const lang = parts[1];
  if (lang === "es" || lang === "en") {
    return lang;
  }
}

function setLangOnBodyFromUrl(url) {
  const lang = getLangFromUrl(url);
  if (lang) {
    document.body.dataset["lang"] = lang;
  }
}

function setPageOnBodyFromUrl(url) {
  const page = getPageFromUrl(url);
  if (page) {
    document.body.dataset["page"] = page;
  }
}

function init() {
  const url = window.location.pathname;
  const page = getPageFromUrl(url);
  const initialState = { page };
  history.replaceState(initialState, null, url);
  window.addEventListener("popstate", handlePopState);
  setLinkListeners();
  setLangOnBodyFromUrl(url);
  setPageOnBodyFromUrl(url);
  runPageInitScript(page);
}

export { init };
