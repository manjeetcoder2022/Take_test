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

name_2 = localStorage.getItem("student")
document.getElementById("user_name").innerHTML=name_2+ " !"

result()
submit_button = document.getElementById("submit")
answer_1=document.getElementById("answer_1")
answer_2= document.getElementById("answer_2")
answer_3=document.getElementById("answer_3")
answer_4=document.getElementById("answer_4")
answer_5=document.getElementById("answer_5")
answer_6=document.getElementById("answer_6")
answer_7=document.getElementById("answer_7")
answer_8=document.getElementById("answer_8")
answer_9=document.getElementById("answer_9")
answer_10=document.getElementById("answer_10")
function getData() {
  firebase.database().ref(name_2 + "Teacher_name").on('value', function (snapshot) {
    document.getElementById("teacher_name_display").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        firebase_message_id = childKey;
        message_data_3 = childData;

        TeacherName_find = message_data_3
       
       document.getElementById("teacher_name_display").innerHTML =TeacherName_find
        localStorage.setItem("teacher_name_student", TeacherName_find)
         
 
    }
    });
  });
  getTeacherName= localStorage.getItem("teacher_name_student")
  firebase.database().ref(getTeacherName +"StudentName").on('value', function (snapshot) {
    document.getElementById("teacher_sub_display").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

        subject_name=childData
        getSubjectName= subject_name["subject_name"]

       
        document.getElementById("teacher_sub_display").innerHTML =getSubjectName
      }
    });
  });
}

getData()
Teacher_name_display = localStorage.getItem("teacher_name_student")

function question_display() {

  firebase.database().ref("/" + Teacher_name_display + "Questions").on('value', function (snapshot) {
    document.getElementById("displayQuestion").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        test_id = childKey
        get_test_name = childData

        test_name = get_test_name["test_name"]
        row = "<button id=" + test_name + " onclick='redirectToTestPage(this.id)' class='btn btn-info '>" + test_name + "  </button>"

 
        document.getElementById("live_test_div").innerHTML+=row +" "
        document.getElementById("live_test_div_").innerHTML=""
        var count =$('#live_test_div button').length

       document.getElementById("test_number").innerHTML = count
       
        firebase.database().ref(name_2 + test_name).push({
          status: "Not attempt",
          
        })
        

      }
    });
  });
}
test_name_get_lS= localStorage.getItem("test_name")
question_display()



function redirectToTestPage(test_name) {
  get_test_name_3=localStorage.getItem("test_name")
  localStorage.setItem("test_name",test_name)

  firebase.database().ref( "/" +name_2 + test_name).on('value', function (snapshot) {
    document.getElementById("status").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

        status_4 = childData
status_5=status_4["status"]

        if (status_5 == "Not attempt") {
          submit_button.disabled=false
          firebase.database().ref("/" + Teacher_name_display + "Questions"+test_name).on('value', function (snapshot) {
            document.getElementById("ques_1").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                all_question = childData
                document.getElementById("ques_1").innerHTML = "1 - " + all_question["question_1"] + "<br> <input id='answer_1'>"
                document.getElementById("ques_2").innerHTML = "2 - " + all_question["question_2"] + "<br> <input id='answer_2'>"
                document.getElementById("ques_3").innerHTML = "3 - " + all_question["question_3"] + "<br> <input id='answer_3'>"
                document.getElementById("ques_4").innerHTML = "4 - " + all_question["question_4"] + "<br> <input id='answer_4'>"
                document.getElementById("ques_5").innerHTML = "5 - " + all_question["question_5"] + "<br> <input id='answer_5'>"
                document.getElementById("ques_6").innerHTML = "6 - " + all_question["question_6"] + "<br> <input id='answer_6'>"
                document.getElementById("ques_7").innerHTML = "7 - " + all_question["question_7"] + "<br> <input id='answer_7'>"
                document.getElementById("ques_8").innerHTML = "8 - " + all_question["question_8"] + "<br> <input id='answer_8'>"
                document.getElementById("ques_9").innerHTML = "9- " + all_question["question_9"] + "<br> <input id='answer_9'>"
                document.getElementById("ques_10").innerHTML = "10 - " + all_question["question_10"] + "<br> <input id='answer_10'>"
                document.getElementById("submit").style.display = "block"
              }
            })
          })
          getAnswer(test_name)
        }

      }
    });
  });
 




}

