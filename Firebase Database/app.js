// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";

import { getDatabase, push, ref, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8ZTaprVwvsqUiwIAKEQMryHwXlYUwgf8",
  authDomain: "fir-db-476c4.firebaseapp.com",
  databaseURL: "https://fir-db-476c4-default-rtdb.firebaseio.com",
  projectId: "fir-db-476c4",
  storageBucket: "fir-db-476c4.appspot.com",
  messagingSenderId: "835494860802",
  appId: "1:835494860802:web:f11e37d2d08a1211606f1b",
  measurementId: "G-YEQ2VEY2YX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = getDatabase();

var inp = document.getElementById("input");

window.submit = function() {
  var value = inp.value;

  var obj = {
    todo: value,  
  };

  var userRef = push(ref(db, "todo"));
  obj.id = userRef.key;

  set(userRef, obj);

  console.log(obj);
  alert(value);
}
