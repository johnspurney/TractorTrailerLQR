QUnit.module('mul');
QUnit.test('1x1 & one', function(assert) {
  let matrix = [[2]];
  let number = 1;
  let result = bm.mul(matrix, number);
  let expected = [[2]];
  assert.ok(bm.equal(result, expected));
});

QUnit.test('1x1 & -one', function(assert) {
  let matrix = [[2]];
  let number = -1;
  let result = bm.mul(matrix, number);
  let expected = [[-2]];
  assert.ok(bm.equal(result, expected));
});

QUnit.test('3x2 & 8', function(assert) {
  let matrix = [[2, 11], [8, 9], [42, 5]];
  let number = 8;
  let result = bm.mul(matrix, number);
  let expected = [[16, 88], [64, 72], [336, 40]];
  assert.ok(bm.equal(result, expected));
});
