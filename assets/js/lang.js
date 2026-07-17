/* ==========================================================================
   BORALAN — idioma
   Recuerda la elección del usuario (selector de idioma) y le lleva a su
   versión al volver a la home en español.
   NO se detecta el idioma del navegador: Googlebot navega en inglés y esa
   redirección automática hacía que Google indexara la home como /en/.
   El reparto por idioma en buscadores lo hace el hreflang, no JS.
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

  // Redirección solo si el usuario eligió idioma antes (solo en la home en español)
  function maybeRedirect() {
    var htmlLang = (document.documentElement.lang || "es").slice(0, 2);
    if (htmlLang !== "es") return; // ya estamos en una versión traducida

    var path = location.pathname;
    var base = detectBase(); // p.ej. "/proyecto-Boralan/"
    // ¿estamos en la home en español? (path === base, con o sin index.html)
    var isHome = path === base || path === base + "index.html" || path === "/" || path === "/index.html";
    if (!isHome) return;

    var stored;
    try { stored = localStorage.getItem("boralan_lang"); } catch (e) {}

    if (stored && /^(eu|fr|en)$/.test(stored)) {
      location.replace(base + stored + "/");
    }
  }

  maybeRedirect();
})();
