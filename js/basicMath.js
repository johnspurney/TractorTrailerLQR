/**
 * A mini math library that meets the needs of the simulator.
 *
 * Examples of valid matrices:
 * 1x1: [[1]]
 * 3x1: [[1], [2], [3]]
 * 1x3: [[1, 2, 3]]
 * 3x3: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 */
let bm = {};

/**
 * degrees: number
 *
 * Converts degrees to radians.
 */
bm.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

/**
 * radians: number
 *
 * Converts radians to degrees.
 */
bm.degrees = function(radians) {
  return radians * 180 / Math.PI;
};

/**
 * lhs: number
 * rhs: number
 *
 * Modulus operator that ignores sign.
 */
bm.mod = function(lhs, rhs) {
  return lhs - Math.floor(lhs / rhs) * rhs;
};

/**
 * mat: valid matrix
 *
 * Returns the largest number in the matrix.
 */
bm.max = function(mat) {
  let max = mat[0][0];
  let cur = max;

  for (let i = 0; i < mat.length; ++i) {
    cur = Math.max(...mat[i]);
    if (cur > max) {
      max = cur;
    }
  }

  return max;
};
