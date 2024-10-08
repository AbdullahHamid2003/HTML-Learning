
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
  import { getDatabase , push, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCCFpk_5iedMfbZad_11jLa06ar8MsAStM",
    authDomain: "e-commerce-web-b077f.firebaseapp.com",
    projectId: "e-commerce-web-b077f",
    storageBucket: "e-commerce-web-b077f.appspot.com",
    messagingSenderId: "152890791972",
    appId: "1:152890791972:web:4ee7c4046c81877f1c20b1",
    measurementId: "G-GDQECDE58Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var db = getDatabase();

  var imageUrl = document.getElementById("image");
  var price = document.getElementById("price");
  var description = document.getElementById("des");
  var location = document.getElementById("loc");

  window.submit = function(){
    var obj = {
        image: imageUrl.value,
        price: price.value,
        desc: description.value,
        loc: location.value,
    }
  }
