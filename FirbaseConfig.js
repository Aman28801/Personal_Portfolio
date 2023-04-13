// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAA5cwSmPvFYOxz17KPtYyXezszsYowDs8",
//   authDomain: "portfolio-f99e8.firebaseapp.com",
//   databaseURL: "https://portfolio-f99e8-default-rtdb.firebaseio.com",
//   projectId: "portfolio-f99e8",
//   storageBucket: "portfolio-f99e8.appspot.com",
//   messagingSenderId: "510879187785",
//   appId: "1:510879187785:web:2f5c0fa5d88aba9c9f9098"
// };
// // Firebase ref = new Firebase("https://portfolio-f99e8-default-rtdb.firebaseio.com");
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// var contactformDB = firebase.database().ref("contactForm");
// document.getElementById("contatForm").addEventListener("submit", submitData);

// function submitData(e){
//   e.preventDefault();

//   var name = getElementVal('name');
//   var email = getElementVal('email');
//   var subject = getElementVal('subject');
//   var msg = getElementVal('msg');

//   console.log(name, subject ,email,msg);
// }
// const getElementVal =(id) =>{
//   return document.getElementById(id).value;
// }
const firebaseConfig = {
  apiKey: "AIzaSyAA5cwSmPvFYOxz17KPtYyXezszsYowDs8",
  authDomain: "portfolio-f99e8.firebaseapp.com",
  databaseURL: "https://portfolio-f99e8-default-rtdb.firebaseio.com",
  projectId: "portfolio-f99e8",
  storageBucket: "portfolio-f99e8.appspot.com",
  messagingSenderId: "510879187785",
  appId: "1:510879187785:web:9250a2077e3e90509f9098",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = document.getElementById("name");
  var emailid = document.getElementById("emailid");
  var subject = document.getElementById("subject");
  var msgContent = document.getElementById("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid,subject,msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    subject: subject,
    msgContent: msgContent,
  });
};

// const getElementVal = (id) => {
//   return document.getElementById(id).value;
// };