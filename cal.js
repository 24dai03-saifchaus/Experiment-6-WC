const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Error: Division by zero!";
        case '%':
            return a % b;
        case '^':
            return Math.pow(a, b);
        default:
            return "Invalid operator!";
    }
}

function calculator() {
    rl.question("Enter first number (or 'quit' to exit): ", function(num1) {
        if (num1.toLowerCase() === 'quit') {
            console.log("Goodbye!");
            rl.close();
            return;
        }

        rl.question("Enter operator (+, -, *, /, %, ^): ", function(operator) {
            rl.question("Enter second number: ", function(num2) {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                
                if (isNaN(a) || isNaN(b)) {
                    console.log("Error: Please enter valid numbers!");
                } else {
                    const result = calculate(a, b, operator);
                    console.log(`Result: ${a} ${operator} ${b} = ${result}`);
                }
                
                // Continue calculating
                console.log("\n--- Next Calculation ---");
                calculator();
            });
        });
    });
}

console.log("=== Simple Calculator ===");
console.log("Enter 'quit' at any time to exit\n");
calculator();