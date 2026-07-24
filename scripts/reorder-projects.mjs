import fs from "node:fs";

const p = "src/content/projects.ts";
const s = fs.readFileSync(p, "utf8");
const start = s.indexOf("export const projects");
const arrStart = s.indexOf("[", start);
const arrEnd = s.lastIndexOf("];");
const before = s.slice(0, arrStart + 1);
const after = s.slice(arrEnd);
const body = s.slice(arrStart + 1, arrEnd);

const objs = [];
let depth = 0;
let begin = -1;
for (let i = 0; i < body.length; i++) {
  const ch = body[i];
  if (ch === "{") {
    if (depth === 0) begin = i;
    depth++;
  } else if (ch === "}") {
    depth--;
    if (depth === 0 && begin >= 0) {
      objs.push(body.slice(begin, i + 1));
      begin = -1;
    }
  }
}

const priority = {
  gerloff: 0,
  "fico-mana": 1,
  "vividly-studio": 2,
  "malaya-studios": 3,
  "eras-studios": 4,
  camtech: 5,
};

function slugOf(o) {
  const m = o.match(/slug:\s*"([^"]+)"/);
  return m ? m[1] : "";
}

function rank(o) {
  const slug = slugOf(o);
  if (slug in priority) return priority[slug];
  if (o.includes("featured: true")) return 10;
  return 20;
}

objs.sort((a, b) => rank(a) - rank(b));
const out =
  before +
  "\n" +
  objs.map((o, idx) => o + (idx < objs.length - 1 ? "," : "")).join("\n") +
  "\n" +
  after;
fs.writeFileSync(p, out);
console.log(objs.map(slugOf).join(", "));
