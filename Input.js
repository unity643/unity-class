const readline = require('readline');
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
        
});

rl.question(`What is your first number? `, (num1) => {
    rl.question(`What is your second number? `, (num2) => {
        const sum = parseInt(num1) + parseInt(num2);
        console.log(`The sum of ${num1} and ${num2} is ${sum}`);
        rl.close();
    });
});
