import {describe, expect, it} from 'vitest';

describe("Sample Test Block", () => {
    it("sample test which should be true", () => {

        expect(true).toBe(true);

        expect(!!2).toBe(true);
    })
});
