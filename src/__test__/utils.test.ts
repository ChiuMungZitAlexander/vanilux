import { expect, test } from "vitest";

import { deepCopy } from "src/utils";

test("Deep copy nullish", () => {
  expect(deepCopy(null)).toBe(null);
  expect(deepCopy()).toBe(undefined);
  expect(deepCopy(undefined)).toBe(undefined);
});

test("Deep copy primitive type", () => {
  expect(deepCopy(1)).toBe(1);
  expect(deepCopy(BigInt(78))).toBe(BigInt(78));
  expect(deepCopy(BigInt(""))).toBe(BigInt(""));
  expect(deepCopy(BigInt("0x1234"))).toBe(BigInt("0x1234"));
  expect(deepCopy(BigInt(true))).toBe(BigInt(true));
});

test("Deep copy array", () => {
  expect(deepCopy([])).toStrictEqual([]);

  const CASE_ARRAY_1 = [1, 2, 3];
  expect(deepCopy(CASE_ARRAY_1)).toStrictEqual(CASE_ARRAY_1);

  const CASE_ARRAY_2 = [1, 2, []];
  expect(deepCopy(CASE_ARRAY_2)).toStrictEqual(CASE_ARRAY_2);

  const CASE_ARRAY_3 = [["", "c", "d"], [], [0, ["1", "2"]]];
  expect(deepCopy(CASE_ARRAY_3)).toStrictEqual(CASE_ARRAY_3);

  const CASE_ARRAY_4 = [{ a: 1 }, { b: 2 }, { c: { c1: 999 } }];
  expect(deepCopy(CASE_ARRAY_4)).toStrictEqual(CASE_ARRAY_4);
});

test("Deep copy object", () => {
  expect(deepCopy({})).toStrictEqual({});

  const CASE_OBJECT_1 = { a: 1, b: 2 };
  expect(deepCopy(CASE_OBJECT_1)).toStrictEqual(CASE_OBJECT_1);

  const CASE_OBJECT_2 = {
    a: {},
    b: 2,
    c: [{ c1: [{ c1_1: "test" }] }, {}],
    d: { d1: { d1_1: "999" } },
  };
  expect(deepCopy(CASE_OBJECT_2)).toStrictEqual(CASE_OBJECT_2);
});
