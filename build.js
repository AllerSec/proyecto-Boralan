/* ==========================================================================
   BORALAN — build de partials (idempotente)
   Inyecta header/footer/whatsapp/cookies en cada HTML del proyecto.
   Uso: node build.js   (ejecutable tantas veces como quieras)

   En cada página coloca un marcador simple:  <!--#HEADER#-->
   Tras el build queda envuelto:  <!--#HEADER#--> ...html... <!--#/HEADER#-->
   En sucesivas ejecuciones se reemplaza solo el contenido entre marcadores.
   ========================================================================== */
const fs = require("fs");
const path = require("path");

const WA_MSG = encodeURIComponent("Hola, he visto vuestra web y quería pedir un presupuesto para un trabajo de poda o tala.");
const WA_LINK = `https://wa.me/34628850027?text=${WA_MSG}`;

const BRAND_MARK = `<svg class="brand__mark" viewBox="0 0 100 100" aria-hidden="true"><rect class="brand__trunk" x="44" y="6" width="12" height="88" rx="6"/><path class="brand__climber" d="M58 18c6 0 11 4 11 10 0 4-2 7-6 9l4 8-7 3-3-7-5 2 1 9-7 1-2-13c-3-1-5-4-5-7 0-5 4-9 9-9l3-9 4 0z"/><path class="brand__rope" d="M62 12 56 40" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>`;

const PARTIALS = {
  HEADER: `
  <header class="site-header" data-header>
    <div class="container header__inner">
      <a class="brand" href="/" aria-label="Boralan — inicio">${BRAND_MARK}<span>boralan</span></a>
      <nav class="nav" aria-label="Navegación principal">
        <a class="nav__link" href="/" data-nav="inicio">Inicio</a>
        <a class="nav__link" href="/servicios/" data-nav="servicios">Servicios</a>
        <a class="nav__link" href="/nosotros/" data-nav="nosotros">Nosotros</a>
        <a class="nav__link" href="/galeria/" data-nav="galeria">Galería</a>
        <a class="nav__link" href="/contacto/" data-nav="contacto">Contacto</a>
      </nav>
      <a class="btn header__cta" href="/contacto/" data-magnetic="0.25">Presupuesto</a>
      <button class="nav-toggle" data-nav-toggle aria-expanded="false" aria-controls="mobile-nav" aria-label="Abrir menú">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <nav class="mobile-nav" id="mobile-nav" data-mobile-nav aria-label="Navegación móvil">
    <ul class="mobile-nav__list" role="list">
      <li><a class="mobile-nav__link" href="/"><span class="idx">01</span>Inicio</a></li>
      <li><a class="mobile-nav__link" href="/servicios/"><span class="idx">02</span>Servicios</a></li>
      <li><a class="mobile-nav__link" href="/nosotros/"><span class="idx">03</span>Nosotros</a></li>
      <li><a class="mobile-nav__link" href="/galeria/"><span class="idx">04</span>Galería</a></li>
      <li><a class="mobile-nav__link" href="/contacto/"><span class="idx">05</span>Contacto</a></li>
    </ul>
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
          <a class="brand" href="/" aria-label="Boralan — inicio">${BRAND_MARK}<span>boralan</span></a>
          <p class="footer__tagline">Poda y tala de grandes árboles en altura. Trepa y apeos controlados en Navarra y País Vasco.</p>
        </div>
        <div>
          <p class="footer__title">Navegación</p>
          <div class="footer__links">
            <a href="/">Inicio</a>
            <a href="/servicios/">Servicios</a>
            <a href="/nosotros/">Nosotros</a>
            <a href="/galeria/">Galería</a>
            <a href="/contacto/">Contacto</a>
          </div>
        </div>
        <div>
          <p class="footer__title">Contacto</p>
          <div class="footer__links">
            <a href="tel:+34628850027">628 850 027</a>
            <a href="tel:+34628798602">628 798 602</a>
            <a href="mailto:boralan04@gmail.com">boralan04@gmail.com</a>
            <a href="https://www.instagram.com/boralan04/" target="_blank" rel="noopener">Instagram @boralan04</a>
            <span style="color:var(--text-dim)">Lesaka, Navarra</span>
          </div>
        </div>
      </div>
      <p class="footer__giant" aria-hidden="true">boralan</p>
      <div class="footer__bottom">
        <p>&copy; <span data-year>2026</span> Boralan · Lesaka, Navarra. Todos los derechos reservados.</p>
        <div class="footer__links" style="flex-direction:row; gap:1.2rem; flex-wrap:wrap">
          <a href="/aviso-legal/">Aviso legal</a>
          <a href="/politica-privacidad/">Privacidad</a>
          <a href="/politica-cookies/">Cookies</a>
        </div>
        <p class="footer__credit">Diseñado por <a href="https://unaxaller.com" target="_blank" rel="noopener">unaxaller.com</a></p>
      </div>
    </div>
  </footer>`,

  WHATSAPP: `
  <a class="wa-float" href="${WA_LINK}" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 31.7l8-2.1c2.3 1.3 5 1.9 7.7 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.5 0-4.9-.7-7-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5a12.9 12.9 0 0 1-2-6.9C2.8 8.7 8.7 2.9 16 2.9S29.2 8.7 29.2 16 23.3 28.9 16 28.9zm7.2-9.6c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.4-.6.1-.2 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.6-.9-.7h-.7c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.2-.7-.4z"/></svg>
  </a>`,

  COOKIES: `
  <div class="cookie-banner" data-cookie role="dialog" aria-live="polite" aria-label="Aviso de cookies">
    <p>Usamos cookies propias y técnicas para mejorar tu experiencia. Consulta nuestra <a href="/politica-cookies/">política de cookies</a>.</p>
    <div class="cookie-banner__actions">
      <button class="btn" data-cookie-accept type="button">Aceptar</button>
      <button class="btn btn--ghost" data-cookie-reject type="button">Rechazar</button>
    </div>
  </div>`
};

function inject(html, name) {
  const wrapped = `<!--#${name}#-->${PARTIALS[name]}\n  <!--#/${name}#-->`;
  const pairRe = new RegExp(`<!--#${name}#-->[\\s\\S]*?<!--#/${name}#-->`);
  if (pairRe.test(html)) return html.replace(pairRe, wrapped);
  const singleRe = new RegExp(`<!--#${name}#-->`);
  if (singleRe.test(html)) return html.replace(singleRe, wrapped);
  return html;
}

function buildPage(file) {
  let html = fs.readFileSync(file, "utf8");
  for (const name of Object.keys(PARTIALS)) html = inject(html, name);

  // limpia aria-current previos y marca el actual según data-page del <body>
  html = html.replace(/(<a class="nav__link" href="[^"]*" data-nav="[^"]*") aria-current="page"/g, "$1");
  const m = html.match(/<body[^>]*data-page="([^"]+)"/);
  if (m) {
    const page = m[1];
    html = html.replace(
      new RegExp(`(<a class="nav__link" href="[^"]*" data-nav="${page}")`),
      `$1 aria-current="page"`
    );
  }
  fs.writeFileSync(file, html, "utf8");
  console.log("✓", path.relative(process.cwd(), file));
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["assets", "node_modules", ".git"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) buildPage(full);
  }
}

walk(process.cwd());
console.log("Build completo.");
