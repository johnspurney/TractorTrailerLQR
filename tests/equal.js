QUnit.module('equal');
QUnit.test('1x1 same values', function(assert) {
  let lhs = [[1]];
  let rhs = [[1]];
  let expected = true;
  assert.ok(bm.equal(lhs, rhs) === expected);
});

QUnit.test('1x2 same values', function(assert) {
  let lhs = [[1, 2]];
  let rhs = [[1, 2]];
  let expected = true;
  assert.ok(bm.equal(lhs, rhs) === expected);
});

QUnit.test('3x1 same values', function(assert) {
  let lhs = [[1], [2], [3]];
  let rhs = [[1], [2], [3]];
  let expected = true;
  assert.ok(bm.equal(lhs, rhs) === expected);
});

QUnit.test('3x3 same values', function(assert) {
  let lhs = [[0, 1, 3], [4, 5, 6], [7, 8, 9]];
  let rhs = [[0, 1, 3], [4, 5, 6], [7, 8, 9]];
  let expected = true;
  assert.ok(bm.equal(lhs, rhs) === expected);
});

QUnit.test('1x1 negative value', function(assert) {
  let lhs = [[1]];
  let rhs = [[-1]];
  let expected = false;
  assert.ok(bm.equal(lhs, rhs) === expected);
});

QUnit.test('3x3 different values', function(assert) {
  let lhs = [[0, 1, 3], [8, 5, 6], [7, 8, 9]];
  let rhs = [[0, 1, 3], [4, 5, 6], [7, 8, 9]];
  let expected = false;
  assert.ok(bm.equal(lhs, rhs) === expected);
});

QUnit.test('3x3 & 1x3 different sizes', function(assert) {
  let lhs = [[0, 1, 3], [8, 5, 6], [7, 8, 9]];
  let rhs = [[0, 1, 3]];
  let expected = false;
  assert.ok(bm.equal(lhs, rhs) === expected);
});
