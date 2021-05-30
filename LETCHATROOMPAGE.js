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
  

  name=localStorage.getItem("username");
document.getElementById('welcom2').innerHTML = name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
          console.log(Room_names);
          row = "<div class='Room_name_created' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
          document.getElementById("output").innerHTML += row;
      //End cod
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location="Lets_chat_room.html";
}

function logout() {
      localStorage.removeItem("username");
      window.location="lets_chat_coding.html";
      localStorage.removeItem("room_name");
}

function rooomcreate() {
      room_add= document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_add).update({
          purpose:"addingroom_name"
      });
      localStorage.setItem("room_name" , room_add);
      window.location="Let_chat_page.html";
}