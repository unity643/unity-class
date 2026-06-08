// Import the built-in 'readline' module from Node.js to handle terminal input/output
const readline = require('readline');

// Create an interface that connects the terminal's input (keyboard) to the output (screen)
const rl = readline.createInterface({
    input: process.stdin,   // stdin = standard input (keyboard)
    output: process.stdout  // stdout = standard output (terminal screen)
});

// Define the core calculation function (same logic as before)
function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Error: Cannot divide by zero!";
            }
            result = num1 / num2;
            break;
        default:
            return "Error: Invalid operator!";
    }
    return result;
}

// Start the interactive chain of questions
// Step 1: Ask the user for the first number
rl.question('Enter the first number: ', (input1) => {
    
    // Convert the user's string answer into a real floating-point number
    const num1 = parseFloat(input1);

    // Step 2: Ask the user for the mathematical operator
    rl.question('Enter an operator (+, -, *, /): ', (operator) => {

        // Step 3: Ask the user for the second number
        rl.question('Enter the second number: ', (input2) => {
            
            // Convert the second answer into a real floating-point number
            const num2 = parseFloat(input2);

            // Call our calculate function using the parsed numbers and operator
            const finalResult = calculate(num1, num2, operator);

            // Print a clean separator line in the terminal
            console.log('-------------------------');
            
            // Print the final formula and the result to the user
            console.log(`Result: ${num1} ${operator} ${num2} = ${finalResult}`);
            
            // Print another separator line
            console.log('-------------------------');

            // Close the terminal interface, ending the program cleanly
            rl.close();
        });
    });
});