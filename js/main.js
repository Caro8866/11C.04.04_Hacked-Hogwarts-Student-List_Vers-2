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
