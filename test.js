let skipped = true;

describe.skip("Skipped suite", function () {
  describe('Inner describe', () => {
    beforeAll(function () {
      skipped = false;
    });
    test("Test 1", function () {
    });
  });
  test("Test 2", function () {
  });
});

test("should be skipped", function() {
  expect(skipped).toBe(true);
});
