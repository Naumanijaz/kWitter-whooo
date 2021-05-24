  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAvlgugFnEFPON0rKYaccYkEsueyiWwRIU",
    authDomain: "kwitter-c39b7.firebaseapp.com",
    databaseURL: "https://kwitter-c39b7-default-rtdb.firebaseio.com",
    projectId: "kwitter-c39b7",
    storageBucket: "kwitter-c39b7.appspot.com",
    messagingSenderId: "554421506834",
    appId: "1:554421506834:web:f39d2265d55fda4b6a59cb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();
var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;
function addroom()
{
room_name = document.getElementById("cloud").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html"
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      window.location = "index.html";
      localStorage.removeItem("room_name");
}
