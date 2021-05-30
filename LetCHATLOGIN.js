var firebaseConfig = {
  apiKey: "AIzaSyCE-y6jrcbJPhPhBj9Z5HcG_XyKtbUwSDg",
  authDomain: "chatter-c7709.firebaseapp.com",
  databaseURL: "https://chatter-c7709.firebaseio.com",
  projectId: "chatter-c7709",
  storageBucket: "chatter-c7709.appspot.com",
  messagingSenderId: "403493603494",
  appId: "1:403493603494:web:aee2c0707475bc01b1cc67",
  measurementId: "G-G7F96QT073"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function singin() {
 username = document.getElementById("input").value;
 localStorage.setItem('username',username);
 window.location="Lets_chat_room.html";
 
  }