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

/**
 * lhs, rhs: valid matrices
 *
 * Element-wise matrixElement * number
 */
bm.mul = function(matrix, number) {
  let mat = [];
  let currentRow = [];

  for (let i = 0; i < matrix.length; ++i) {
    currentRow = [];
    for (let j = 0; j < matrix[0].length; ++j) {
      currentRow.push(matrix[i][j] * number);
    }
    mat.push(currentRow);
  }

  return mat;
};

/**
 * matrix: valid matrix
 */
bm.transpose = function(matrix) {
  let mat = [];
  let currentRow = [];

  for (let j = 0; j < matrix[0].length; ++j) {
    currentRow = [];
    for (let i = 0; i < matrix.length; ++i) {
      currentRow.push(matrix[i][j]);
    }
    mat.push(currentRow);
  }

  return mat;
};

/**
 * lhs, rhs: valid matrices
 */
bm.dot = function(lhs, rhs) {
  let mat = [];
  let currentRow = [];
  let numberOfRows = lhs.length;
  let numberOfCols = rhs[0].length;
  let newSize = lhs[0].length;
  let currentNum = 0;

  for (let i = 0; i < numberOfRows; ++i) {
    currentRow = [];
    for (let j = 0; j < numberOfCols; ++j) {
      currentNum = 0;
      for (let k = 0; k < newSize; ++k) {
        currentNum += lhs[i][k] * rhs[k][j];
      }
      currentRow.push(currentNum);
    }
    mat.push(currentRow);
  }

  return mat;
};

/**
 * matrix: valid square matrix
 */
bm.inv = function(matrix) {
  let dim = matrix.length;
  let i = 0;
  let ii = 0;
  let j = 0;
  let e = 0;
  let t = 0;
  // Identity matrix
  var I = [];
  // Copy of input matrix
  var C = [];

  // Initialize the identity matrix and make a copy of the input matrix
  for (i = 0; i < dim; i++) {
    I[I.length] = [];
    C[C.length] = [];
    for (j = 0; j < dim; j++) {
      if (i == j) {
        I[i][j] = 1;
      } else {
        I[i][j] = 0;
      }
      C[i][j] = matrix[i][j];
    }
  }

  // Perform elementary row operations
  for (i = 0; i < dim; i++) {
    e = C[i][i];

    if (e == 0) {
      for (ii = i + 1; ii < dim; ii++) {
        if (C[ii][i] != 0) {
          for (j = 0; j < dim; j++) {
            e = C[i][j];
            C[i][j] = C[ii][j];
            C[ii][j] = e;
            e = I[i][j];
            I[i][j] = I[ii][j];
            I[ii][j] = e;
          }
          break;
        }
      }

      e = C[i][i];

      if (e == 0) {
        return;
      }
    }

    for (j = 0; j < dim; j++) {
      C[i][j] = C[i][j] / e;
      I[i][j] = I[i][j] / e;
    }

    for (ii = 0; ii < dim; ii++) {
      if (ii == i) {
        continue;
      }

      e = C[ii][i];

      for (j = 0; j < dim; j++) {
        C[ii][j] -= e * C[i][j];
        I[ii][j] -= e * I[i][j];
      }
    }
  }

  return I;
};
