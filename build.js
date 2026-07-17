/* ==========================================================================
   BORALAN — build multiidioma (idempotente)

   - Páginas fuente en español (raíz) con marcadores <!--#HEADER#--> etc.
     y enlaces root-relativos (/servicios/, /assets/...).
   - Genera: español en la raíz + eu/ fr/ en/ en subcarpetas, con:
       · partials (header/footer/whatsapp/cookies) + selector de idioma
       · textos traducidos (i18n/translations.js)
       · <title>/<meta> por idioma, <html lang>, hreflang + x-default
       · rutas con BASE (+ prefijo de idioma para enlaces internos)

   Uso (dominio propio, p.ej. boralan.eus en Netlify):  node build.js
   GitHub Pages en subcarpeta:  BASE_PATH="/proyecto-Boralan" node build.js
   ========================================================================== */
const fs = require("fs");
const path = require("path");
const { LANGS, T, META } = require("./i18n/translations.js");
const LEGAL = require("./i18n/legal.js");
// fusionar traducciones legales en T
for (const lang of Object.keys(LEGAL)) {
  T[lang] = Object.assign({}, T[lang], LEGAL[lang]);
}

const BASE = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : "";
const SITE = "https://boralan.eus"; // dominio canónico para SEO (hreflang/og)

const WA_MSG = encodeURIComponent("Hola, he visto vuestra web y quería pedir un presupuesto para un trabajo de poda o tala.");
const WA_LINK = `https://wa.me/34628850027?text=${WA_MSG}`;
const BRAND_MARK = `<img class="brand__mark" src="/assets/img/logo-mark-160.webp" width="106" height="160" alt="" aria-hidden="true">`;

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
    return map.map(([slug, key, label]) =>
      `<li><a class="mobile-nav__link" href="${d}/${slug}">${tr(label, lang)}</a></li>`
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
    <button class="mobile-nav__close" type="button" data-nav-close aria-label="${tr("Cerrar menú", lang)}">
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6 18 18M18 6 6 18"/></svg>
    </button>
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
// Prefijos de BASE históricos que pueden quedar quemados en las fuentes y deben
// normalizarse a raíz ANTES de aplicar el BASE actual. Incluye el BASE actual y
// el legado de GitHub Pages para que el build sea idempotente con cualquier BASE.
const KNOWN_BASES = Array.from(new Set([BASE, "/proyecto-Boralan"].filter(Boolean)));

function applyBase(html, langDir) {
  const ATTRS = "href|src|poster";
  // 1) normalizar: quitar cualquier BASE conocido (actual o legado) -> raíz "/"
  for (const b of KNOWN_BASES) {
    const bEsc = b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    html = html.replace(new RegExp(`((?:${ATTRS})=")${bEsc}/`, "g"), "$1/");
    // también en srcset/imagesrcset (varias URLs separadas por espacios/comas)
    html = html.replace(new RegExp(`${bEsc}/assets/`, "g"), "/assets/");
  }
  // 2) quitar cualquier prefijo de idioma previo -> raíz "/"
  for (const l of LANGS) {
    if (!l.dir) continue;
    const dEsc = l.dir.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    html = html.replace(new RegExp(`((?:${ATTRS})=")${dEsc}/`, "g"), "$1/");
  }
  // 3) aplicar prefijo de idioma SOLO a rutas internas de página (no assets ni manifest)
  if (langDir) {
    html = html.replace(new RegExp(`((?:href)=")\\/(?!\\/|assets\\/|site\\.webmanifest|robots|sitemap|llms)`, "g"), `$1${langDir}/`);
  }
  // 4) aplicar BASE a todo lo que empiece por "/" (no protocolo-relativo)
  if (BASE) {
    html = html.replace(new RegExp(`((?:${ATTRS})=")\\/(?!\\/)`, "g"), `$1${BASE}/`);
    // srcset/imagesrcset: reaplicar BASE en cada "/assets/..." que aparezca
    html = html.replace(/(^|[\s,"])\/assets\//g, `$1${BASE}/assets/`);
  }
  // 5) resolver centinela del selector de idioma: @@LANGHREF@@/eu/ -> BASE/eu/
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

/* ==========================================================================
   STRUCTURED DATA (JSON-LD) generado por idioma.
   Se construye desde objetos JS y se serializa con JSON.stringify (escape
   automático, JSON siempre válido). Las URLs llevan el prefijo de idioma y los
   textos están traducidos, de modo que /eu/ /fr/ /en/ tengan su propio schema
   coherente en lugar de heredar el español con URLs de la raíz.
   ========================================================================== */

// Etiquetas de migas de pan por idioma (coinciden con el nav traducido)
const CRUMB = {
  es: { inicio: "Inicio", servicios: "Servicios", nosotros: "Nosotros", galeria: "Galería", contacto: "Contacto" },
  eu: { inicio: "Hasiera", servicios: "Zerbitzuak", nosotros: "Gu", galeria: "Galeria", contacto: "Kontaktua" },
  fr: { inicio: "Accueil", servicios: "Services", nosotros: "À propos", galeria: "Galerie", contacto: "Contact" },
  en: { inicio: "Home", servicios: "Services", nosotros: "About", galeria: "Gallery", contacto: "Contact" }
};

// Descripción del negocio (LocalBusiness) por idioma
const BIZ_DESC = {
  es: "Empresa especializada en poda y tala de grandes árboles en altura mediante técnicas de trepa y apeos controlados. Trabajos en zonas inaccesibles para maquinaria.",
  eu: "Zuhaitz handien inausketa eta mozketa altueran egiten espezializatutako enpresa, igoera-teknika eta mozketa kontrolatuen bidez. Makineriarako sarbide zaileko guneetako lanak.",
  fr: "Entreprise spécialisée dans l'élagage et l'abattage de grands arbres en hauteur par des techniques de grimpe et de démontage contrôlé. Travaux en zones inaccessibles aux machines.",
  en: "Company specialised in pruning and felling large trees at height using climbing techniques and controlled dismantling. Work in areas inaccessible to machinery."
};

// knowsAbout del LocalBusiness por idioma
const KNOWS = {
  es: ["Poda en altura", "Tala controlada", "Trepa de árboles", "Apeos controlados", "Gestión de residuos vegetales"],
  eu: ["Altuerako inausketa", "Mozketa kontrolatua", "Zuhaitzen igoera", "Apeo kontrolatuak", "Landare-hondakinen kudeaketa"],
  fr: ["Élagage en hauteur", "Abattage contrôlé", "Grimpe d'arbres", "Démontage contrôlé", "Gestion des déchets végétaux"],
  en: ["Pruning at height", "Controlled felling", "Tree climbing", "Controlled dismantling", "Green waste management"]
};

// Nombres de los servicios (OfferCatalog) por idioma
const SERVICES = {
  es: ["Tala controlada de grandes árboles", "Poda en altura mediante trepa", "Trabajos en zonas inaccesibles", "Gestión de residuos de poda y tala"],
  eu: ["Zuhaitz handien mozketa kontrolatua", "Altuerako inausketa igoeraz", "Sarbide zaileko guneetako lanak", "Inausketa eta mozketa hondakinen kudeaketa"],
  fr: ["Abattage contrôlé de grands arbres", "Élagage en hauteur par grimpe", "Travaux en zones inaccessibles", "Gestion des déchets d'élagage et d'abattage"],
  en: ["Controlled felling of large trees", "Pruning at height by climbing", "Work in inaccessible areas", "Pruning and felling waste management"]
};

const SERVICE_TYPE = {
  es: "Poda y tala de árboles en altura",
  eu: "Zuhaitzen inausketa eta mozketa altueran",
  fr: "Élagage et abattage d'arbres en hauteur",
  en: "Tree pruning and felling at height"
};

const AREA_SERVED = {
  es: "Navarra y País Vasco", eu: "Nafarroa eta Euskal Herria",
  fr: "Navarre et Pays basque", en: "Navarre and the Basque Country"
};

// Preguntas frecuentes (servicios) por idioma — paridad con la sección visible
const FAQ = {
  es: [
    ["¿Cuánto cuesta talar un árbol grande en altura?", "El coste depende de la altura, el entorno y la dificultad de acceso. Al trabajar por trepa y sin grúa, abaratamos el precio frente a la maquinaria pesada. Damos presupuesto sin compromiso."],
    ["¿Cuándo necesito una tala controlada en altura?", "Cuando un árbol presenta riesgo de caída, está cerca de una casa o un vallado, o no se puede entrar con maquinaria. Subimos al árbol y lo cortamos trozo a trozo de forma controlada."],
    ["¿Podéis quitar un árbol pegado a una casa sin dañarla?", "Sí. Apeamos el árbol trozo a trozo desde arriba y bajamos cada corte con cuerda, protegiendo casas, vallados e instalaciones cercanas."],
    ["¿Trabajáis en sitios donde no entra la maquinaria?", "Sí. Nos especializamos en zonas inaccesibles para grúas y máquinas. Al trabajar con técnicas de trepa abaratamos costes porque no necesitamos grandes medios."],
    ["¿Os encargáis de retirar los restos de la poda o la tala?", "Sí, gestionamos los residuos de podas y talas y dejamos la zona limpia."],
    ["¿En qué zonas trabajáis?", "En Navarra (Lesaka, Bera, Igantzi, Etxalar y el resto de Bortziri / Cinco Villas) y en Gipuzkoa (Irun, Hondarribia y alrededores). Consúltanos tu caso sin compromiso."]
  ],
  eu: [
    ["Zenbat balio du zuhaitz handi bat altueran moztzeak?", "Kostua altueraren, ingurunearen eta sarbidearen zailtasunaren araberakoa da. Igoeraz eta gururik gabe lan eginez, prezioa merkatzen dugu makineria astunaren aldean. Konpromisorik gabeko aurrekontua ematen dugu."],
    ["Noiz behar dut altuerako mozketa kontrolatu bat?", "Zuhaitzak erortzeko arriskua duenean, etxe edo hesi batetik gertu dagoenean, edo makineriarekin sartu ezin denean. Zuhaitzera igo eta zatika mozten dugu, modu kontrolatuan."],
    ["Etxe bati itsatsitako zuhaitz bat ken dezakezue kalterik egin gabe?", "Bai. Zuhaitza goitik behera zatika apeatzen dugu eta moztutako zati bakoitza sokaz jaisten dugu, inguruko etxe, hesi eta instalazioak babestuz."],
    ["Makineria sartzen ez den tokietan lan egiten duzue?", "Bai. Gururako eta makinetarako sarbide zaileko guneetan espezializatuta gaude. Igoera-teknikekin lan eginez kostuak merkatzen ditugu, ez baitugu bitarteko handirik behar."],
    ["Inausketako edo mozketako hondarrak kentzeaz arduratzen zarete?", "Bai, inausketa eta mozketako hondakinak kudeatzen ditugu eta eremua garbi uzten dugu."],
    ["Zein eremutan lan egiten duzue?", "Nafarroan (Lesaka, Bera, Igantzi, Etxalar eta gainerako Bortziri / Bost Iriak) eta Gipuzkoan (Irun, Hondarribia eta inguruak). Galdetu zure kasua konpromisorik gabe."]
  ],
  fr: [
    ["Combien coûte l'abattage d'un grand arbre en hauteur ?", "Le coût dépend de la hauteur, de l'environnement et de la difficulté d'accès. En travaillant par grimpe et sans grue, nous réduisons le prix par rapport à la machinerie lourde. Devis sans engagement."],
    ["Quand ai-je besoin d'un abattage contrôlé en hauteur ?", "Lorsqu'un arbre présente un risque de chute, est proche d'une maison ou d'une clôture, ou que la machinerie ne peut pas accéder. Nous montons dans l'arbre et le coupons morceau par morceau de façon contrôlée."],
    ["Pouvez-vous retirer un arbre collé à une maison sans l'endommager ?", "Oui. Nous démontons l'arbre morceau par morceau depuis le haut et descendons chaque coupe à la corde, en protégeant maisons, clôtures et installations proches."],
    ["Travaillez-vous là où la machinerie ne peut pas accéder ?", "Oui. Nous sommes spécialisés dans les zones inaccessibles aux grues et aux machines. En travaillant par grimpe, nous réduisons les coûts car nous n'avons pas besoin de gros moyens."],
    ["Vous chargez-vous d'enlever les restes de l'élagage ou de l'abattage ?", "Oui, nous gérons les déchets d'élagage et d'abattage et laissons la zone propre."],
    ["Dans quelles zones travaillez-vous ?", "En Navarre (Lesaka, Bera, Igantzi, Etxalar et le reste de Bortziri / Cinco Villas) et au Guipuscoa (Irun, Hondarribia et alentours). Parlez-nous de votre cas sans engagement."]
  ],
  en: [
    ["How much does it cost to fell a large tree at height?", "The cost depends on the height, the surroundings and how hard the access is. By working with climbing and no crane, we lower the price compared with heavy machinery. We give a free, no-obligation quote."],
    ["When do I need a controlled felling at height?", "When a tree is at risk of falling, is close to a house or fence, or machinery cannot get in. We climb the tree and cut it piece by piece in a controlled way."],
    ["Can you remove a tree right next to a house without damaging it?", "Yes. We dismantle the tree piece by piece from above and lower each cut with a rope, protecting nearby houses, fences and installations."],
    ["Do you work where machinery cannot get in?", "Yes. We specialise in areas inaccessible to cranes and machines. By working with climbing techniques we lower costs because we don't need heavy equipment."],
    ["Do you take care of removing the pruning or felling debris?", "Yes, we manage the pruning and felling waste and leave the area clean."],
    ["Which areas do you work in?", "In Navarre (Lesaka, Bera, Igantzi, Etxalar and the rest of Bortziri / Cinco Villas) and in Gipuzkoa (Irun, Hondarribia and the surrounding area). Tell us about your case with no obligation."]
  ]
};

// URL absoluta de una página en un idioma
function pageUrl(pageKey, lang) {
  const dir = LANGS.find(l => l.code === lang).dir;
  return `${SITE}${dir}/${pageKey ? pageKey + "/" : ""}`;
}

// Serializa un objeto a un <script type="application/ld+json">
function ldScript(obj) {
  return `  <script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n  </script>`;
}

// Migas de pan localizadas para una página interna
function breadcrumbLd(pageKey, lang) {
  const c = CRUMB[lang] || CRUMB.es;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": c.inicio, "item": pageUrl("", lang) },
      { "@type": "ListItem", "position": 2, "name": c[pageKey] || pageKey, "item": pageUrl(pageKey, lang) }
    ]
  };
}

// LocalBusiness canónico (#business) — entidad única referida por @id en todo el sitio
function businessLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE}/#business`,
    "name": "Boralan",
    "description": BIZ_DESC[lang] || BIZ_DESC.es,
    "url": pageUrl("", lang),
    "email": "boralan04@gmail.com",
    "telephone": "+34628850027",
    "image": `${SITE}/assets/img/equipo-boralan-retrato-1200.webp`,
    "logo": `${SITE}/assets/img/boralan-logo.png`,
    "priceRange": "€€",
    "foundingDate": "2024",
    "slogan": "Subir donde otros no llegan",
    "founder": [
      { "@type": "Person", "name": "Iker Iturria Pombar" },
      { "@type": "Person", "name": "Beñat Ordoki Telletxea" },
      { "@type": "Person", "name": "Jon Erro Fagoaga" }
    ],
    "areaServed": [
      { "@type": "City", "name": "Lesaka" },
      { "@type": "City", "name": "Bera" },
      { "@type": "City", "name": "Igantzi" },
      { "@type": "City", "name": "Etxalar" },
      { "@type": "City", "name": "Irun" },
      { "@type": "City", "name": "Hondarribia" },
      { "@type": "AdministrativeArea", "name": "Bortziri / Cinco Villas" },
      { "@type": "AdministrativeArea", "name": "Gipuzkoa" },
      { "@type": "State", "name": "Navarra" }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lesaka",
      "addressRegion": "Navarra",
      "postalCode": "31770",
      "addressCountry": "ES"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 43.2447, "longitude": -1.7019 },
    "sameAs": ["https://www.instagram.com/boralan04/"],
    "knowsAbout": KNOWS[lang] || KNOWS.es
  };
}

