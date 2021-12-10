//YOUR FIREBASE LINKS
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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value
          firebase.database().ref(room_name).push ({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value ="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);

console.log(message_data);
console.log("---------")

name= message_data['name'];
message= message_data['message'];
like= message_data['like'];

part1 = "<h4> "+name+"<img class='user_tick' src='tick.png'> </h4>";
part2 = "<h4 class='message_h4'> " +message+ "</h4>";

part3 = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
part4 = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row= part1+part2+part3+part4
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function updateLike(message_id)
 {
console.log("clicked on like button -" +message_id);
button_id = message_id;
likes= document.getElementById(button_id).value;
updated_likes = Number(likes) +1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
      like: updated_likes
});
}