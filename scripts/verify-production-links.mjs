// Runs after next build against production HTML, with no browser or environment variables.
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(new URL('../lib/site-config.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } }).outputText;
const { siteConfig } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const requiredChannels = ['smartStore', 'youtube', 'instagram', 'naverPlace'];
const errors = [];
for (const channel of requiredChannels) {
  try {
    if (new URL(siteConfig.links[channel]).protocol !== 'https:') throw new Error();
  } catch { errors.push(`Missing or invalid official URL: ${channel}`); }
}
const routes = ['index', 'dakgalbi', 'story', 'content', 'store', 'news'];
for (const route of routes) {
  const html = readFileSync(new URL(`../.next/server/app/${route}.html`, import.meta.url), 'utf8');
  const anchors = [...html.matchAll(/<a\b[^>]*>/g)].map(match => match[0]);
  const expected = route === 'index' ? requiredChannels : route === 'store' ? ['smartStore', 'naverPlace'] : ['smartStore'];
  for (const channel of expected) {
    const url = siteConfig.links[channel];
    if (!url || !anchors.some(anchor => anchor.includes(`href="${url}"`))) errors.push(`${route}: missing ${channel} anchor`);
  }
  for (const anchor of anchors) {
    const href = anchor.match(/\bhref="([^"]*)"/)?.[1];
    if (!href || !requiredChannels.some(channel => siteConfig.links[channel] === href)) continue;
    const rel = anchor.match(/\brel="([^"]*)"/)?.[1]?.split(/\s+/) || [];
    if (!anchor.includes('target="_blank"') || !rel.includes('noopener') || !rel.includes('noreferrer')) errors.push(`${route}: unsafe external anchor`);
  }
  const buttons = [...html.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/g)].map(match => match[1]);
  if (buttons.some(text => /스마트스토어|유튜브 바로가기|인스타그램 바로가기|네이버 플레이스 바로가기/.test(text))) {
    errors.push(`${route}: official channel rendered as fallback button`);
  }
}
if (errors.length) throw new Error(errors.join('\n'));
console.log('Production links verified: 4 official channels, 6 routes, anchor destinations and new-tab attributes.');
