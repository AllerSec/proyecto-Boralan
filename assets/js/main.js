/* ==========================================================================
   BORALAN — Motor principal
   GSAP + ScrollTrigger · loader, nav, reveals, microinteracciones
   ========================================================================== */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";
  if (hasGSAP && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  if (hasGSAP) gsap.defaults({ ease: "power3.out", duration: 0.9 });

  /* ----------------------------------------------------------------------
     1. PAGE LOADER (solo primera visita de la sesión)
     ---------------------------------------------------------------------- */
  function initLoader() {
    const loader = document.querySelector("[data-loader]");
    if (!loader) return;

    const alreadyVisited = sessionStorage.getItem("boralan_visited");
    if (alreadyVisited || prefersReduced || !hasGSAP) {
      loader.remove();
      document.documentElement.classList.add("is-ready");
      revealHero();
      return;
    }

    sessionStorage.setItem("boralan_visited", "1");
    document.documentElement.classList.add("is-loading");

    const counter = loader.querySelector("[data-loader-count]");
    const bar = loader.querySelector("[data-loader-bar]");
    const obj = { v: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.classList.remove("is-loading");
        document.documentElement.classList.add("is-ready");
        revealHero();
      }
    });

    tl.to(obj, {
      v: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => {
        const val = Math.round(obj.v);
        if (counter) counter.textContent = String(val).padStart(2, "0");
        if (bar) bar.style.transform = `scaleX(${obj.v / 100})`;
      }
    })
      .to(loader.querySelectorAll("[data-loader-word]"), {
        yPercent: -110, stagger: 0.08, duration: 0.7, ease: "power3.in"
      }, "-=0.3")
      .to(loader, {
        clipPath: "inset(0 0 100% 0)", duration: 0.8, ease: "power4.inOut"
      }, "-=0.2")
      .set(loader, { display: "none" });
  }

  /* ----------------------------------------------------------------------
     2. HERO reveal (al terminar loader o de inmediato)
     ---------------------------------------------------------------------- */
  function revealHero() {
    if (!hasGSAP || prefersReduced) {
      document.querySelectorAll("[data-hero-reveal]").forEach(el => el.style.opacity = 1);
      return;
    }
    const items = gsap.utils.toArray("[data-hero-reveal]");
    if (!items.length) return;
    gsap.fromTo(items,
      { yPercent: 120, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, duration: 1.1, stagger: 0.09, ease: "power4.out", delay: 0.1 }
    );
    const media = document.querySelector("[data-hero-media]");
    if (media) gsap.fromTo(media, { scale: 1.18, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1.6, ease: "power2.out" });
  }

  /* ----------------------------------------------------------------------
     3. HEADER scroll + mobile nav
     ---------------------------------------------------------------------- */
  function initHeader() {
    const header = document.querySelector("[data-header]");
    const toggle = document.querySelector("[data-nav-toggle]");
    const mobileNav = document.querySelector("[data-mobile-nav]");
    const navClose = document.querySelector("[data-nav-close]");

    if (header) {
      const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    if (toggle && mobileNav) {
      const close = () => {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
        document.body.style.overflow = "";
      };
      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        mobileNav.classList.toggle("is-open", !open);
        document.body.style.overflow = open ? "" : "hidden";
      });
      if (navClose) navClose.addEventListener("click", close);
      mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
      document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
    }
  }

  /* ----------------------------------------------------------------------
     4. SCROLL REVEALS (data-reveal)
     ---------------------------------------------------------------------- */
  function initReveals() {
    if (!hasGSAP || !window.ScrollTrigger) {
      document.querySelectorAll("[data-reveal]").forEach(el => el.style.opacity = 1);
      return;
    }
    if (prefersReduced) {
      document.querySelectorAll("[data-reveal]").forEach(el => gsap.set(el, { autoAlpha: 1, y: 0 }));
      return;
    }

    gsap.utils.toArray("[data-reveal]").forEach((el) => {
      const y = parseFloat(el.dataset.revealY || "40");
      gsap.fromTo(el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
        }
      );
    });

    // grupos con stagger (data-reveal-group -> hijos data-reveal-item)
    gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
      const items = group.querySelectorAll("[data-reveal-item]");
      gsap.fromTo(items,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: group, start: "top 80%", toggleActions: "play none none none" }
        }
      );
    });

    // texto que aparece por líneas (data-reveal-lines)
    gsap.utils.toArray("[data-reveal-lines] .line__inner").forEach((line) => {
      gsap.fromTo(line,
        { yPercent: 115 },
        {
          yPercent: 0, duration: 1.1, ease: "power4.out",
          scrollTrigger: { trigger: line, start: "top 92%" }
        }
      );
    });
  }

  /* ----------------------------------------------------------------------
     5. PARALLAX por scroll (data-parallax = velocidad)
     ---------------------------------------------------------------------- */
  function initParallax() {
    if (!hasGSAP || !window.ScrollTrigger || prefersReduced) return;
    gsap.utils.toArray("[data-parallax]").forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || "0.15");
      gsap.to(el, {
        yPercent: () => speed * 100,
        ease: "none",
        scrollTrigger: { trigger: el.closest("[data-parallax-wrap]") || el, start: "top bottom", end: "bottom top", scrub: true }
      });
    });
  }

  /* ----------------------------------------------------------------------
     6. CONTADORES (data-count)
     ---------------------------------------------------------------------- */
  function initCounters() {
    const els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    els.forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.countSuffix || "";
      const decimals = parseInt(el.dataset.countDecimals || "0", 10);
      const fmt = (v) => {
        const n = decimals ? v.toFixed(decimals) : Math.round(v);
        return new Intl.NumberFormat("es-ES").format(n) + suffix;
      };
      if (!hasGSAP || !window.ScrollTrigger || prefersReduced) { el.textContent = fmt(target); return; }
      const o = { v: 0 };
      gsap.to(o, {
        v: target, duration: 2, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => { el.textContent = fmt(o.v); }
      });
    });
  }

  /* ----------------------------------------------------------------------
     7. BOTONES MAGNÉTICOS + microinteracción de cursor
     ---------------------------------------------------------------------- */
  function initMagnetic() {
    if (prefersReduced || !hasGSAP) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic || "0.4");
      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      });
      el.addEventListener("mouseleave", () => { xTo(0); yTo(0); });
    });
  }

  /* ----------------------------------------------------------------------
     8. TILT / reacción al ratón en tarjetas (data-tilt)
     ---------------------------------------------------------------------- */
  function initTilt() {
    if (prefersReduced || !hasGSAP) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.querySelectorAll("[data-tilt]").forEach((el) => {
      const max = parseFloat(el.dataset.tilt || "6");
      const rx = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3.out" });
      const ry = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3.out" });
      gsap.set(el, { transformPerspective: 800, transformOrigin: "center" });
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry(px * max * 2); rx(-py * max * 2);
      });
      el.addEventListener("mouseleave", () => { rx(0); ry(0); });
    });
  }

  /* ----------------------------------------------------------------------
     9. COOKIE BANNER
     ---------------------------------------------------------------------- */
  function initCookies() {
    const banner = document.querySelector("[data-cookie]");
    if (!banner) return;
    if (localStorage.getItem("boralan_cookies")) { banner.remove(); return; }
    setTimeout(() => banner.classList.add("is-visible"), 1400);
    banner.querySelectorAll("[data-cookie-accept], [data-cookie-reject]").forEach((btn) => {
      btn.addEventListener("click", () => {
        localStorage.setItem("boralan_cookies", btn.hasAttribute("data-cookie-accept") ? "accept" : "reject");
        banner.classList.remove("is-visible");
        setTimeout(() => banner.remove(), 600);
      });
    });
  }

  /* ----------------------------------------------------------------------
     10. LIGHTBOX (galería) — data-lightbox
     Construido con DOM seguro (sin innerHTML) para evitar cualquier XSS.
     ---------------------------------------------------------------------- */
  function initLightbox() {
    const triggers = document.querySelectorAll("[data-lightbox]");
    if (!triggers.length) return;

    const box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Imagen ampliada");

    const closeBtn = document.createElement("button");
    closeBtn.className = "lightbox__close";
    closeBtn.setAttribute("aria-label", "Cerrar");
    closeBtn.textContent = "×";

    const fig = document.createElement("figure");
    fig.className = "lightbox__fig";
    const img = document.createElement("img");
    img.alt = "";
    const cap = document.createElement("figcaption");
    fig.append(img, cap);
    box.append(closeBtn, fig);
    document.body.appendChild(box);

    const open = (src, alt) => {
      img.src = src; img.alt = alt || ""; cap.textContent = alt || "";
      box.classList.add("is-open"); document.body.style.overflow = "hidden";
    };
    const close = () => { box.classList.remove("is-open"); document.body.style.overflow = ""; };

    triggers.forEach((t) => {
      t.style.cursor = "zoom-in";
      t.addEventListener("click", () => {
        const innerImg = t.querySelector("img");
        const full = t.dataset.lightbox || (innerImg && (innerImg.currentSrc || innerImg.src));
        open(full, innerImg && innerImg.alt);
      });
    });
    box.addEventListener("click", (e) => { if (e.target === box || e.target === closeBtn) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ----------------------------------------------------------------------
     11. CARRUSEL simple (data-carousel)
     ---------------------------------------------------------------------- */
  function initCarousels() {
    document.querySelectorAll("[data-carousel]").forEach((root) => {
      const track = root.querySelector("[data-carousel-track]");
      const prev = root.querySelector("[data-carousel-prev]");
      const next = root.querySelector("[data-carousel-next]");
      if (!track) return;
      const step = () => {
        const first = track.querySelector("*");
        return first ? first.getBoundingClientRect().width + 16 : 320;
      };
      prev && prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
      next && next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
    });
  }

  /* ----------------------------------------------------------------------
     11b. HERO carrusel (fotos, fundido cruzado + Ken Burns, autoplay pausable)
     ---------------------------------------------------------------------- */
  function initHeroCarousel() {
    const root = document.querySelector("[data-hero-carousel]");
    if (!root) return;
    const slides = Array.from(root.querySelectorAll(".hero__slide"));
    if (slides.length < 2) return;
    const dotsWrap = document.querySelector("[data-hero-dots]");
    const INTERVAL = 5000;
    let index = slides.findIndex(s => s.classList.contains("is-active"));
    if (index < 0) index = 0;
    let timer = null;
    let visible = true;

    // Construir dots accesibles
    const dots = slides.map((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "hero__dot";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", "Imagen " + (i + 1));
      b.setAttribute("aria-selected", i === index ? "true" : "false");
      b.addEventListener("click", () => { go(i); restart(); });
      dotsWrap && dotsWrap.appendChild(b);
      return b;
    });

    function go(next) {
      if (next === index) return;
      slides[index].classList.remove("is-active");
      dots[index] && dots[index].setAttribute("aria-selected", "false");
      index = (next + slides.length) % slides.length;
      // reiniciar la animación Ken Burns de la nueva activa
      const img = slides[index].querySelector(".hero__slide-img");
      if (img) { img.style.animation = "none"; void img.offsetWidth; img.style.animation = ""; }
      slides[index].classList.add("is-active");
      dots[index] && dots[index].setAttribute("aria-selected", "true");
    }

    function tick() { go(index + 1); }
    function start() {
      if (prefersReduced || timer || !visible) return;
      timer = window.setInterval(tick, INTERVAL);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function restart() { stop(); start(); }

    // Pausar cuando la pestaña no está visible
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop(); else start();
    });

    // Pausar cuando el hero sale del viewport
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
        visible ? start() : stop();
      }, { threshold: 0.15 }).observe(root);
    }

    start();
  }

  /* ----------------------------------------------------------------------
     12. AÑO dinámico footer
     ---------------------------------------------------------------------- */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  }

  /* ----------------------------------------------------------------------
     INIT
     ---------------------------------------------------------------------- */
  function init() {
    initLoader();
    initHeader();
    initReveals();
    initParallax();
    initCounters();
    initMagnetic();
    initTilt();
    initCookies();
    initLightbox();
    initCarousels();
    initHeroCarousel();
    initYear();
    if (hasGSAP && window.ScrollTrigger) {
      window.addEventListener("load", () => ScrollTrigger.refresh());
      if (document.fonts) document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
