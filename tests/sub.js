QUnit.module('sub');
QUnit.test('1x1', function(assert) {
  let lhs = [[1]];
  let rhs = [[1]];
  let result = bm.sub(lhs, rhs);
  let expected = [[0]];
  assert.ok(bm.equal(result, expected));
});

QUnit.test('1x3', function(assert) {
  let lhs = [[1, 2, 3]];
  let rhs = [[4, 5, 6]];
  let result = bm.sub(lhs, rhs);
  let expected = [[-3, -3, -3]];
  assert.ok(bm.equal(result, expected));
});

QUnit.test('3x1', function(assert) {
  let lhs = [[10], [12], [14]];
  let rhs = [[4], [5], [6]];
  let result = bm.sub(lhs, rhs);
  let expected = [[6], [7], [8]];
  assert.ok(bm.equal(result, expected));
});

QUnit.test('2x4', function(assert) {
  let lhs = [[5, 3, 7, 2], [9, 6, 1, 0]];
  let rhs = [[4, 2, 6, 1], [8, 5, 0, 0]];
  let result = bm.sub(lhs, rhs);
  let expected = [[1, 1, 1, 1], [1, 1, 1, 0]];
  assert.ok(bm.equal(result, expected));
});
