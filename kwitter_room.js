
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCl0KY_YLv2Kux_CPK0BbpoqOA6ZbSQquA",
      authDomain: "checklist-8c6b6.firebaseapp.com",
      databaseURL: "https://checklist-8c6b6-default-rtdb.firebaseio.com",
      projectId: "checklist-8c6b6",
      storageBucket: "checklist-8c6b6.appspot.com",
      messagingSenderId: "908758460813",
      appId: "1:908758460813:web:92e827e7bfe9cdf9ff35c4"
    };
    
    // Initialize Firebase
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
