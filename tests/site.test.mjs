import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('standalone HTML contains all interactive stations', () => {
  for (const id of ['archive','labels','generator','bingo','pay','gauntlet','report','incident-grid','label-output','ticket-id','bingo-grid','pay-results','gauntlet-next','report-form']) {
    assert.ok(html.includes('id="' + id + '"'), id);
  }
});
test('all fictional content and interactive logic is included in one file', () => {
  const inline = html.match(/<script>([\s\S]*?)<\/script>/);
  assert.ok(inline, 'inline script not found');
  assert.doesNotThrow(() => new vm.Script(inline[1]));
  assert.ok((inline[1].match(/\bC\('/g) || []).length >= 70, 'less than 70 fictional incidents');
  for (const needle of ['TRUST ME BRO','MDF RUN?!?!','LARRINA KNOWS','LOAD-BEARING ETHERNET','calculateEffectivePay','hasBingo','PORTALS']) {
    assert.ok(inline[1].includes(needle), needle);
  }
});
test('protect real jobs and user stories by design', () => {
  assert.match(html, /FICTIONAL/i);
  assert.match(html, /DON.T INCLUDE REAL|Don.t include real/i);
  assert.match(html, /localStorage/);
  assert.doesNotMatch(html, /<script\s+src=/i);
  assert.doesNotMatch(html, /fetch\s*\(/);
});
test('all main actions are wired in script', () => {
  for (const id of ['ticket-generate','ticket-copy','bingo-new','bingo-reset','pay-form','gauntlet-next','gauntlet-restart','report-form','report-export']) {
    assert.ok(html.includes('id="' + id + '"'));
    assert.ok(html.includes("'#" + id + "'"), 'handler missing: ' + id);
  }
});
