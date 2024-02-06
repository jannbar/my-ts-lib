import { test, expect } from "vitest";
import sum from "./sum";

test("sums two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
