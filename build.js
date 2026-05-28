/* ==========================================================================
   BORALAN — build multiidioma (idempotente)

   - Páginas fuente en español (raíz) con marcadores <!--#HEADER#--> etc.
     y enlaces root-relativos (/servicios/, /assets/...).
   - Genera: español en la raíz + eu/ fr/ en/ en subcarpetas, con:
       · partials (header/footer/whatsapp/cookies) + selector de idioma
       · textos traducidos (i18n/translations.js)
       · <title>/<meta> por idioma, <html lang>, hreflang + x-default
       · rutas con BASE (+ prefijo de idioma para enlaces internos)

   Uso:  node build.js
   Dominio propio:  BASE_PATH="" node build.js
   ========================================================================== */
const fs = require("fs");
const path = require("path");
const { LANGS, T, META } = require("./i18n/translations.js");
const LEGAL = require("./i18n/legal.js");
// fusionar traducciones legales en T
for (const lang of Object.keys(LEGAL)) {
  T[lang] = Object.assign({}, T[lang], LEGAL[lang]);
}

const BASE = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : "/proyecto-Boralan";
const SITE = "https://boralan.es"; // dominio canónico para SEO (hreflang/og)

const WA_MSG = encodeURIComponent("Hola, he visto vuestra web y quería pedir un presupuesto para un trabajo de poda o tala.");
const WA_LINK = `https://wa.me/34628850027?text=${WA_MSG}`;
const BRAND_MARK = `<svg class="brand__mark" viewBox="0 0 100 100" aria-hidden="true"><rect class="brand__trunk" x="44" y="6" width="12" height="88" rx="6"/><path class="brand__climber" d="M58 18c6 0 11 4 11 10 0 4-2 7-6 9l4 8-7 3-3-7-5 2 1 9-7 1-2-13c-3-1-5-4-5-7 0-5 4-9 9-9l3-9 4 0z"/><path class="brand__rope" d="M62 12 56 40" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>`;

// Páginas del sitio: clave = ruta lógica; valor = ruta de archivo fuente (es)
const PAGES = {
  "": "index.html",
  "servicios": "servicios/index.html",
  "nosotros": "nosotros/index.html",
  "galeria": "galeria/index.html",
  "contacto": "contacto/index.html",
  "aviso-legal": "aviso-legal/index.html",
  "politica-privacidad": "politica-privacidad/index.html",
  "politica-cookies": "politica-cookies/index.html"
};

/* traducción de una cadena para un idioma (fallback: español) */
function tr(str, lang) {
  if (lang === "es") return str;
  const dict = T[lang] || {};
  return dict[str] !== undefined ? dict[str] : str;
}

/* selector de idioma (HTML). pageKey = ruta lógica actual; lang = idioma actual
   Usa un centinela @@LANGHREF@@ para que applyBase NO normalice estos enlaces
   (cada opción debe conservar su prefijo de idioma) y solo les añada BASE al final. */
function langSwitcher(pageKey, lang) {
  const items = LANGS.map(l => {
    const href = `@@LANGHREF@@${l.dir}/${pageKey ? pageKey + "/" : ""}`;
    const current = l.code === lang ? ' aria-current="true"' : "";
    return `<a class="lang-switch__opt${l.code === lang ? " is-active" : ""}" href="${href}" hreflang="${l.hreflang}" lang="${l.htmlLang}"${current}>${l.label}</a>`;
  }).join("");
  return `<div class="lang-switch" role="group" aria-label="${tr("Cambiar idioma", lang)}">${items}</div>`;
}

/* navegación traducida con prefijo de idioma */
function navLinks(lang, mobile) {
  const d = LANGS.find(l => l.code === lang).dir;
  const map = [
    ["", "inicio", "Inicio"],
    ["servicios/", "servicios", "Servicios"],
    ["nosotros/", "nosotros", "Nosotros"],
    ["galeria/", "galeria", "Galería"],
    ["contacto/", "contacto", "Contacto"]
  ];
  if (mobile) {
    return map.map(([slug, key, label], i) =>
      `<li><a class="mobile-nav__link" href="${d}/${slug}"><span class="idx">0${i + 1}</span>${tr(label, lang)}</a></li>`
    ).join("\n      ");
  }
  return map.map(([slug, key, label]) =>
    `<a class="nav__link" href="${d}/${slug}" data-nav="${key}">${tr(label, lang)}</a>`
  ).join("\n        ");
}