// Service + OfferCatalog (home), referido al #business como provider
function serviceLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE}/#service`,
    "serviceType": SERVICE_TYPE[lang] || SERVICE_TYPE.es,
    "url": pageUrl("servicios", lang),
    "provider": { "@id": `${SITE}/#business` },
    "areaServed": AREA_SERVED[lang] || AREA_SERVED.es,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de arboricultura",
      "itemListElement": (SERVICES[lang] || SERVICES.es).map(name => ({
        "@type": "Offer", "itemOffered": { "@type": "Service", "name": name }
      }))
    }
  };
}

// FAQPage localizado (servicios)
function faqLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (FAQ[lang] || FAQ.es).map(([q, a]) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  };
}

// LocalBusiness de la página de contacto: referencia al #business + url propia
function contactBusinessLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE}/#business`,
    "name": "Boralan",
    "image": `${SITE}/assets/img/equipo-boralan-retrato-1200.webp`,
    "telephone": "+34628850027",
    "email": "boralan04@gmail.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Lesaka", "addressRegion": "Navarra", "postalCode": "31770", "addressCountry": "ES" },
    "geo": { "@type": "GeoCoordinates", "latitude": 43.2447, "longitude": -1.7019 },
    "url": pageUrl("contacto", lang),
    "areaServed": AREA_SERVED[lang] || AREA_SERVED.es
  };
}

