// TASK 1 
// Loop Patterns
// Use a for loop to print 1–10. Use it again to print only even numbers (hint: i % 
// 2 === 0). Use a while loop to count down from 5 to 1, then print "Lift off!".

for( i =0;i<=10; i++)
{
   console.log(`Number ${i}`);
  
}
console.log("\nTASK 1: Even numbers only");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`Even number: ${i}`);
    }
}
console.log("\nTASK 1: Countdown");
let j=5;
while(j>0)
{
console.log(j);
j=j-1;
}
console.log("Lift Off");
// TASK 2
// Reusable Functions
// Write functions: addTax(price) returns price + 16%; classify(score) returns the 
// grade as text; greet(name) returns a template-literal greeting. Call each with 
// several inputs.
function addTax(price) {
    return price * 1.16;
}
function classify(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

function greet(name) {
    return `Hello, ${name}!`;
}

console.log("\nTASK 2: Reusable functions");
console.log("addTax(100) =", addTax(100));
console.log("addTax(50) =", addTax(50));
console.log("classify(95) =", classify(95));
console.log("classify(72) =", classify(72));
console.log("greet('Ava') =", greet("Ava"));
console.log("greet('Noah') =", greet("Noah")); 
// TASK 3
// Arrow Function Versions
// Rewrite your three functions from Task 2 as arrow functions. Confirm they 
// give identical results. Note which form you find easier to read.
const addTaxArrow = (price) => price * 1.16;
const classifyArrow = (score) => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
};
const greetArrow = (name) => `Hello, ${name}!`;

console.log("\nTASK 3: Arrow function versions");
console.log("addTax matches:", addTax(100) === addTaxArrow(100));
console.log("classify matches:", classify(72) === classifyArrow(72));
console.log("greet matches:", greet("Ava") === greetArrow("Ava"));


//  TASK 4
// A Student Object
// Create a student object with name, age, year, and a scores array. Add a 
// method getAverage() that returns the average of the scores using reduce. 
// Call it and print the result.
const student = {
    name: "Alex",
    age: 19,
    year: "Year 2",
    scores: [70, 80, 90],
    getAverage() {
        if (this.scores.length === 0) {
            throw new Error("No scores available");
        }
        const total = this.scores.reduce((sum, score) => sum + score, 0);
        return total / this.scores.length;
    }
};

console.log("\nTASK 4: Student object");
console.log("Student average:", student.getAverage());
// TASK 5
// Array of Students
// Make an array of 5 student objects. Use a for...of loop to print each name. 
// Use filter to get students with an average >= 50, and map to get just their 
// names.
const students = [
    { name: "Alex", age: 19, year: "Year 2", scores: [70, 80, 90] },
    { name: "Jamie", age: 20, year: "Year 3", scores: [60, 65, 70] },
    { name: "Priya", age: 18, year: "Year 1", scores: [85, 90, 95] },
    { name: "Sam", age: 21, year: "Year 4", scores: [45, 50, 55] },
    { name: "Morgan", age: 22, year: "Year 2", scores: [] }
];

console.log("\nTASK 5: Student names");
for (const person of students) {
    console.log(person.name);
}

const passingStudents = students.filter((person) => {
    try {
        return person.getAverage() >= 50;
    } catch (error) {
        return false;
    }
});

const passingNames = passingStudents.map((person) => person.name);
console.log("Students with average >= 50:", passingNames);

// TASK 6
// Put It Together
// Combine: loop through the students, classify each one's average using your 
// grade function, and print a formatted line per student. Handle an empty 
//scores list with try/catch.
console.log("\nTASK 6: Student grade report");
for (const person of students) {
    try {
        const average = person.getAverage();
        const grade = classify(average);
        console.log(`${person.name} (${person.year}) - Average: ${average.toFixed(1)} - Grade: ${grade}`);
    } catch (error) {
        console.log(`${person.name} (${person.year}) - ${error.message}`);
    }
}