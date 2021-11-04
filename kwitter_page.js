// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCUQFOaPYfOlffSHUIvv2X8Vuda2L6ScbY",
      authDomain: "project-93-e7b73.firebaseapp.com",
      databaseURL: "https://project-93-e7b73-default-rtdb.firebaseio.com",
      projectId: "project-93-e7b73",
      storageBucket: "project-93-e7b73.appspot.com",
      messagingSenderId: "208443275579",
      appId: "1:208443275579:web:8ed6e44fc6e5e1177c1f1e"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    room_name = localStorage.getItem("roomname");
    room_name = localStorage.getItem("username");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() {
          localStorage.removeItem("roomname");
          localStorage.removeItem("username");
          window.location = "index.html";
    }

    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
            username: user_name,
            message: msg,
            like: 0
            });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
