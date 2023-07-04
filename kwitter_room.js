
//ADD YOUR FIREBASE LINKS HERE
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

    function addRoom()
    {
        room_name = document.getElementById("room_name").value;
    
        firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
        });
    
        localStorage.setItem("room_name", room_name);
    
        window.location = "kwitter_page.html";
    }
    
    
    function getData()
    {
        firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML
             Room_names = childKey;
            //Start Code
            console.log("room Name - " + Room_names);
            row="<dov class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
            });}
    
            function redirectToRoomName(name)
            {
                console.log(name);
                localStorage.setItem("room_name", name);
                window.location = "kwitter_page.html";
            }

            function logout()
            {
                localStorage.removeItem("user_name");
                localStorage.removeItem("room_name");
                window.location = "kwitter.html";
            }
           