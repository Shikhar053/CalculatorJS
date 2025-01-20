function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by 0!");
    }
    return num1 / num2;
}
module.exports = divide;
