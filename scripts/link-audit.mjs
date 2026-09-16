import { SOURCES } from "../data.js";

const entries = Object.entries(SOURCES);
const results = [];
let cursor = 0;

async function checkUrl(id, source) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);
  try {
    let response = await fetch(source.url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "Trener74-LinkAudit/1.0" },
    });
    if (!response.ok) {
      response = await fetch(source.url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: {
          "user-agent": "Trener74-LinkAudit/1.0",
          range: "bytes=0-1023",
        },
      });
    }
    return {
      id,
      status: response.status,
      ok: response.ok || response.status === 206,
      finalUrl: response.url,
    };
  } catch (error) {
    return { id, status: 0, ok: false, error: error.name };
  } finally {
    clearTimeout(timeout);
  }
}

async function worker() {
  while (cursor < entries.length) {
    const [id, source] = entries[cursor];
    cursor += 1;
    results.push(await checkUrl(id, source));
  }
}

await Promise.all(Array.from({ length: 4 }, () => worker()));
results.sort((a, b) => a.id.localeCompare(b.id));

for (const result of results) {
  const mark = result.ok ? "OK" : "FAIL";
  console.log(`${mark.padEnd(4)} ${String(result.status).padStart(3)} ${result.id}${result.error ? ` (${result.error})` : ""}`);
}

const failed = results.filter((result) => !result.ok);
if (failed.length > 0) {
  console.error(`\nNedostupné zdroje: ${failed.length}/${results.length}`);
  process.exitCode = 1;
} else {
  console.log(`\nVšech ${results.length} zdrojových URL odpovědělo úspěšně.`);
}
