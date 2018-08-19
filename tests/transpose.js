QUnit.module('transpose');
QUnit.test('2x3', function(assert) {
  let matrix = [[1, 2, 3], [4, 5, 6]];
  let result = bm.transpose(matrix);
  let expected = [[1, 4], [2, 5], [3, 6]];
  assert.ok(bm.equal(result, expected));
});

QUnit.test('3x3', function(assert) {
  let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  let result = bm.transpose(matrix);
  let expected = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
  assert.ok(bm.equal(result, expected));
});

QUnit.test('3x4', function(assert) {
  let matrix = [[1, 2, 3, 1], [4, 5, 6, 2], [7, 8, 9, 3]];
  let result = bm.transpose(matrix);
  let expected = [[1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 2, 3]];
  assert.ok(bm.equal(result, expected));
});

QUnit.test('4x1', function(assert) {
  let matrix = [[1], [2], [3], [4]];
  let result = bm.transpose(matrix);
  let expected = [[1, 2, 3, 4]];
  assert.ok(bm.equal(result, expected));
});
