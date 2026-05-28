const puppeteer = require("puppeteer-core");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
(async () => {
  const b = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ["--no-sandbox"] });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("boralan_visited", "1"); } catch (e) {} });
  await p.goto("http://127.0.0.1:4321/", { waitUntil: "networkidle2" });
  // scroll hasta las stats para disparar el contador
  await p.evaluate(() => { const s = document.querySelector(".stats"); if (s) s.scrollIntoView(); });
  await new Promise(r => setTimeout(r, 2600));
  const vals = await p.evaluate(() => [...document.querySelectorAll(".stat__num span")].map(s => s.textContent));
  const labels = await p.evaluate(() => [...document.querySelectorAll(".stat__label")].map(s => s.textContent));
  vals.forEach((v, i) => console.log(v + "  —  " + labels[i]));
  await b.close();
})().catch(e => { console.error(e.message); process.exit(1); });
