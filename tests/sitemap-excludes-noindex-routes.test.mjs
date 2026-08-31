import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("sitemap excludes the noindex service agreement route", async () => {
  const source = await readFile("app/sitemap.ts", "utf8");

  assert.doesNotMatch(source, /\$\{BASE_URL\}\/service-agreement/);
});
