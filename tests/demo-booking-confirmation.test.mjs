import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("demo booking confirmation is not blocked by an optional Airtable write", async () => {
  const source = await readFile("app/api/demo-booking/route.ts", "utf8");
  const bookingIndex = source.indexOf("const bookingRes = await fetch");
  const airtableWriteIndex = source.indexOf('if (AIRTABLE_BASE_ID && AIRTABLE_API_KEY)');

  assert.ok(bookingIndex >= 0, "booking request must remain present");
  assert.ok(airtableWriteIndex > bookingIndex, "Airtable write must happen after booking confirmation");
  assert.doesNotMatch(source, /if \(!AIRTABLE_BASE_ID \|\| !AIRTABLE_API_KEY\) \{\n\s+return NextResponse\.json\(\{ error: "Airtable is not configured" \}/);
});
