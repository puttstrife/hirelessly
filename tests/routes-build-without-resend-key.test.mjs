import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

for (const route of ["app/api/contact/route.ts", "app/api/demo-booking/route.ts"]) {
  test(`${route} does not construct Resend when the module loads`, async () => {
    const source = await readFile(route, "utf8");
    assert.doesNotMatch(source, /const resend = new Resend\(process\.env\.RESEND_API_KEY\);/);
  });
}
