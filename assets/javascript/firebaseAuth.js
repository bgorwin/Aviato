  // Initialize Firebase
 
  var config = {
    apiKey: "AIzaSyAJ0HACKr3aFbEs01K_KOIeESI3XQVLKUI",
    authDomain: "test-1f49b.firebaseapp.com",
    databaseURL: "https://test-1f49b.firebaseio.com",
    projectId: "test-1f49b",
    storageBucket: "test-1f49b.appspot.com",
    messagingSenderId: "102166164821"
  };
  firebase.initializeApp(config);
  
  // Get elements
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignUp");
  const btnLogout = document.getElementById("btnLogin");
  
  //add logn event
  btnLogin.addEventListener("click", e => {
     //Get email and pass
     const email = txtEmail.value;
     const pass = txtPassword.value;
     const auth = firebase.auth();
     
     //Sign in 
     const promise = auth.signInWithEmailAndPassword(email, pass);
     promise.catch(e => console.log(e.message));
     
  });
  
  btnSignUp.addEventListener("click", e=> {
       //Get email and pass
     const email = txtEmail.value;
     const pass = txtPassword.value;
     const auth = firebase.auth();
     
     //Sign in 
     const promise = auth.createUserWithEmailAndPassword(email, pass);
     promise.catch(e => console.log(e.message));
  });
  
  $("#btnLogout").on("click", function() {
      firebase.auth().signOut(); 
  });
  
//   btnLogout.addEventListener("click", e => {
//      firebase.auth().signOut(); 
//   });
  
  //add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            console.log("logged in");
            $("#btnLogout").removeClass("hide");
        }else{
            console.log("not logged in");
            $("#btnLogout").addClass("hide");
        }
    });
  