function partials(lang, pageKey) {
  const d = LANGS.find(l => l.code === lang).dir;
  const home = `${d}/`;
  return {
    HEADER: `
  <header class="site-header" data-header>
    <div class="container header__inner">
      <a class="brand" href="${home}" aria-label="${tr("Boralan — inicio", lang)}">${BRAND_MARK}<span>boralan</span></a>
      <nav class="nav" aria-label="${tr("Navegación principal", lang)}">
        ${navLinks(lang, false)}
      </nav>
      <div class="header__end">
        ${langSwitcher(pageKey, lang)}
        <a class="btn header__cta" href="${d}/contacto/" data-magnetic="0.25">${tr("Presupuesto", lang)}</a>
      </div>
      <button class="nav-toggle" data-nav-toggle aria-expanded="false" aria-controls="mobile-nav" aria-label="${tr("Abrir menú", lang)}">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <nav class="mobile-nav" id="mobile-nav" data-mobile-nav aria-label="${tr("Navegación móvil", lang)}">
    <ul class="mobile-nav__list" role="list">
      ${navLinks(lang, true)}
    </ul>
    <div class="mobile-nav__lang">${langSwitcher(pageKey, lang)}</div>
    <div class="mobile-nav__footer">
      <a href="tel:+34628850027">628 850 027</a>
      <a href="mailto:boralan04@gmail.com">boralan04@gmail.com</a>
      <a href="https://www.instagram.com/boralan04/" target="_blank" rel="noopener">@boralan04</a>
    </div>
  </nav>`,

    FOOTER: `
  <footer class="site-footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a class="brand" href="${home}" aria-label="${tr("Boralan — inicio", lang)}">${BRAND_MARK}<span>boralan</span></a>
          <p class="footer__tagline">${tr("Poda y tala de grandes árboles en altura. Trepa y apeos controlados en Navarra y País Vasco.", lang)}</p>
        </div>
        <div>
          <p class="footer__title">${tr("Navegación", lang)}</p>
          <div class="footer__links">
            <a href="${d}/">${tr("Inicio", lang)}</a>
            <a href="${d}/servicios/">${tr("Servicios", lang)}</a>
            <a href="${d}/nosotros/">${tr("Nosotros", lang)}</a>
            <a href="${d}/galeria/">${tr("Galería", lang)}</a>
            <a href="${d}/contacto/">${tr("Contacto", lang)}</a>
          </div>
        </div>
        <div>
          <p class="footer__title">${tr("Contacto", lang)}</p>
          <div class="footer__links">
            <a href="tel:+34628850027">628 850 027</a>
            <a href="tel:+34628798602">628 798 602</a>
            <a href="mailto:boralan04@gmail.com">boralan04@gmail.com</a>
            <a href="https://www.instagram.com/boralan04/" target="_blank" rel="noopener">Instagram @boralan04</a>
            <span style="color:var(--text-dim)">${tr("Lesaka, Navarra", lang)}</span>
          </div>
        </div>
      </div>
      <p class="footer__giant" aria-hidden="true">boralan</p>
      <div class="footer__bottom">
        <p>&copy; <span data-year>2026</span> Boralan · ${tr("Lesaka, Navarra", lang)}. ${tr("Todos los derechos reservados.", lang)}</p>
        <div class="footer__links" style="flex-direction:row; gap:1.2rem; flex-wrap:wrap">
          <a href="${d}/aviso-legal/">${tr("Aviso legal", lang)}</a>
          <a href="${d}/politica-privacidad/">${tr("Privacidad", lang)}</a>
          <a href="${d}/politica-cookies/">${tr("Cookies", lang)}</a>
        </div>
        <p class="footer__credit">${tr("Diseñado por", lang)} <a href="https://unaxaller.com" target="_blank" rel="noopener">unaxaller.com</a></p>
      </div>
    </div>
  </footer>`,

    WHATSAPP: `
  <a class="wa-float" href="${WA_LINK}" target="_blank" rel="noopener" aria-label="${tr("Escríbenos por WhatsApp", lang)}">
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 31.7l8-2.1c2.3 1.3 5 1.9 7.7 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.5 0-4.9-.7-7-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5a12.9 12.9 0 0 1-2-6.9C2.8 8.7 8.7 2.9 16 2.9S29.2 8.7 29.2 16 23.3 28.9 16 28.9zm7.2-9.6c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.4-.6.1-.2 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.6-.9-.7h-.7c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.2-.7-.4z"/></svg>
  </a>`,

    COOKIES: `
  <div class="cookie-banner" data-cookie role="dialog" aria-live="polite" aria-label="${tr("Aviso de cookies", lang)}">
    <p>${tr("Usamos cookies propias y técnicas para mejorar tu experiencia. Consulta nuestra", lang)} <a href="${d}/politica-cookies/">${tr("política de cookies", lang)}</a>.</p>
    <div class="cookie-banner__actions">
      <button class="btn" data-cookie-accept type="button">${tr("Aceptar", lang)}</button>
      <button class="btn btn--ghost" data-cookie-reject type="button">${tr("Rechazar", lang)}</button>
    </div>
  </div>`
  };
}

