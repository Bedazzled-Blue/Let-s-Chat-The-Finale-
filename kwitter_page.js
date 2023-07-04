//YOUR FIREBASE LINKS

var firebaseConfig = 
 {
      apiKey: "AIzaSyDXIKDrw_1pA_7SCRnooHLPY4qIRuxoOTU",
      authDomain: "kwitter-547db.firebaseapp.com",
      databaseURL: "https://kwitter-547db-default-rtdb.firebaseio.com",
      projectId: "kwitter-547db",
      storageBucket: "kwitter-547db.appspot.com",
      messagingSenderId: "110025797525",
      appId: "1:110025797525:web:b1aa2477f8e30d6d49509c"
    };
   
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();



function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";

}


function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
