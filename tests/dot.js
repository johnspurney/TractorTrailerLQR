QUnit.module('dot');
QUnit.test('2x3 dot 3x2', function(assert) {
  let lhs = [[0, 4, -2], [-4, -3, 0]];
  let rhs = [[0, 1], [1, -1], [2, 3]];

  let result = bm.dot(lhs, rhs);
  let expected = [[0, -10], [-3, -1]];

  assert.ok(bm.equal(result, expected));
});

QUnit.test('3x2 dot 2x3', function(assert) {
  let lhs = [[0, 1], [1, -1], [2, 3]];
  let rhs = [[0, 4, -2], [-4, -3, 0]];

  let result = bm.dot(lhs, rhs);
  let expected = [[-4, -3, 0], [4, 7, -2], [-12, -1, -4]];

  assert.ok(bm.equal(result, expected));
});

QUnit.test('3x3 dot 3x3', function(assert) {
  let lhs = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  let rhs = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];

  let result = bm.dot(lhs, rhs);
  let expected = [[30, 24, 18], [84, 69, 54], [138, 114, 90]];

  assert.ok(bm.equal(result, expected));
});

QUnit.test('2x3 dot 3x1', function(assert) {
  let lhs = [[1, -1, 2], [0, -3, 1]];
  let rhs = [[2], [1], [0]];

  let result = bm.dot(lhs, rhs);
  let expected = [[1], [-3]];

  assert.ok(bm.equal(result, expected));
});

QUnit.test('(1x3 dot 3x3) dot 3x1', function(assert) {
  let lhs = [[42, 32, 22]];
  let mid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  let rhs = [[4], [3], [7]];

  let result = bm.dot(bm.dot(lhs, mid), rhs);
  let expected = [[6168]];

  assert.ok(bm.equal(result, expected));
});
