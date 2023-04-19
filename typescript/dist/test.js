let firstName = "Dylan";
console.log(firstName);
let v = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
const names = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
const cantChangeThis = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
// CAREFUL, TS WILL INFER THE TYPES
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
let head = numbers[0]; // no error
//# sourceMappingURL=test.js.map