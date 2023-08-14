import helpers from "../../src/helpers";
import { describe, test } from 'vitest'

describe("cutString", () => {
  test("should cut string", () => {
    expect(helpers.cutString("hello", 3)).toBe("hel....");
  });

  test("should not cut string", () => {
    expect(helpers.cutString("hello")).toBe("hello");
  })
});