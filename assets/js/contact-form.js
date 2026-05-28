/* ==========================================================================
   BORALAN — Formulario de contacto
   Validación en cliente + envío a Formspree con feedback accesible.
   ========================================================================== */
(function () {
  "use strict";
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");
  const submitBtn = form.querySelector("[data-submit]");
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const fieldOf = (input) => input.closest(".field");
  const errorOf = (name) => form.querySelector(`[data-error-for="${name}"]`);

  function setError(input, msg) {
    const f = fieldOf(input);
    const e = errorOf(input.name);
    if (f) f.classList.add("is-error");
    if (e) { e.textContent = msg; e.hidden = false; }
    input.setAttribute("aria-invalid", "true");
  }
  function clearError(input) {
    const f = fieldOf(input);
    const e = errorOf(input.name);
    if (f) f.classList.remove("is-error");
    if (e) { e.textContent = ""; e.hidden = true; }
    input.removeAttribute("aria-invalid");
  }

  function validate() {
    let firstInvalid = null;
    const checks = [
      ["name", (v) => v.trim().length >= 2, "Dinos tu nombre."],
      ["phone", (v) => v.replace(/\D/g, "").length >= 9, "Necesitamos un teléfono válido."],
      ["email", (v) => v === "" || EMAIL_RE.test(v), "Revisa el formato del email."],
      ["message", (v) => v.trim().length >= 5, "Cuéntanos brevemente qué necesitas."]
    ];
    checks.forEach(([name, fn, msg]) => {
      const input = form.elements[name];
      if (!input) return;
      if (fn(input.value)) clearError(input);
      else { setError(input, msg); if (!firstInvalid) firstInvalid = input; }
    });
    return firstInvalid;
  }

  // validación al salir del campo
  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("blur", () => {
      if (input.name === "_gotcha") return;
      const invalid = validate();
      // solo limpia/marca el campo actual sin robar foco
    });
    input.addEventListener("input", () => { if (input.getAttribute("aria-invalid")) clearError(input); });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const firstInvalid = validate();
    if (firstInvalid) { firstInvalid.focus(); return; }

    const action = form.getAttribute("action") || "";
    const usingFormspree = /formspree\.io\/f\/[a-z0-9]+$/i.test(action) && !/TU_ID_FORMSPREE/.test(action);

    // Fallback mailto si Formspree no está configurado
    if (!usingFormspree) {
      const data = new FormData(form);
      const body = [...data.entries()]
        .filter(([k]) => k !== "_gotcha")
        .map(([k, v]) => `${k}: ${v}`).join("\n");
      window.location.href = `mailto:boralan04@gmail.com?subject=${encodeURIComponent("Solicitud de presupuesto — web")}&body=${encodeURIComponent(body)}`;
      if (status) status.textContent = "Abriendo tu cliente de correo…";
      return;
    }

    submitBtn.disabled = true;
    const originalText = submitBtn.firstChild ? submitBtn.textContent : "Enviar";
    submitBtn.textContent = "Enviando…";
    if (status) { status.textContent = ""; status.style.color = ""; }

    try {
      const res = await fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        form.reset();
        if (status) { status.style.color = "#7CFC9B"; status.textContent = "¡Gracias! Hemos recibido tu solicitud. Te contactamos enseguida."; }
        submitBtn.textContent = "Enviado ✓";
      } else {
        throw new Error("Formspree error");
      }
    } catch (err) {
      if (status) { status.style.color = "#ff7676"; status.textContent = "No se pudo enviar. Llámanos al 628 850 027 o escríbenos a boralan04@gmail.com."; }
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
})();
