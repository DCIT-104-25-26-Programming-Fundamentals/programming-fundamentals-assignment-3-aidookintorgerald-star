// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

const readlineSync = require('readline-sync');
// =============================================================================
// HELPER FUNCTION — Read a Matrix
// =============================================================================
function readMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row;
        while (true) {
            row = readlineSync.question(`Enter row ${i + 1}: `)
                .trim()
                .split(/\s+/)
                .map(Number);
            if (row.length === cols && row.every(Number.isFinite)) {
                break;
            }
            console.log(`Please enter exactly ${cols} numbers.`);
        }
        matrix.push(row);
    }
    return matrix;
}
// =============================================================================
// HELPER FUNCTION — Display a Matrix
// =============================================================================
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = "";
        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j].toString().padStart(6);
        }
        console.log(row);
    }
}
// =============================================================================
// PART A — Transpose a Matrix
// =============================================================================
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transpose = [];
    for (let j = 0; j < cols; j++) {
        let newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transpose.push(newRow);
    }
    return transpose;
}
// =============================================================================
// PART B — Add Two Matrices
// =============================================================================
function addMatrices(matrixA, matrixB) {
    let rows = matrixA.length;
    let cols = matrixA[0].length;
    let result = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}
// =============================================================================
// PART C — Multiply Two Matrices
// =============================================================================
function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;
    let result = [];
    for (let i = 0; i < rowsA; i++) {
        let row = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}
// =============================================================================
// MAIN PROGRAM
// =============================================================================
console.log("==============================================");
console.log("        MATRIX OPERATIONS PROGRAM");
console.log("==============================================");
// -----------------------------------------------------------------------------
// PART A — Transpose
// -----------------------------------------------------------------------------
console.log("\nPART A — TRANSPOSE A MATRIX");
let rowsA = Number(readlineSync.question("Enter number of rows: "));
let colsA = Number(readlineSync.question("Enter number of columns: "));
let matrixA = readMatrix(rowsA, colsA);
console.log("\nOriginal Matrix:");
displayMatrix(matrixA);
let transposed = transposeMatrix(matrixA);
console.log("\nTransposed Matrix:");
displayMatrix(transposed);
// -----------------------------------------------------------------------------
// PART B — Addition
// -----------------------------------------------------------------------------
console.log("\nPART B — ADD TWO MATRICES");
let rowsB = Number(readlineSync.question("Enter number of rows: "));
let colsB = Number(readlineSync.question("Enter number of columns: "));
console.log("\nEnter Matrix A:");
let addMatrixA = readMatrix(rowsB, colsB);
console.log("\nEnter Matrix B:");
let addMatrixB = readMatrix(rowsB, colsB);
let sumMatrix = addMatrices(addMatrixA, addMatrixB);
console.log("\nMatrix A:");
displayMatrix(addMatrixA);
console.log("\nMatrix B:");
displayMatrix(addMatrixB);
console.log("\nA + B:");
displayMatrix(sumMatrix);
// -----------------------------------------------------------------------------
// PART C — Multiplication
// -----------------------------------------------------------------------------
console.log("\nPART C — MULTIPLY TWO MATRICES");
let multiplyRowsA = Number(
    readlineSync.question("Enter number of rows for Matrix A: ")
);
let multiplyColsA = Number(
    readlineSync.question("Enter number of columns for Matrix A: ")
);
console.log("\nEnter Matrix A:");
let multiplyMatrixA = readMatrix(multiplyRowsA, multiplyColsA);
let multiplyRowsB = multiplyColsA;
console.log(
    `\nMatrix B must have ${multiplyRowsB} rows because Matrix A has ${multiplyColsA} columns.`
);
let multiplyColsB = Number(
    readlineSync.question("Enter number of columns for Matrix B: ")
);
console.log("\nEnter Matrix B:");
let multiplyMatrixB = readMatrix(multiplyRowsB, multiplyColsB);
let productMatrix = multiplyMatrices(multiplyMatrixA, multiplyMatrixB);
console.log("\nMatrix A:");
displayMatrix(multiplyMatrixA);
console.log("\nMatrix B:");
displayMatrix(multiplyMatrixB);
console.log("\nA x B:");
displayMatrix(productMatrix);
console.log("\n==============================================");
console.log("          PROGRAM COMPLETED");
console.log("==============================================");