// Organization (nosotros) — misma entidad que el negocio (@id #business)
function organizationLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#business`,
    "name": "Boralan",
    "url": pageUrl("", lang),
    "logo": `${SITE}/assets/img/boralan-logo.png`,
    "foundingDate": "2024",
    "founder": [
      { "@type": "Person", "name": "Iker Iturria Pombar" },
      { "@type": "Person", "name": "Beñat Ordoki Telletxea" },
      { "@type": "Person", "name": "Jon Erro Fagoaga" }
    ],
    "foundingLocation": "Lesaka, Navarra",
    "sameAs": ["https://www.instagram.com/boralan04/"]
  };
}

// Devuelve el conjunto de bloques JSON-LD (string) para una página/idioma
function buildJsonLd(pageKey, lang) {
  let blocks = [];
  if (pageKey === "") {
    blocks = [businessLd(lang), serviceLd(lang)];
  } else if (pageKey === "servicios") {
    blocks = [breadcrumbLd("servicios", lang), faqLd(lang)];
  } else if (pageKey === "nosotros") {
    blocks = [breadcrumbLd("nosotros", lang), organizationLd(lang)];
  } else if (pageKey === "contacto") {
    blocks = [breadcrumbLd("contacto", lang), contactBusinessLd(lang)];
  } else if (pageKey === "galeria") {
    blocks = [breadcrumbLd("galeria", lang)];
  } else {
    return null; // páginas sin JSON-LD (legales)
  }
  return blocks.map(ldScript).join("\n");
}

