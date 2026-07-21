/*Objective: Build an interactive page that finds elements, changes them, responds to the user, and validates a form. Start from a provided HTML file; write all 
behaviour in script.js.
TASK 1
Grab & Change
Use querySelector to grab a heading and a paragraph. On page load, change 
the heading's textContent and set the paragraph's style.color. Confirm the 
changes appear.
 TASK 2
Click Counter
Add a button and a <span> showing 0. Each time the button is clicked, 
increase the count and update the span. (Hint: keep a count variable and 
addEventListener for click.)
TASK 3
Toggle a Theme
Add a 'Dark Mode' button. On click, use classList.toggle to add/remove a 
.dark class on <body>. Define the .dark styles in CSS. Watch the whole page 
switch.
TASK 4
Build a List from Data
Given an array of 5 course names, render them as <li> items inside a <ul> 
using map + join + innerHTML. Then add a button that appends one new 
course with createElement.
TASK 5
Live Search Filter
Add a text input above the list. On the input event, filter the courses to those 
that include the typed text, and re-render the list live as the user types.
TASK 6
Validate a Form
Build a signup form (name, email). On submit, preventDefault, then check 
name isn't empty and email includes '@'. Show a red error or green success 
message with textContent.*/
// TASK 1: Grab & Change
const heading = document.querySelector('h1');
const introText = document.querySelector('p');

if (heading) {
  heading.textContent = 'Interactive Lab Page';
}

if (introText) {
  introText.style.color = 'blue';
}

// TASK 2: Click Counter
let clickCount = 0;
const counterButton = document.querySelector('#counterButton');
const counterValue = document.querySelector('#counterValue');

if (counterButton && counterValue) {
  counterButton.addEventListener('click', () => {
    clickCount += 1;
    counterValue.textContent = clickCount;
  });
}

// TASK 3: Toggle a Theme
const themeButton = document.querySelector('#themeButton');

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeButton.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
  });
}

// TASK 4 + 5: Build and filter a list from data
const courses = ['CS320', 'CS350', 'CS351', 'CS361', 'MA320'];
let filteredCourses = [...courses];

const courseList = document.querySelector('#courseList');
const searchInput = document.querySelector('#searchInput');
const courseNameInput = document.querySelector('#courseNameInput');
const addCourseButton = document.querySelector('#addCourseButton');

function renderCourses() {
  if (!courseList) return;

  courseList.innerHTML = '';
  filteredCourses.forEach((course) => {
    const li = document.createElement('li');
    li.textContent = course;
    courseList.appendChild(li);
  });
}

if (courseList) {
  renderCourses();
}

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    const term = event.target.value.toLowerCase();
    filteredCourses = courses.filter((course) => course.toLowerCase().includes(term));
    renderCourses();
  });
}

if (addCourseButton && courseList && courseNameInput) {
  addCourseButton.addEventListener('click', () => {
    const newCourse = courseNameInput.value.trim();

    if (newCourse) {
      courses.push(newCourse);
      filteredCourses = [...courses];
      courseNameInput.value = '';
      renderCourses();
    }
  });
}

// TASK 6: Validate a Form
const signupForm = document.querySelector('#signupForm');
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const formMessage = document.querySelector('#formMessage');

if (signupForm && nameInput && emailInput && formMessage) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email.includes('@')) {
      formMessage.textContent = 'Please enter a valid name and email address.';
      formMessage.style.color = 'red';
    } else {
      formMessage.textContent = 'Signup successful!';
      formMessage.style.color = 'green';
    }
  });
}
