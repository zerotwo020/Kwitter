// Your web app's Firebase configuration
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyBCxsFnnFvX4edHPT4O4HdP2op5yAqZn08",
      authDomain: "dummy2-rwsi.firebaseapp.com",
      databaseURL: "https://dummy2-rwsi-default-rtdb.firebaseio.com",
      projectId: "dummy2-rwsi",
      storageBucket: "dummy2-rwsi.appspot.com",
      messagingSenderId: "599894494170",
      appId: "1:599894494170:web:fb798b62e32e957aaa4ee3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  //Part 1 showing name on html page
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  
  // Part 2 Add room to the database and local storage and go to kwitter_page.html
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  
  //Part 3 Get the data from database and display in div id="output"
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
  
         //start code
        console.log("Room Name - " + Room_names)
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row; 
        //end code
      });   
    });
  
  }
  
  getData();
  
  //Part 4: Take to the other room
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }
  
  //Part5: Logout
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  