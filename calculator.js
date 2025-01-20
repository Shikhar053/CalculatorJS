const add = require('./addition');
const subtract = require('./subtraction');
const multiply = require('./multiplication');
const divide = require('./division');
const power = require('./power');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Select operation.");
console.log("1. Addition");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");
console.log("5. Power");

const askChoice = () => {
    rl.question("Enter choice (1/2/3/4/5): ", (choice) => {
        if (['1', '2', '3', '4', '5'].includes(choice)) {
            askNumbers(choice);
        } else {
            console.log("Invalid Input");
            askChoice();
        }
    });
};

const askNumbers = (choice) => {
    rl.question("Enter first number: ", (input1) => {
        const num1 = parseFloat(input1);
        if (isNaN(num1)) {
            console.log("Invalid input. Please enter a number.");
            return askNumbers(choice);
        }
        rl.question("Enter second number: ", (input2) => {
            const num2 = parseFloat(input2);
            if (isNaN(num2)) {
                console.log("Invalid input. Please enter a number.");
                return askNumbers(choice);
            }
            performOperation(choice, num1, num2);
        });
    });
};

const performOperation = (choice, num1, num2) => {
    try {
        switch (choice) {
            case '1':
                console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
                break;
            case '2':
                console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
                break;
            case '3':
                console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
                break;
            case '4':
                console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);
                break;
            case '5':
                console.log(`${num1} ** ${num2} = ${power(num1, num2)}`);
                break;
        }
    } catch (error) {
        console.log(error.message);
    }
    askNextCalculation();
};

const askNextCalculation = () => {
    rl.question("Let's do next calculation? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === 'yes') {
            askChoice();
        } else {
            rl.close();
        }
    });
};

askChoice();
