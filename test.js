// Sample test script for Robot repository

function sum(a, b) {
  return a + b;
}

// Test
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// This test file can be run with Jest
// Run `npm install jest` and then `npx jest test.js`