// Elimina los bloques JSON-LD existentes y reinyecta los generados antes de </head>
function injectJsonLd(html, pageKey, lang) {
  // quitar comentarios de esquema huérfanos (p.ej. <!-- Schema.org: ... -->, <!-- FAQ schema -->)
  html = html.replace(/[ \t]*<!--[^>]*[Ss]chema[^>]*-->\n?/g, "");
  // quitar todos los <script type="application/ld+json"> ... </script> previos
  html = html.replace(/[ \t]*<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, "");
  const generated = buildJsonLd(pageKey, lang);
  if (generated) {
    html = html.replace(/<\/head>/, `${generated}\n</head>`);
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

  // 4b) structured data (JSON-LD) localizado: reemplaza los bloques de la fuente
  //     por los generados con URLs de idioma y textos traducidos.
  html = injectJsonLd(html, pageKey, lang);

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

  // structured data (JSON-LD) localizado en español (idempotente: borra y reinyecta)
  html = injectJsonLd(html, pageKey, "es");

  // SEO: title, description, OG/twitter title+desc desde META (misma fuente que eu/fr/en)
  const meta = META.es && META.es[pageKey];
  if (meta) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`);
    html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${meta.desc}$2`);
    html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${meta.title}$2`);
    html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${meta.desc}$2`);
    html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${meta.title}$2`);
    html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${meta.desc}$2`);
  }

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
// 0) CSS combinado (base.css + components.css -> styles.css) para servir un solo
//    archivo y evitar un salto extra en la cadena de solicitudes críticas del render.
/* Minificador CSS conservador: quita comentarios y espacios redundantes.
   No toca el interior de calc() (los espacios alrededor de + y - se conservan
   porque solo se colapsan espacios junto a {};:,> ). */
