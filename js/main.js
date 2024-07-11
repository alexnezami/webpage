"use strict";
import { Student, greet, x as xExport } from "./modules/student.js";
document.addEventListener("keydown", (event) => {
  if (event.key === "u" && event.ctrlKey) {
    event.preventDefault();
  }
});

// we use this script for undefined variable & sensetive to reserve word
/* console.log(2 + 6);
console.log(typeof 2);
console.log(3 === 3);
console.log(typeof true);
let firstName;
console.log(typeof firstName); => undefined 
let firstName;
firstName = "Alex";
console.log(firstName);
console.log(typeof firstName);
firstName = 12;
console.log(firstName);
console.log(typeof firstName);
// // we can change type of variable
let age = 28;
age += 1;
console.log(age);

lastName = "change";
out = `this is a test
statement 2 ${firstName} ${3 * 6}
statement 3`;
console.log(out);
const gpa = 3.8;
const IELTS = 7.5;
const isEligible = gpa >= 3.6 && IELTS >= 7;
console.log(isEligible);
const isEligible2 = gpa >= 6 || IELTS >= 7;
console.log(isEligible2);
// for not we use ! sign
gpa >= 3.6 && IELTS >= 7
  ? console.log("you are eligible")
  : console.log("you are not eligible");

const tempresult =
  gpa >= 3.6 && IELTS >= 7
    ? "you are eligible with status"
    : "you are not eligible with status";
console.log(tempresult);

let idxs = 10;
idx = 5;
console.log(idx);

const header = document.querySelector(".header__ul");
console.log(header);

const divs = document.querySelectorAll("div");
console.log(divs);

divs[0].style.backgroundColor = "red";

for (let i = 0; i < divs.length; i++) {
  console.log(divs[i]);
}

console.log(header.children);

const mobileNav = document.querySelector(".header__mobile-nav");
const headerNav = document.querySelector(".header__ul");

mobileNav.addEventListener("click", () => {
  headerNav.classList.toggle("active");
});

// with keypress we can use arrow buttons
// with keyup we can use when we unleash key
// document.addEventListener("keydown", (event) => {
//   alert(event.ctrlKey);
// });

const company = {
  name: "Google",
  jobs: ["SE", "PM", "DS", "QA"],
  location: "US",
};

const [first, , second, ...rest] = company.jobs;
console.log(first);
console.log(second);
console.log(rest);
console.log(...rest);
const { jobs: companyJobs, name: companyName } = company;
console.log(companyJobs);

const greet = function ({ name: companyName }) {
  return `welcome to ${companyName}`;
};
console.log(greet(company));

const jobs = ["SE", "PM", "DS", "QA"];
for (const job of jobs) {
  console.log(job);
}

for (const [index, job] of jobs.entries()) {
  console.log(index);
  console.log(job);
}

const jobs2 = new Set(["DS", "PM", "SE", "PM", "DS", "QA", "SE"]);
console.log(jobs2);
console.log(jobs2.size);
console.log(jobs2.delete("QA"));
console.log(jobs2.size);

const jobs = new Map();
jobs.set("Alex", "PM");
jobs.set("Alice", "Dev");
jobs.set(1, "test key type");
console.log(jobs);
*/

const s1 = new Student(5555, "Alice Nezami");
console.log(s1.studentName);
console.log(greet("David"));
console.log(xExport);
