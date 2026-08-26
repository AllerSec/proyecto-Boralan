/* ==========================================================================
   BORALAN — aviso a IndexNow (Bing, Copilot y buscadores asociados)

   Lee las URLs del sitemap.xml y las envía al endpoint de IndexNow para que
   Bing reindexe los cambios al instante. Ejecutar tras cada deploy:

     node indexnow-ping.js
   ========================================================================== */
const fs = require("fs");
const path = require("path");

const HOST = "boralan.eus";
const KEY = "e85cabad008e641d866ee778e4e81360";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const sitemap = fs.readFileSync(path.join(__dirname, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const urlList = [...new Set(urls)];

if (!urlList.length) {
  console.error("No se encontraron URLs en sitemap.xml");
  process.exit(1);
}

fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList })
}).then(async (res) => {
  console.log(`IndexNow: HTTP ${res.status} — ${urlList.length} URLs enviadas`);
  const body = await res.text();
  if (body) console.log(body);
  if (res.status >= 400) process.exit(1);
}).catch((err) => {
  console.error("Error al contactar con IndexNow:", err.message);
  process.exit(1);
});
