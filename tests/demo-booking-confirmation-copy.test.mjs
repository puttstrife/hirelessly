import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("booking confirmation hides the booking wizard header", async () => {
  const source = await readFile("components/DemoBooking.tsx", "utf8");

  assert.match(source, /\{state\.step !== 7 && \(/);
});
