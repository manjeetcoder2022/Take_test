var firebaseConfig = {
  apiKey: "AIzaSyBav3IcXOgZe2TvVwR4ZZ4ZC0rg9i3FiNA",
  authDomain: "taketest-8d154.firebaseapp.com",
  databaseURL: "https://taketest-8d154-default-rtdb.firebaseio.com",
  projectId: "taketest-8d154",
  storageBucket: "taketest-8d154.appspot.com",
  messagingSenderId: "640549710072",
  appId: "1:640549710072:web:af4bdef3d4800ee829b30d"
};

firebase.initializeApp(firebaseConfig);


function Register(){
  var name= document.getElementById("register_user_name").value 
  var password= document.getElementById("register_password").value
  var mobile= document.getElementById("register_mobile_number").value

  
  if(document.getElementById("category").value == "student"){
    category= "Student"
    firebase.database().ref(name).push({
      user_name: name,
      password:password,
      mobile:mobile,
      category:category
    })
    document.getElementById("register_user_name").value  =""
    document.getElementById("register_password").value =""
     document.getElementById("register_mobile_number").value=""
     document.getElementById("category").value = ""
     window.alert("Register Successfully now we can login")
     localStorage.setItem("student",name)
  }
  else if(document.getElementById("category").value == "teacher"){
    category= "Teacher"
    firebase.database().ref(name).push({

      user_name: name,
      password:password,
      mobile:mobile,
      category:category

    })
    document.getElementById("register_user_name").value  =""
   document.getElementById("register_password").value =""
    document.getElementById("register_mobile_number").value=""
    document.getElementById("category").value = ""
    window.alert("Register Successfully now we can login")
    localStorage.setItem("teacher",name)
  }

}
function goToLoginPage(){
document.getElementById("register_page").style.display="none"
document.getElementById("login_page").style.display="block"
}
function goToRegisterPage(){
  document.getElementById("register_page").style.display="block"
document.getElementById("login_page").style.display="none"
}







    
function login(){
 
  login_user_name= document.getElementById("login_user_name").value 
login_password= document.getElementById("login_password").value 

  getData();
 
}

function getData() { firebase.database().ref("/"+ login_user_name).on('value', function(snapshot) { 
  document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;

   checkUsername= message_data["user_name"]
     checkPassword= message_data["password"]

     if(login_user_name==checkUsername && login_password==checkPassword){
      window.alert("Your mobile number " + message_data["mobile"])
      if(message_data["category"]=="Teacher"){

        window.location="teacher_page.html"
        localStorage.setItem("teacher",login_user_name)
      }if(message_data["category"]=="Student"){
        window.location="student_page.html"
        localStorage.setItem("student",login_user_name)
      }

     }
     } });  }); }

     

