/* Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other
number you give them later. */
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
;
var addNumber = makeAdder(5);
console.log(addNumber(10));
