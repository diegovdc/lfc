import { startPlayback } from "./audio-player.js";

const dynamicRoot = document.getElementById("root");

const loadedPages = {};

function setPage({ text, page, lang }) {
  loadedPages[lang + "_" + page] = text;
  dynamicRoot.innerHTML = text;
  document.body.dataset["lang"] = lang;
  setTimeout(() => {
    removeLinkListeners();
    setLinkListeners();
    window.scrollTo({ top: 0 });
  }, 0);
}

async function loadPage(lang, page) {
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
  return anchor.href.split("/")[3];
}

function registerLinkClick(e) {
  e.preventDefault();
  const page = e.target.dataset.page;
  const lang = getLangFormhref(e.target);
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
  console.log("🚀 ~ setLangOnBodyFromUrl ~ document.body:", document.body);
  if (lang) {
    document.body.dataset["lang"] = lang;
  }
}

function init() {
  const initialState = { page: getPageFromUrl(window.location.pathname) };
  history.replaceState(initialState, null, window.location.pathname);
  window.addEventListener("popstate", handlePopState);
  setLinkListeners();
  setLangOnBodyFromUrl(window.location.pathname);
}

export { init };
