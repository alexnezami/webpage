class Student {
  #studentNumber;
  #studentName;
  constructor(studentNumber, studentName) {
    this.#studentNumber = studentNumber;
    this.#studentName = studentName;
  }

  set studentName(st) {
    this.#studentName = st;
  }
  get studentName() {
    return this.#studentName;
  }
  enroll(courseName) {
    return `${this.#studentName} enrolled in ${courseName}`;
  }
}

function greet(name) {
  return `Welcome ${name}`;
}
const x = 5;
/*const s1 = new Student(1234, "Alex Nezami");
console.log(s1);
console.log(s1.studentName);
console.log(s1.enroll("Internet security"));*/
export { Student, greet, x };
