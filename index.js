function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    if (y === 0) {
        return "Erro: Divisão por zero";
    }
    return x / y;
};

const num1 = 10;
const num2 = 5;

console.log(`Soma: ${add(num1, num2)}`);
console.log(`Subtração: ${subtract(num1, num2)}`);
console.log(`Multiplicação: ${multiply(num1, num2)}`);
console.log(`Divisão: ${divide(num1, num2)}`);
