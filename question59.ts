/* Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other
number you give them later. */

function makeAdder(valueToAdd: number) : (number) => number {
    return function(number : number): number {
        return number + valueToAdd
    };
};
let addNumber = makeAdder(5)
console.log(addNumber(10));
