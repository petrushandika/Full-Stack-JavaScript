/*
Function destructuring exercise:
1. You are given a function getStudentInfo that takes an object representing a student as an argument. The student object has the following properties:

const student = {
  name: "John Doe",
  age: 20,
  rollNumber: "A123",
  courses: ["Mathematics", "Science", "History"],
};

2. Your task is to use function destructuring to extract the name, age, and courses properties from the student object and then return them as an object from the getStudentInfo function.

const student = {
  name: "John Doe",
  age: 20,
  rollNumber: "A123",
  courses: ["Mathematics", "Science", "History"],
};

const { name, age, courses } = getStudentInfo(student);
console.log(name); // John Doe
console.log(age); // 20
console.log(courses); // ["Mathematics", "Science", "History"]

3. Write the getStudentInfo function using function destructuring to achieve this task.
*/

const student = {
  name: "John Doe",
  age: 20,
  rollNumber: "A123",
  courses: ["Mathematics", "Science", "History"],
};

function getStudentInfo({
    name,
    age,
    rollNumber,
    courses
}) {
    console.log(name);
    console.log(age);
    console.log(rollNumber);
    console.log(...courses);
}
getStudentInfo(student);

