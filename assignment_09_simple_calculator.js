// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
// =============================================================================

const readline = require("readline-sync");

// Store all student records in an array
let students = [];

// =============================================================================
// 1. ADD A STUDENT
// =============================================================================

function addStudent() {
    let name = readline.question("Student name: ");
    let id = readline.questionInt("Student ID: ");

    let numberOfScores = readline.questionInt("How many scores? ");

    let scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        let score = readline.questionFloat(`Enter score ${i + 1}: `);
        scores.push(score);
    }

    let student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);

    console.log(`Student "${name}" added successfully.`);
}

// =============================================================================
// 2. DISPLAY ALL STUDENTS
// =============================================================================

function displayAllStudents() {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log("\nStudent Records:");
    console.log("---------------------------------------------");

    for (let i = 0; i < students.length; i++) {
        let student = students[i];

        let total = 0;

        for (let j = 0; j < student.scores.length; j++) {
            total += student.scores[j];
        }

        let average = total / student.scores.length;

        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.id}`);
        console.log(`Scores: ${student.scores.join(", ")}`);
        console.log(`Average: ${average.toFixed(2)}`);
        console.log("---------------------------------------------");
    }
}

// =============================================================================
// 3. CALCULATE AVERAGE SCORE FOR A SPECIFIC STUDENT
// =============================================================================

function calculateAverage() {
    let id = readline.questionInt("Enter student ID: ");

    let student = null;

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            student = students[i];
            break;
        }
    }

    if (student === null) {
        console.log("Error: Student ID not found.");
        return;
    }

    let total = 0;

    for (let i = 0; i < student.scores.length; i++) {
        total += student.scores[i];
    }

    let average = total / student.scores.length;

    console.log(`${student.name}'s average score: ${average.toFixed(2)}`);
}

// =============================================================================
// 4. MAIN MENU
// =============================================================================

function showMenu() {
    let choice;

    do {
        console.log("\n================================");
        console.log("   STUDENT RECORD SYSTEM MENU");
        console.log("================================");
        console.log("1. Add student");
        console.log("2. Display all students");
        console.log("3. Calculate average score");
        console.log("4. Quit");

        choice = readline.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addStudent();
                break;

            case 2:
                displayAllStudents();
                break;

            case 3:
                calculateAverage();
                break;

            case 4:
                console.log("Goodbye!");
                break;

            default:
                console.log("Error: Please enter a number between 1 and 4.");
        }

    } while (choice !== 4);
}

// Start the program
showMenu();