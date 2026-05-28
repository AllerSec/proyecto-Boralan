const puppeteer = require("puppeteer-core");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
function rectsOverlap(a, b) {
  return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
}
(async () => {
  const b = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ["--no-sandbox"] });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("boralan_visited", "1"); } catch (e) {} });
  await p.goto("http://127.0.0.1:4321/", { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 1200));
  const data = await p.evaluate(() => {
    const get = (sel) => { const el = document.querySelector(sel); if (!el) return null; const r = el.getBoundingClientRect(); return { left: r.left, top: r.top, right: r.right, bottom: r.bottom, w: r.width, h: r.height }; };
    return { scroll: get(".hero__scroll"), wa: get(".wa-float"), btn1: get(".hero__actions .btn"), verServicios: [...document.querySelectorAll(".hero__actions .btn")].map(e => { const r = e.getBoundingClientRect(); return { text: e.textContent.trim(), left: r.left, right: r.right, top: r.top, bottom: r.bottom }; }) };
  });
  console.log("scroll:", JSON.stringify(data.scroll));
  console.log("whatsapp:", JSON.stringify(data.wa));
  data.verServicios.forEach(btn => console.log("btn '" + btn.text + "':", JSON.stringify({ left: btn.left, right: btn.right, top: btn.top, bottom: btn.bottom })));
  if (data.scroll && data.wa) console.log("¿scroll choca con whatsapp?", rectsOverlap(data.scroll, data.wa));
  data.verServicios.forEach(btn => { if (data.scroll) console.log("¿scroll choca con '" + btn.text + "'?", rectsOverlap(data.scroll, btn)); });
  await b.close();
})().catch(e => { console.error(e.message); process.exit(1); });