function Submit() {
  firebase.database().ref(name_2+test_name+"Complete").update({

     complete:"Yes"
            })
  get_test_name_2= localStorage.getItem("test_name")
  answer_1_get = document.getElementById("answer_1").value
  answer_2_get = document.getElementById("answer_2").value
  answer_3_get = document.getElementById("answer_3").value
  answer_4_get = document.getElementById("answer_4").value

  answer_5_get = document.getElementById("answer_5").value
  answer_6_get = document.getElementById("answer_6").value
  answer_7_get = document.getElementById("answer_7").value
  answer_8_get = document.getElementById("answer_8").value

  answer_9_get = document.getElementById("answer_9").value
  answer_10_get = document.getElementById("answer_10").value
 
  firebase.database().ref("/"+name_2 + get_test_name_2).on('value', function (snapshot) {
    document.getElementById("status").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

        get_status = childData
get_status_attempt= get_status["status_2"]


        if (get_status_attempt == "attempt") {
          window.alert("You solve all the set of Question")
          document.getElementById("displayQuestion").display = "none"
    
        
        } else if(get_status_attempt!="attempt") {
    
       
          firebase.database().ref(name_2 + Teacher_name_display + get_test_name_2).push({

            answer_1: answer_1_get,
            answer_2: answer_2_get,
            answer_3: answer_3_get,
            answer_4: answer_4_get,
            answer_5: answer_5_get,
            answer_6: answer_6_get,
            answer_7: answer_7_get,
            answer_8: answer_8_get,
            answer_9: answer_9_get,
            answer_10: answer_10_get
          })
     document.getElementById("complted_test").innerHTML="Completed"
          firebase.database().ref(name_2 + test_name).update({
            status_2: "attempt"

          })
        }
      }
    });
  });




}

function getAnswer(Test_name){
 
  firebase.database().ref("/"+name_2 + Teacher_name_display +Test_name ).on('value', function (snapshot) {
    document.getElementById("status").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

       a= childData


Answer_1=a["answer_1"]
document.getElementById("status").innerHTML= "Completed! Go and check Result"
document.getElementById("answer_1").disabled =true;
document.getElementById("answer_2").disabled =true;
document.getElementById("answer_3").disabled =true;
document.getElementById("answer_4").disabled =true;
document.getElementById("answer_5").disabled =true;
document.getElementById("answer_6").disabled =true;
document.getElementById("answer_7").disabled =true;
document.getElementById("answer_8").disabled =true;
document.getElementById("answer_9").disabled =true;
document.getElementById("answer_10").disabled =true;
document.getElementById("submit").disabled=true
document.getElementById("answer_1").value=Answer_1
document.getElementById("answer_2").value=a["answer_2"]
document.getElementById("answer_3").value= a["answer_3"]
document.getElementById("answer_4").value= a["answer_4"]
document.getElementById("answer_5").value= a["answer_5"]
document.getElementById("answer_6").value=a["answer_6"]
document.getElementById("answer_7").value= a["answer_7"]
document.getElementById("answer_8").value= a["answer_8"]
document.getElementById("answer_9").value= a["answer_9"]
document.getElementById("answer_10").value= a["answer_10"]

    } });  });
   }

   function result(){
   
  
 

  getResult()
      } 

      test_name_result = localStorage.getItem("test_name")
      function getResult(){
 

        firebase.database().ref("/" + name_2+ " "+test_name_result+"Result").on('value', function (snapshot) {
          document.getElementById("display_answer").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
         
              message_data_ = childData;
    
          //  marks= all_answer["marks"]
          //  question_1_status=all_answer["question_1_status"]
         
          //  var row_result= " <h3> " + marks+ "</h3> <table> <tr> <th> S.No </th> <th> Question</th> <th> Question Status </th> </tr>"
          //  var display_answer_1= "<tr> <td>1 </td> <td>"+document.getElementById("ques_1").innerHTML +"</td> <td>"+question_1_status+"</td> </tr> </table>"
           
          //  document.getElementById("display_answer").innerHTML= row_result+ display_answer_1
       } });  }); }


       function display_question_div(){
        firebase.database().ref("/" + name_2 + test_name+"Complete").on('value', function (snapshot) {
               document.getElementById("display_answer").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
            get_data_attempt=childData
  
            if(get_data_attempt["complete"]=="Yes"){
              document.getElementById("complete_test_div").innerHTML +=row
                }else{
                  document.getElementById("live_test_div").innerHTML +=row
                 }
             
               }
             });
           });
          }

