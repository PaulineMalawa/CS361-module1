/*Task 2*/
const name = "Pauline";
const uni = "Copperbelt University";
let age = 21;
let year = 2026;

console.log("Name:", name);
console.log("University:", uni);
console.log("Age:", age);
console.log("Year:", year);

console.log("Type of name:", typeof name);
console.log("Type of uni:", typeof uni);
console.log("Type of age:", typeof age);
console.log("Type of year:", typeof year);

age = 22;
year = 2027;
console.log("Updated age:", age);
console.log("Updated year:", year);

/* Task 3 */
const num1 = 10;
const num2 = 2;

const sum = num1 + num2;
const diff = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const remainder = num1 % num2;
const power = num1 ** num2;

console.log(`Sum: ${num1} + ${num2} = ${sum}`);
console.log(`Difference: ${num1} - ${num2} = ${diff}`);
console.log(`Product: ${num1} × ${num2} = ${product}`);
console.log(`Quotient: ${num1} ÷ ${num2} = ${quotient}`);
console.log(`Remainder: ${num1} % ${num2} = ${remainder}`);
console.log(`Power: ${num1} ** ${num2} = ${power}`);

/* Task 4 */
const greetingA = "Hello, " + name + "!";
const greetingB = `Welcome to ${uni}, ${name}.`;

console.log(greetingA);
console.log(greetingB);
console.log("Name length:", name.length);
console.log("Uppercase name:", name.toUpperCase());
console.log("Includes letter 'a':", name.includes("a"));

/* Task 5 */
const score = 72;
console.log("Score >= 50:", score >= 50);
console.log("Score === 100:", score === 100);
console.log("Score between 40 and 60:", score > 40 && score < 60);

/* Task 6 */
function gradeDecider(scoreValue) {
  if (scoreValue >= 75) {
    return "Distinction";
  } else if (scoreValue >= 60) {
    return "Merit";
  } else if (scoreValue >= 50) {
    return "Credit";
  } else if (scoreValue >= 40) {
    return "Pass";
  }
  return "Fail";
}

[95, 68, 53, 38].forEach((value) => {
  console.log(`Score ${value}: ${gradeDecider(value)}`);
});