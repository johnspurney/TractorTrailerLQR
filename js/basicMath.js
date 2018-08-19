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

/**
 * lhs, rhs: valid matrices
 *
 * Element-wise comparison lhsElement === rhsElement
 */
bm.equal = function(lhs, rhs) {
  let numRowsLhs = lhs.length;
  let numColsLhs = lhs[0].length;
  let numRowsRhs = rhs.length;
  let numColsRhs = rhs[0].length;

  if (numRowsLhs !== numRowsRhs || numColsLhs !== numColsRhs) {
    return false;
  }

  for (let i = 0; i < numRowsLhs; ++i) {
    for (let j = 0; j < numColsLhs; ++j) {
      if (lhs[i][j] !== rhs[i][j]) {
        return false;
      }
    }
  }

  return true;
};

/**
 * matrix: valid matrix
 *
 * Element-wise Math.abs(element)
 */
bm.abs = function(matrix) {
  let mat = [];
  let currentRow = [];

  for (let i = 0; i < matrix.length; ++i) {
    currentRow = [];
    for (let j = 0; j < matrix[0].length; ++j) {
      currentRow.push(Math.abs(matrix[i][j]));
    }
    mat.push(currentRow);
  }

  return mat;
};

/**
 * lhs, rhs: valid matrices
 *
 * Element-wise lhsElement - rhsElement
 */
bm.sub = function(lhs, rhs) {
  let mat = [];
  let currentRow = [];

  for (let i = 0; i < lhs.length; ++i) {
    currentRow = [];
    for (let j = 0; j < lhs[0].length; ++j) {
      currentRow.push(lhs[i][j] - rhs[i][j]);
    }
    mat.push(currentRow);
  }

  return mat;
};

/**
 * lhs, rhs: valid matrices
 *
 * Element-wise lhsElement + rhsElement
 */
bm.add = function(lhs, rhs) {
  let mat = [];
  let currentRow = [];

  for (let i = 0; i < lhs.length; ++i) {
    currentRow = [];
    for (let j = 0; j < lhs[0].length; ++j) {
      currentRow.push(lhs[i][j] + rhs[i][j]);
    }
    mat.push(currentRow);
  }

  return mat;
};
