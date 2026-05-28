/* ==========================================================================
   BORALAN — idioma
   1) Detección automática del idioma del navegador en la home en español
      y redirección a /fr/ o /en/ (euskara NUNCA por defecto).
   2) Recuerda la elección del usuario (selector de idioma).
   ========================================================================== */
(function () {
  "use strict";

  // Prefijo base del sitio (subcarpeta de GitHub Pages o raíz).
  // Se deduce del enlace de marca para no depender de configuración.
  function detectBase() {
    var brand = document.querySelector(".brand");
    if (brand) {
      var href = brand.getAttribute("href") || "/";
      // href de la home en el idioma actual: /proyecto-Boralan/  o  /proyecto-Boralan/en/
      // la base del sitio es todo hasta antes del posible /xx/ final
      return href.replace(/(\/(eu|fr|en))?\/$/, "/");
    }
    return "/";
  }

  // Guardar elección cuando el usuario pulsa el selector
  document.addEventListener("click", function (e) {
    var opt = e.target.closest && e.target.closest(".lang-switch__opt");
    if (!opt) return;
    var lang = (opt.getAttribute("lang") || "").slice(0, 2);
    if (lang) { try { localStorage.setItem("boralan_lang", lang); } catch (err) {} }
  });

  // Detección + redirección (solo una vez, solo en la home en español)
  function maybeRedirect() {
    var htmlLang = (document.documentElement.lang || "es").slice(0, 2);
    if (htmlLang !== "es") return; // ya estamos en una versión traducida

    var path = location.pathname;
    var base = detectBase(); // p.ej. "/proyecto-Boralan/"
    // ¿estamos en la home en español? (path === base, con o sin index.html)
    var isHome = path === base || path === base + "index.html" || path === "/" || path === "/index.html";
    if (!isHome) return;

    // no redirigir si el usuario ya eligió o ya se hizo
    var stored, done;
    try { stored = localStorage.getItem("boralan_lang"); done = sessionStorage.getItem("boralan_lang_done"); } catch (e) {}
    try { sessionStorage.setItem("boralan_lang_done", "1"); } catch (e) {}

    var target = null;
    if (stored && /^(es|eu|fr|en)$/.test(stored)) {
      target = stored;
    } else if (!done) {
      // idioma del navegador (euskara nunca por defecto)
      var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "es";
      var code = nav.slice(0, 2).toLowerCase();
      if (code === "fr") target = "fr";
      else if (code === "en") target = "en";
      else target = "es"; // español por defecto para es y cualquier otro (incl. eu)
    }

    if (target && target !== "es") {
      location.replace(base + target + "/");
    }
  }

  maybeRedirect();
})();
