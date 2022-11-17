"use strict";

window.addEventListener("DOMContentLoaded", init);

const studentJsonURL = "https://petlatkea.dk/2021/hogwarts/students.json";

let allStudents = [];
let studentList;

//* Student Prototype Object
const StudentObj = {
  firstName: "-unknown-",
  lastName: "-unknown-",
  middleName: "-unknown-",
  nickName: "-unknown-",
  gender: "",
  image: ".jpg",
  house: "",
};

function init() {
  console.log("Initial start");
  loadJsonData();
}

function loadJsonData() {
  fetch(studentJsonURL)
    .then((response) => response.json())
    .then((jsonData) => prepareObjects(jsonData));
}

function prepareObjects(jsonData) {
  allStudents = jsonData.map(prepareObject);
}

function prepareObject(jsonObject) {
  const student = Object.create(StudentObj);

  let fullName = jsonObject.fullname.trim(); // Student full name with no space before or after
  let house = jsonObject.house.trim(); // Student house with no space before or after
  let gender = jsonObject.gender.trim(); // Student gender with no space before or after

  //* FULL NAME prep
  //* FIRST NAME cleaning & selecting
  if (fullName.includes(" ")) {
    // Make first char upper case and rest lower case
    student.firstName = fullName.substring(0, 1).toUpperCase() + fullName.substring(1, fullName.indexOf(" ")).toLowerCase();
  } else {
    // if only first name is known make first char upper case and rest lower case
    student.firstName = fullName.substring(0, 1).toUpperCase() + fullName.substring(1).toLowerCase();
  }

  //* LAST NAME cleaning & selecting
  if (fullName.includes(" ")) {
    student.lastName = fullName.substring(fullName.lastIndexOf(" ") + 1, fullName.lastIndexOf(" ") + 2).toUpperCase() + fullName.substring(fullName.lastIndexOf(" ") + 2).toLowerCase();
  }

  //* MIDDLE NAME
  if (fullName.split(" ").length > 2) {
    student.middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
  }

  //* NICK NAME
  if (fullName.includes('"')) {
    student.nickName = fullName.substring(fullName.indexOf('"') + 1, fullName.lastIndexOf('"'));
  }

  //* GENDER
  student.gender = gender.substring(1, 0).toUpperCase() + gender.substring(1).toLowerCase();

  //* IMAGE NAME
  student.image = `${student.lastName.toLowerCase()}_${student.firstName.charAt(0).toLowerCase()}.jpg`;

  //* HOUSE
  student.house = house.substring(1, 0).toUpperCase() + house.substring(1).toLowerCase();

  console.log(`
  firstName: _${student.firstName}_, 
  middleName: _${student.middleName}_, 
  lastName: _${student.lastName}_, 
  nickName: _${student.nickName}_, 
  gender: _${student.gender}_, 
  image: _${student.image}_,
  house: _${student.house}_,
  `);
}
