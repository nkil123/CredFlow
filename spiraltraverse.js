// Given a matrix of m x n elements, where m is the number of rows and n is the
// number of columns. Write a program to return all elements of the matrix in spiral
// order.

function spiral (m, n, matrix) {
  let left = 0, right = n - 1, bottom = m - 1, top = 0;
  let count = 0, out = '';

  while (count < m * n) {
    for (let i = top; i <= bottom && count < m * n; i++) {
      out += matrix[i][left] + ' ';
      count++;
    }
    left++;
    // console.log(count)
    for (let i = left; i <= right && count < m * n; i++) {
      out += matrix[bottom][i] + ' ';
      count++;
    }
    bottom--;
    //console.log(count)
    for (let i = bottom; i >= top && count < m * n; i--) {
      out += matrix[i][right] + ' ';
      count++;
    }
    right--;
    // console.log(count)
    for (let i = right; i >= left && count < m * n; i--) {
      out += matrix[top][i] + ' ';
      count++;
    }
    top++;
  }
  return out;
}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [9, 10, 11]];
//expected --->  1 4 7 8 9 6 3 2 5

console.log (spiral (4, 3, matrix));