function chat(){
  document.getElementById("chat_div").style.display="block"
  document.getElementById("component").style.display="block"
  firebase.database().ref(name_2+"Message").on('value', function (snapshot) {
    document.getElementById("display_chat").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
     childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
 all_message=childData


 var message= "<h5 id'msg_display'>"+ all_message["message"]+ "</h5> <hr>"
 var name="<h5>" + all_message["name"]+"</h5>"
 document.getElementById("display_chat").innerHTML +=name+message
} });  }); }

       

function send(){
  firebase.database().ref(name_2+"Message").on('value', function (snapshot) {
    document.getElementById("display_chat").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
     childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
 all_message=childData


 var message= "<h5 id'msg_display'>"+ all_message["message"]+ "</h5> <hr>"
 var name="<h5>" + all_message["name"]+"</h5>"
 document.getElementById("display_chat").innerHTML +=name+message 
} });  });
  firebase.database().ref(name_2+"Message").push({
    message:document.getElementById("msg").value,
    name:name_2
  })
document.getElementById("msg").value=""
 }

 function result(){
  result_teacher_name= localStorage.getItem("teacher_name_student")
  firebase.database().ref("/" + result_teacher_name + "Questions").on('value', function (snapshot) {
    document.getElementById("Result").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        test_id = childKey
        get_test_name = childData
      
        test_name = get_test_name["test_name"]
        row_result = "<button id=" + test_name + " onclick='redirectToResultPage(this.id)' class='btn btn-info'>" + test_name + " </button>"


document.getElementById("Result").innerHTML +=row_result+ " "

      } });  }); }

      function redirectToResultPage(b){
        document.getElementById("display_error").innerHTML= "Result Not check"
          firebase.database().ref("/" + name_2+ " "+b+"Result").on('value', function (snapshot) {
            document.getElementById("display_answer").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
           
                message_data_ = childData;
               
  
             marks= message_data_["marks"]
             question_1_status=message_data_["question_1_status"]
             question_2_status=message_data_["question_2_status"]
             question_3_status=message_data_["question_3_status"]
             question_4_status=message_data_["question_4_status"]
             question_5_status=message_data_["question_5_status"]
             question_6_status=message_data_["question_6_status"]
             question_7_status=message_data_["question_7_status"]
             question_8_status=message_data_["question_8_status"]
             question_9_status=message_data_["question_9_status"]
             question_10_status=message_data_["question_10_status"]

           
           
           
            


             firebase.database().ref("/" + Teacher_name_display + "Questions"+b).on('value', function (snapshot) {
              document.getElementById("ques_1").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

all_question=childData
var row_result_2= " <h3> MARKS = " + marks+ "</h3> <table> <tr> <th> S.No </th> <th> Question</th> <th> Question Status </th> </tr>"
var display_answer_1= "<tr> <td>1 </td> <td>"+all_question["question_1"]+"</td> <td>"+question_1_status+"</td> </tr> "
var display_answer_2= "<tr> <td>1 </td> <td>"+all_question["question_2"]+"</td> <td>"+question_2_status+"</td> </tr> "
var display_answer_3= "<tr> <td>1 </td> <td>"+all_question["question_3"]+"</td> <td>"+question_3_status+"</td> </tr> "
var display_answer_4= "<tr> <td>1 </td> <td>"+all_question["question_4"]+"</td> <td>"+question_4_status+"</td> </tr> "
var display_answer_5= "<tr> <td>1 </td> <td>"+all_question["question_5"]+"</td> <td>"+question_5_status+"</td> </tr> "
var display_answer_6= "<tr> <td>1 </td> <td>"+all_question["question_6"]+"</td> <td>"+question_6_status+"</td> </tr>"
var display_answer_7= "<tr> <td>1 </td> <td>"+all_question["question_7"]+"</td> <td>"+question_7_status+"</td> </tr> "
var display_answer_8= "<tr> <td>1 </td> <td>"+all_question["question_8"]+"</td> <td>"+question_8_status+"</td> </tr> "
var display_answer_9= "<tr> <td>1 </td> <td>"+all_question["question_9"]+"</td> <td>"+question_9_status+"</td> </tr> "
var display_answer_10= "<tr> <td>1 </td> <td>"+all_question["question_10"]+"</td> <td>"+question_10_status+"</td> </tr> </table>"


document.getElementById("display_answer").innerHTML= row_result_2+ display_answer_1+ display_answer_2+ display_answer_3+ display_answer_4+ display_answer_5+ display_answer_6+ display_answer_7+ display_answer_8+ display_answer_9+ display_answer_10
document.getElementById("display_error").innerHTML= ""
} });  }); 
         } });  });
        
        
        
        
        }