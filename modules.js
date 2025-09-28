/**
 * Example JavaScript modules using ES6 module syntax.
 */

// Exporting a function
export function add(a, b) {
    return a + b;
}

// Exporting a variable
export const PI = 3.14159;

// Exporting a class
export class Calculator {
    multiply(a, b) {
        return a * b;
    }
}

// Exporting an object
export const utils = {
    square(x) {
        return x * x;
    },
    cube(x) {
        return x * x * x;
    }
};