/* inyecta un partial entre marcadores (idempotente) */
function inject(html, name, value) {
  const wrapped = `<!--#${name}#-->${value}\n  <!--#/${name}#-->`;
  const pairRe = new RegExp(`<!--#${name}#-->[\\s\\S]*?<!--#/${name}#-->`);
  if (pairRe.test(html)) return html.replace(pairRe, wrapped);
  const singleRe = new RegExp(`<!--#${name}#-->`);
  if (singleRe.test(html)) return html.replace(singleRe, wrapped);
  return html;
}

/* aplica BASE (+prefijo idioma) a rutas root-relativas href/src/poster.
   langDir = "" para es, "/eu" etc. Solo enlaces internos de páginas reciben
   el prefijo de idioma; los assets (/assets, /site.webmanifest) NO. */
function applyBase(html, langDir) {
  const ATTRS = "href|src|poster";
  // normalizar: quitar BASE y cualquier prefijo de idioma previo -> raíz "/"
  const baseEsc = BASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (BASE) html = html.replace(new RegExp(`((?:${ATTRS})=")${baseEsc}/`, "g"), "$1/");
  for (const l of LANGS) {
    if (!l.dir) continue;
    const dEsc = l.dir.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    html = html.replace(new RegExp(`((?:${ATTRS})=")${dEsc}/`, "g"), "$1/");
  }
  // aplicar prefijo de idioma SOLO a rutas internas de página (no assets ni manifest)
  if (langDir) {
    html = html.replace(new RegExp(`((?:href)=")\\/(?!\\/|assets\\/|site\\.webmanifest|robots|sitemap)`, "g"), `$1${langDir}/`);
  }
  // aplicar BASE a todo lo que empiece por "/" (no protocolo-relativo)
  if (BASE) html = html.replace(new RegExp(`((?:${ATTRS})=")\\/(?!\\/)`, "g"), `$1${BASE}/`);
  // resolver centinela del selector de idioma: @@LANGHREF@@/eu/ -> BASE/eu/
  html = html.replace(/@@LANGHREF@@/g, BASE || "");
  return html;
}

/* traduce el cuerpo y atributos visibles de una página */
function translate(html, lang) {
  if (lang === "es") return html;
  const dict = T[lang] || {};
  // ordenar claves por longitud desc para no romper subcadenas
  const keys = Object.keys(dict).sort((a, b) => b.length - a.length);
  for (const k of keys) {
    const v = dict[k];
    if (!v || v === k) continue;
    // escapar regex y permitir cualquier espacio en blanco (incl. saltos de línea)
    // allí donde la clave tenga uno o más espacios -> tolera el formateo del HTML
    const kEsc = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
    // texto entre tags:  >  TEXTO  <
    html = html.replace(new RegExp(`(>\\s*)${kEsc}(\\s*<)`, "g"), `$1${v}$2`);
    // texto seguido de etiqueta inline (>texto<span>, <a>, <br>…)
    html = html.replace(new RegExp(`(>\\s*)${kEsc}(\\s*(?:<(?:span|a|strong|b|em|br)\\b))`, "g"), `$1${v}$2`);
    // atributos visibles
    html = html.replace(new RegExp(`((?:alt|aria-label|placeholder|title|content)=")${kEsc}(")`, "g"), `$1${v}$2`);
  }
  return html;
}

/* genera bloque hreflang + canonical para una página */
function hreflangBlock(pageKey, lang) {
  const slug = pageKey ? pageKey + "/" : "";
  const lines = LANGS.map(l =>
    `  <link rel="alternate" hreflang="${l.hreflang}" href="${SITE}${l.dir}/${slug}">`
  );
  // x-default -> español (raíz)
  lines.push(`  <link rel="alternate" hreflang="x-default" href="${SITE}/${slug}">`);
  const canonical = `${SITE}${LANGS.find(l => l.code === lang).dir}/${slug}`;
  return { hreflang: lines.join("\n"), canonical };
}