function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{};,>])\s*/g, "$1")
    .replace(/:\s+/g, ":")
    .replace(/;}/g, "}")
    .trim();
}

(function buildCombinedCss() {
  const dir = path.join(process.cwd(), "assets/css");
  const base = fs.readFileSync(path.join(dir, "base.css"), "utf8");
  const components = fs.readFileSync(path.join(dir, "components.css"), "utf8");
  const header = "/* BORALAN — generada y minificada por build.js desde base.css + components.css. No editar a mano. */\n";
  fs.writeFileSync(path.join(dir, "styles.css"), header + minifyCss(base + "\n" + components), "utf8");
  console.log("✓ assets/css/styles.css (combinado + minificado)");
})();

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
  // fecha local YYYY-MM-DD (evita el desfase UTC de toISOString en husos +N)
  const ymdLocal = (d) => {
    const p = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  };
  // lastmod real = fecha de última modificación del archivo fuente de cada página
  const lastmodOf = (pageKey) => {
    const src = path.join(process.cwd(), PAGES[pageKey] || "index.html");
    try { return ymdLocal(fs.statSync(src).mtime); }
    catch (e) { return today; }
  };
  const urls = [];
  for (const pageKey of inSitemap) {
    const slug = pageKey ? pageKey + "/" : "";
    const lastmod = lastmodOf(pageKey);
    for (const L of LANGS) {
      const alts = LANGS.map(a => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${SITE}${a.dir}/${slug}"/>`).join("\n");
      const xdef = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/${slug}"/>`;
      urls.push(
`  <url>
    <loc>${SITE}${L.dir}/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
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
