QUnit.module('add');
QUnit.test('1x1', function(assert) {
  let lhs = [[1]];
  let rhs = [[1]];
  let result = bm.add(lhs, rhs);
  let expected = [[2]];
  assert.ok(bm.equal(result, expected));
});

QUnit.test('1x3', function(assert) {
  let lhs = [[1, 2, 3]];
  let rhs = [[4, 5, 6]];
  let result = bm.add(lhs, rhs);
  let expected = [[5, 7, 9]];
  assert.ok(bm.equal(result, expected));
});

QUnit.test('3x1', function(assert) {
  let lhs = [[10], [12], [14]];
  let rhs = [[4], [5], [6]];
  let result = bm.add(lhs, rhs);
  let expected = [[14], [17], [20]];
  assert.ok(bm.equal(result, expected));
});

QUnit.test('2x4', function(assert) {
  let lhs = [[5, 3, 7, 2], [9, 6, 1, 0]];
  let rhs = [[4, 2, 6, 1], [8, 5, 0, 0]];
  let result = bm.add(lhs, rhs);
  let expected = [[9, 5, 13, 3], [17, 11, 1, 0]];
  assert.ok(bm.equal(result, expected));
});

QUnit.test('negative number', function(assert) {
  let lhs = [[1]];
  let rhs = [[-1]];
  let result = bm.add(lhs, rhs);
  let expected = [[0]];
  assert.ok(bm.equal(result, expected));
});