/* construye una página para un idioma concreto */
function buildLangPage(srcFile, pageKey, lang) {
  let html = fs.readFileSync(srcFile, "utf8");
  const L = LANGS.find(l => l.code === lang);

  // 1) inyectar partials traducidos
  const P = partials(lang, pageKey);
  for (const name of Object.keys(P)) html = inject(html, name, P[name]);

  // 2) marcar nav activo
  html = html.replace(/(<a class="nav__link"[^>]*?data-nav="[^"]*") aria-current="page"/g, "$1");
  const m = html.match(/<body[^>]*data-page="([^"]+)"/);
  if (m) {
    const page = m[1];
    html = html.replace(new RegExp(`(<a class="nav__link"[^>]*data-nav="${page}")`), `$1 aria-current="page"`);
  }

  // 3) <html lang>
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${L.htmlLang}"`);

  // 4) traducir textos visibles
  html = translate(html, lang);

  // 5) SEO: title, description, OG/twitter title+desc según META de la página
  const meta = (META[lang] && META[lang][pageKey]) || (META.es && META.es[pageKey]);
  if (meta) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`);
    html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${meta.desc}$2`);
    html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${meta.title}$2`);
    html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${meta.desc}$2`);
    html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${meta.title}$2`);
    html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${meta.desc}$2`);
  }

  // 6) hreflang + canonical + og:url + og:locale
  const { hreflang, canonical } = hreflangBlock(pageKey, lang);
  // quitar bloque hreflang previo
  html = html.replace(/\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*">/g, "");
  html = html.replace(/(<link rel="canonical"[^>]*>)/, `$1\n${hreflang}`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`);
  const ogLocale = { es: "es_ES", eu: "eu_ES", fr: "fr_FR", en: "en_GB" }[lang];
  html = html.replace(/(<meta property="og:locale" content=")[^"]*(")/, `$1${ogLocale}$2`);

  // 7) rutas (BASE + prefijo idioma)
  html = applyBase(html, L.dir);

  return html;
}

/* === ES en la raíz: igual que multiidioma pero langDir vacío === */
function buildEsPage(srcFile, pageKey) {
  let html = fs.readFileSync(srcFile, "utf8");
  const P = partials("es", pageKey);
  for (const name of Object.keys(P)) html = inject(html, name, P[name]);
  html = html.replace(/(<a class="nav__link"[^>]*?data-nav="[^"]*") aria-current="page"/g, "$1");
  const m = html.match(/<body[^>]*data-page="([^"]+)"/);
  if (m) {
    const page = m[1];
    html = html.replace(new RegExp(`(<a class="nav__link"[^>]*data-nav="${page}")`), `$1 aria-current="page"`);
  }
  html = html.replace(/<html lang="[^"]*"/, `<html lang="es"`);
  // hreflang + canonical
  const { hreflang, canonical } = hreflangBlock(pageKey, "es");
  html = html.replace(/\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*">/g, "");
  html = html.replace(/(<link rel="canonical"[^>]*>)/, `$1\n${hreflang}`);
  html = applyBase(html, "");
  return html;
}

/* escribe un archivo creando carpetas si hace falta */
function writeOut(outFile, content) {
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, content, "utf8");
  console.log("✓", path.relative(process.cwd(), outFile));
}

/* ===================== EJECUCIÓN ===================== */
// 1) Español en la raíz (sobre los archivos fuente)
for (const [pageKey, srcRel] of Object.entries(PAGES)) {
  const src = path.join(process.cwd(), srcRel);
  if (!fs.existsSync(src)) continue;
  writeOut(src, buildEsPage(src, pageKey));
}

// 2) eu / fr / en en subcarpetas
for (const L of LANGS) {
  if (L.code === "es") continue;
  for (const [pageKey, srcRel] of Object.entries(PAGES)) {
    const src = path.join(process.cwd(), srcRel);
    if (!fs.existsSync(src)) continue;
    const outRel = pageKey ? `${L.code}/${pageKey}/index.html` : `${L.code}/index.html`;
    writeOut(path.join(process.cwd(), outRel), buildLangPage(src, pageKey, L.code));
  }
}

// 3) 404.html (raíz, español; con header/footer es)
const nf = path.join(process.cwd(), "404.html");
if (fs.existsSync(nf)) {
  let html = fs.readFileSync(nf, "utf8");
  const P = partials("es", "");
  for (const name of Object.keys(P)) html = inject(html, name, P[name]);
  html = applyBase(html, "");
  writeOut(nf, html);
}

// 4) sitemap.xml multiidioma con hreflang
(function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const priority = { "": "1.0", "servicios": "0.9", "nosotros": "0.8", "galeria": "0.7", "contacto": "0.9" };
  const inSitemap = ["", "servicios", "nosotros", "galeria", "contacto"]; // legales fuera (noindex)
  const urls = [];
  for (const pageKey of inSitemap) {
    const slug = pageKey ? pageKey + "/" : "";
    for (const L of LANGS) {
      const alts = LANGS.map(a => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${SITE}${a.dir}/${slug}"/>`).join("\n");
      const xdef = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/${slug}"/>`;
      urls.push(
`  <url>
    <loc>${SITE}${L.dir}/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority[pageKey] || "0.6"}</priority>
${alts}
${xdef}
  </url>`
      );
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
  fs.writeFileSync(path.join(process.cwd(), "sitemap.xml"), xml, "utf8");
  console.log("✓ sitemap.xml (multiidioma, hreflang)");
})();

console.log("Build multiidioma completo.");
