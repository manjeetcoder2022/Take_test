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


teachername = localStorage.getItem("teacher")
document.getElementById("user_name").innerHTML = teachername +"!"
check()





function addStudent() {

  const name_1 = document.getElementById("name_1").value
  const mob_1 = document.getElementById("mob_1").value

  const name_2 = document.getElementById("name_2").value
  const mob_2 = document.getElementById("mob_2").value

  const name_3 = document.getElementById("name_3").value
  const mob_3 = document.getElementById("mob_3").value

  const name_4 = document.getElementById("name_4").value
  const mob_4 = document.getElementById("mob_4").value

  const name_5 = document.getElementById("name_5").value
  const mob_5 = document.getElementById("mob_5").value

  const name_6 = document.getElementById("name_6").value
  const mob_6 = document.getElementById("mob_6").value

  const name_7 = document.getElementById("name_7").value
  const mob_7 = document.getElementById("mob_7").value

  const name_8 = document.getElementById("name_8").value
  const mob_8 = document.getElementById("mob_8").value

  const name_9 = document.getElementById("name_9").value
  const mob_9 = document.getElementById("mob_9").value

  const name_10 = document.getElementById("name_10").value
  const mob_10 = document.getElementById("mob_10").value

  document.getElementById("name_1_show").innerHTML = name_1
  document.getElementById("mob_1_show").innerHTML = mob_1

  document.getElementById("name_2_show").innerHTML = name_2
  document.getElementById("mob_2_show").innerHTML = mob_2

  document.getElementById("name_3_show").innerHTML = name_3
  document.getElementById("mob_3_show").innerHTML = mob_3

  document.getElementById("name_4_show").innerHTML = name_4
  document.getElementById("mob_4_show").innerHTML = mob_4

  document.getElementById("name_5_show").innerHTML = name_5
  document.getElementById("mob_5_show").innerHTML = mob_5

  document.getElementById("name_6_show").innerHTML = name_6
  document.getElementById("mob_6_show").innerHTML = mob_6

  document.getElementById("name_7_show").innerHTML = name_7
  document.getElementById("mob_7_show").innerHTML = mob_7

  document.getElementById("name_8_show").innerHTML = name_8
  document.getElementById("mob_8_show").innerHTML = mob_8

  document.getElementById("name_9_show").innerHTML = name_9
  document.getElementById("mob_9_show").innerHTML = mob_9

  document.getElementById("name_10_show").innerHTML = name_10
  document.getElementById("mob_10_show").innerHTML = mob_10




}
function save() {
  localStorage.setItem("subject_name", document.getElementById("sub_name"))
}
function submit() {


  firebase.database().ref(teachername + "StudentName").push({
    student_1_name: document.getElementById("name_1").value,
    student_1_mob: document.getElementById("mob_1").value,
    student_2_name: document.getElementById("name_2").value,
    student_2_mob: document.getElementById("mob_2").value,
    student_3_name: document.getElementById("name_3").value,
    student_3_mob: document.getElementById("mob_3").value,
    student_4_name: document.getElementById("name_4").value,
    student_4_mob: document.getElementById("mob_4").value,
    student_5_name: document.getElementById("name_5").value,
    student_5_mob: document.getElementById("mob_5").value,
    student_6_name: document.getElementById("name_6").value,
    student_6_mob: document.getElementById("mob_6").value,
    student_7_name: document.getElementById("name_7").value,
    student_7_mob: document.getElementById("mob_7").value,
    student_8_name: document.getElementById("name_8").value,
    student_8_mob: document.getElementById("mob_8").value,
    student_9_name: document.getElementById("name_9").value,
    student_9_mob: document.getElementById("mob_9").value,
    student_10_name: document.getElementById("name_10").value,
    student_10_mob: document.getElementById("mob_10").value,
    subject_name: document.getElementById("sub_name").value
  })
  window.alert("Update Successfully")
  document.getElementById("chart_add_student").style.display="none"
}


function openAddStudent() {

  document.getElementById("chart_add_student").style.display = "block"

  document.getElementById("button_1").style.display = "none"

}




function showMyStudent() {
  firebase.database().ref("/" + teachername + "StudentName").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        firebase_message_id = childKey;

        getDetail = childData

        const student_1_name = getDetail["student_1_name"]
        const student_1_mob = getDetail["student_1_mob"]

        const student_2_name = getDetail["student_2_name"]
        const student_2_mob = getDetail["student_2_mob"]

        const student_3_name = getDetail["student_3_name"]
        const student_3_mob = getDetail["student_3_mob"]

        const student_4_name = getDetail["student_4_name"]
        const student_4_mob = getDetail["student_4_mob"]

        const student_5_name = getDetail["student_5_name"]
        const student_5_mob = getDetail["student_5_mob"]

        const student_6_name = getDetail["student_6_name"]
        const student_6_mob = getDetail["student_6_mob"]

        const student_7_name = getDetail["student_7_name"]
        const student_7_mob = getDetail["student_7_mob"]

        const student_8_name = getDetail["student_8_name"]
        const student_8_mob = getDetail["student_8_mob"]


        const student_9_name = getDetail["student_9_name"]
        const student_9_mob = getDetail["student_9_mob"]

        const student_10_name = getDetail["student_10_name"]
        const student_10_mob = getDetail["student_10_mob"]

        document.getElementById("my_1_name").innerHTML = student_1_name
        document.getElementById("my_1_mob").innerHTML = student_1_mob

        document.getElementById("my_2_name").innerHTML = student_2_name
        document.getElementById("my_2_mob").innerHTML = student_2_mob

        document.getElementById("my_3_name").innerHTML = student_3_name
        document.getElementById("my_3_mob").innerHTML = student_3_mob

        document.getElementById("my_4_name").innerHTML = student_4_name
        document.getElementById("my_4_mob").innerHTML = student_4_mob

        document.getElementById("my_5_name").innerHTML = student_5_name
        document.getElementById("my_5_mob").innerHTML = student_5_mob

        document.getElementById("my_6_name").innerHTML = student_6_name
        document.getElementById("my_6_mob").innerHTML = student_6_mob

        document.getElementById("my_7_name").innerHTML = student_7_name
        document.getElementById("my_7_mob").innerHTML = student_7_mob

        document.getElementById("my_8_name").innerHTML = student_8_name
        document.getElementById("my_8_mob").innerHTML = student_8_mob

        document.getElementById("my_9_name").innerHTML = student_9_name
        document.getElementById("my_9_mob").innerHTML = student_9_mob

        document.getElementById("my_10_name").innerHTML = student_10_name
        document.getElementById("my_10_mob").innerHTML = student_10_mob

        firebase.database().ref("/").child(student_1_name + "Teacher_name").update({
          TeacherName: teachername
        })

        firebase.database().ref("/").child(student_2_name + "Teacher_name").update({
          TeacherName: teachername
        })

        firebase.database().ref("/").child(student_3_name + "Teacher_name").update({
          TeacherName: teachername
        })

        firebase.database().ref("/").child(student_4_name + "Teacher_name").update({
          TeacherName: teachername
        })

        firebase.database().ref("/").child(student_5_name + "Teacher_name").update({
          TeacherName: teachername
        })

        firebase.database().ref("/").child(student_6_name + "Teacher_name").update({
          TeacherName: teachername
        })

        firebase.database().ref("/").child(student_7_name + "Teacher_name").update({
          TeacherName: teachername
        })

        firebase.database().ref("/").child(student_8_name + "Teacher_name").update({
          TeacherName: teachername
        })

        firebase.database().ref("/").child(student_9_name + "Teacher_name").update({
          TeacherName: teachername
        })

        firebase.database().ref("/").child(student_10_name + "Teacher_name").update({
          TeacherName: teachername
        })

      }
    });
  });
}
function myStudent() {

  showMyStudent()
}

function check() {
  firebase.database().ref(teachername + "StudentName").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        var Check = childData;
        if (Check != " ") {

          showMyStudent()
          document.getElementById("display_add").innerHTML ="Your Student"
          document.getElementById("table_2").style.display="block"
          document.getElementById("button_1").style.display = "block"
          document.getElementById("button_1").innerHTML = "Update Student Name"
          document.getElementById("getAnswer").style.display="block"
          document.getElementById("test_2").style.display="block"
          document.getElementById("answers").style.display="block"
          document.getElementById("quiers").style.display="block"
document.getElementById("quiers_").style.display="block"
          const student_1_name = getDetail["student_1_name"]
          const student_1_mob = getDetail["student_1_mob"]

          const student_2_name = getDetail["student_2_name"]
          const student_2_mob = getDetail["student_2_mob"]

          const student_3_name = getDetail["student_3_name"]
          const student_3_mob = getDetail["student_3_mob"]

          const student_4_name = getDetail["student_4_name"]
          const student_4_mob = getDetail["student_4_mob"]

          const student_5_name = getDetail["student_5_name"]
          const student_5_mob = getDetail["student_5_mob"]

          const student_6_name = getDetail["student_6_name"]
          const student_6_mob = getDetail["student_6_mob"]

          const student_7_name = getDetail["student_7_name"]
          const student_7_mob = getDetail["student_7_mob"]

          const student_8_name = getDetail["student_8_name"]
          const student_8_mob = getDetail["student_8_mob"]


          const student_9_name = getDetail["student_9_name"]
          const student_9_mob = getDetail["student_9_mob"]

          const student_10_name = getDetail["student_10_name"]
          const student_10_mob = getDetail["student_10_mob"]
          document.getElementById("name_1").value = student_1_name
          document.getElementById("mob_1").value = student_1_mob
          document.getElementById("name_2").value = student_2_name
          document.getElementById("mob_2").value = student_2_mob

          document.getElementById("name_3").value = student_3_name
          document.getElementById("mob_3").value = student_3_mob

          document.getElementById("name_4").value = student_4_name
          document.getElementById("mob_4").value = student_4_mob

          document.getElementById("name_5").value = student_5_name
          document.getElementById("mob_5").value = student_5_mob

          document.getElementById("name_6").value = student_6_name
          document.getElementById("mob_6").value = student_6_mob

          document.getElementById("name_7").value = student_7_name
          document.getElementById("mob_7").value = student_7_mob

          document.getElementById("name_8").value = student_8_name
          document.getElementById("mob_8").value = student_8_mob

          document.getElementById("name_9").value = student_9_name
          document.getElementById("mob_9").value = student_9_mob

          document.getElementById("name_10").value = student_10_name
          document.getElementById("mob_10").value = student_10_mob
          if (document.getElementById("button_1").innerHTML == "Update Student Name") {
            document.getElementById("test").style.display = "block"
          }
        }


      }
    });
  });
  firebase.database().ref(teachername + "StudentName").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        SubjectName = childData

        getSubjectName = SubjectName["subject_name"]
        if (getSubjectName == "") {
          document.getElementById("sub_text").style.display = "block"
          document.getElementById("sub_name").style.display = "block"
        } else {

          document.getElementById("sub_name").value = getSubjectName
        }
      }
    });
  });

}


function send_to_student() {
  if(document.getElementById("test_name").value==" "){

  }else{
  firebase.database().ref(teachername + "Questions").push({
    test_name: document.getElementById("test_name").value,
  })
  }
  firebase.database().ref(teachername + "Questions" + document.getElementById("test_name").value).push({
    question_1: document.getElementById("ques_1").value,
    question_2: document.getElementById("ques_2").value,
    question_3: document.getElementById("ques_3").value,
    question_4: document.getElementById("ques_4").value,
    question_5: document.getElementById("ques_5").value,
    question_6: document.getElementById("ques_6").value,
    question_7: document.getElementById("ques_7").value,
    question_8: document.getElementById("ques_8").value,
    question_9: document.getElementById("ques_9").value,
    question_10: document.getElementById("ques_10").value
  })
  document.getElementById("getAnswer").style.display = "block"
  window.alert("Send Successfully")
}

function getAnswer() {
  firebase.database().ref("/" + teachername + "Questions").on('value', function (snapshot) {
    document.getElementById("display_answer").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {


        get_test_name = childData

        test_name_fetch = get_test_name["test_name"]
   
        var row = "  <button id=" + test_name_fetch + "  onclick='redirectToResult(this.id)' class='btn btn-danger'>" + test_name_fetch + "</button>"
       
        document.getElementById("display_answer_button").innerHTML += row + " "

      }
    });
  });

}

function redirectToResult(name) {
  localStorage.setItem("Test_name", name)

  firebase.database().ref("/" + teachername + "StudentName").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        firebase_message_id = childKey;

        getDetail_1 = childData

        var student_1_name_fetch = getDetail_1["student_1_name"]


        var student_2_name_fetch = getDetail["student_2_name"]

        var student_3_name_fetch = getDetail["student_3_name"]

        var student_4_name_fetch = getDetail["student_4_name"]

        var student_5_name_fetch = getDetail["student_5_name"]

        var student_6_name_fetch = getDetail["student_6_name"]

        var student_7_name_fetch = getDetail["student_7_name"]

        var student_8_name_fetch = getDetail["student_8_name"]
    

        var student_9_name_fetch = getDetail["student_9_name"]

        var student_10_name_fetch = getDetail["student_10_name"]


        firebase.database().ref("/" + student_1_name_fetch + " " + name + "Result").on('value', function (snapshot) {
          document.getElementById("display_answer_1_status").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

              student_1_data = childData;
              student_1_marks = student_1_data["marks"]
              document.getElementById("display_answer_1_status").style.display = "block"
              document.getElementById("display_answer_1_status").innerHTML = "Previously Checked by you " + student_1_marks +"<br>"


            }
          });
        });
        firebase.database().ref("/" + student_2_name_fetch + " " + name + "Result").on('value', function (snapshot) {
          document.getElementById("display_answer_2_status").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

              student_2_data = childData;
              student_2_marks = student_2_data["marks"]
              document.getElementById("display_answer_2_status").style.display = "block"
              document.getElementById("display_answer_2_status").innerHTML = "Previously Checked by you " + student_2_marks +"<br>"


            }
          });
        });
        firebase.database().ref("/" + student_3_name_fetch + " " + name + "Result").on('value', function (snapshot) {
          document.getElementById("display_answer_3_status").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

              student_3_data = childData;
              student_3_marks = student_3_data["marks"]
              document.getElementById("display_answer_3_status").style.display = "block"
              document.getElementById("display_answer_3_status").innerHTML = "Previously Checked by you " + student_3_marks +"<br>"


            }
          });
        });

        firebase.database().ref("/" + student_4_name_fetch + " " + name + "Result").on('value', function (snapshot) {
          document.getElementById("display_answer_4_status").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

              student_4_data = childData;
              student_4_marks = student_4_data["marks"]
              document.getElementById("display_answer_4_status").style.display = "block"
              document.getElementById("display_answer_4_status").innerHTML = "Previously Checked by you " + student_4_marks +"<br>"


            }
          });
        });

        firebase.database().ref("/" + student_5_name_fetch + " " + name + "Result").on('value', function (snapshot) {
          document.getElementById("display_answer_5_status").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

              student_5_data = childData;
              student_5_marks = student_5_data["marks"]
              document.getElementById("display_answer_5_status").style.display = "block"
              document.getElementById("display_answer_5_status").innerHTML = "Previously Checked by you " + student_5_marks +"<br>"


            }
          });
        });

        firebase.database().ref("/" + student_6_name_fetch + " " + name + "Result").on('value', function (snapshot) {
          document.getElementById("display_answer_6_status").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

              student_6_data = childData;
              student_6_marks = student_6_data["marks"]
              document.getElementById("display_answer_6_status").style.display = "block"
              document.getElementById("display_answer_6_status").innerHTML = "Previously Checked by you " + student_6_marks +"<br>"


            }
          });
        });

        firebase.database().ref("/" + student_7_name_fetch + " " + name + "Result").on('value', function (snapshot) {
          document.getElementById("display_answer_7_status").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

              student_7_data = childData;
              student_7_marks = student_7_data["marks"]
              document.getElementById("display_answer_7_status").style.display = "block"
              document.getElementById("display_answer_7_status").innerHTML = "Previously Checked by you " + student_7_marks +"<br>"


            }
          });
        });

        firebase.database().ref("/" + student_8_name_fetch + " " + name + "Result").on('value', function (snapshot) {
          document.getElementById("display_answer_3_status").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

              student_8_data = childData;
              student_8_marks = student_3_data["marks"]
              document.getElementById("display_answer_8_status").style.display = "block"
              document.getElementById("display_answer_8_status").innerHTML = "Previously Checked by you " + student_8_marks +"<br>"


            }
          });
        });

        firebase.database().ref("/" + student_9_name_fetch + " " + name + "Result").on('value', function (snapshot) {
          document.getElementById("display_answer_9_status").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

              student_9_data = childData;
              student_9_marks = student_9_data["marks"]
              document.getElementById("display_answer_9_status").style.display = "block"
              document.getElementById("display_answer_9_status").innerHTML ="Previously Checked by you " + student_9_marks +"<br>"


            }
          });
        });

        firebase.database().ref("/" + student_10_name_fetch + " " + name + "Result").on('value', function (snapshot) {
          document.getElementById("display_answer_3_status").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

              student_10_data = childData;
              student_10_marks = student_3_data["marks"]
              document.getElementById("display_answer_10_status").style.display = "block"
              document.getElementById("display_answer_10_status").innerHTML = "Previously Checked by you " + student_10_marks +"<br>"


            }
          });
        });
        //getting Question
        firebase.database().ref("/" + teachername + "Questions" + name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
              firebase_message_id = childKey;
              allQuestion = childData
              question_1_student = allQuestion["question_1"]
              question_2_student = allQuestion["question_2"]
              question_3_student = allQuestion["question_3"]
              question_4_student = allQuestion["question_4"]
              question_5_student = allQuestion["question_5"]
              question_6_student = allQuestion["question_6"]
              question_7_student = allQuestion["question_7"]
              question_8_student = allQuestion["question_8"]
              question_9_student = allQuestion["question_9"]
              question_10_student = allQuestion["question_10"]
              //getting answer_1
document.getElementById("display_answer_1").style="block"
              firebase.database().ref("/" + student_1_name_fetch + teachername + name).on('value', function (snapshot) {
                document.getElementById("display_answer_1").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

                    getstudentAnswer = childData

                    answer_1_student_1 = getstudentAnswer["answer_1"]
                    answer_2_student_1 = getstudentAnswer["answer_2"]
                    answer_3_student_1 = getstudentAnswer["answer_3"]
                    answer_4_student_1 = getstudentAnswer["answer_4"]
                    answer_5_student_1 = getstudentAnswer["answer_5"]
                    answer_6_student_1 = getstudentAnswer["answer_6"]
                    answer_7_student_1 = getstudentAnswer["answer_7"]
                    answer_8_student_1 = getstudentAnswer["answer_8"]
                    answer_9_student_1 = getstudentAnswer["answer_9"]
                    answer_10_student_1 = getstudentAnswer["answer_10"]

                    right_button_1_1 = "<button onclick='right_button_1_1_()' class='btn btn-success'> Right </button>"
                    wrong_button_1_1 = "<button onclick='wrong_button_1_1_()' class='btn btn-danger'> Wrong </button>"

                    right_button_1_2 = "<button onclick='right_button_1_2_()' class='btn btn-success'> Right </button>"
                    wrong_button_1_2 = "<button onclick='wrong_button_1_2_()' class='btn btn-danger'> Wrong </button>"

                    right_button_1_3 = "<button onclick='right_button_1_3_()' class='btn btn-success'> Right </button>"
                    wrong_button_1_3 = "<button onclick='wrong_button_1_3_()' class='btn btn-danger'> Wrong </button>"

                    right_button_1_4 = "<button onclick='right_button_1_4_()' class='btn btn-success'> Right </button>"
                    wrong_button_1_4 = "<button onclick='wrong_button_1_4_()' class='btn btn-danger'> Wrong </button>"

                    right_button_1_5 = "<button onclick='right_button_1_5_()' class='btn btn-success'> Right </button>"
                    wrong_button_1_5 = "<button onclick='wrong_button_1_5_()' class='btn btn-danger'> Wrong </button>"

                    right_button_1_6 = "<button onclick='right_button_1_6_()' class='btn btn-success'> Right </button>"
                    wrong_button_1_6 = "<button onclick='wrong_button_1_6_()' class='btn btn-danger'> Wrong </button>"

                    right_button_1_7 = "<button onclick='right_button_1_7_()' class='btn btn-success'> Right </button>"
                    wrong_button_1_7 = "<button onclick='wrong_button_1_7_()' class='btn btn-danger'> Wrong </button>"

                    right_button_1_8 = "<button onclick='right_button_1_8_()' class='btn btn-success'> Right </button>"
                    wrong_button_1_8 = "<button onclick='wrong_button_1_8_()' class='btn btn-danger'> Wrong </button>"

                    right_button_1_9 = "<button onclick='right_button_1_9_()' class='btn btn-success'> Right </button>"
                    wrong_button_1_9 = "<button onclick='wrong_button_1_9_()' class='btn btn-danger'> Wrong </button>"

                    right_button_1_10 = "<button onclick='right_button_1_10_()' class='btn btn-success'> Right </button>"
                    wrong_button_1_10 = "<button onclick='wrong_button_1_10_()' class='btn btn-danger'> Wrong </button>"

                    answer_1_display_1 = "<span>1 - </span> <b> Student Name :  </b><h4 id='c_name'>" + student_1_name_fetch + " </h4>  <h4> <b> Test Name :" + name + " </b> </h4>  <table> <tr> <th> S.No </th> <th> Questions</th> <th>   Answers</th> <th>Check </th> </tr> <tr> <td> 1  </td><td>" + question_1_student + "</td> <td id='answer_1_1'>" + answer_1_student_1 + "</td><td>" + right_button_1_1 + " " + wrong_button_1_1 + "</td> </tr> "
                    answer_2_display_1 = "<tr> <td> 2  </td> <td>" + question_2_student + "</td> <td id='answer_1_2'>" + answer_2_student_1 + "</td> <td>" + right_button_1_2 + " " + wrong_button_1_2 + "</td></tr>"
                    answer_3_display_1 = "<tr> <td> 3  </td> <td>" + question_3_student + "</td> <td id='answer_1_3'>" + answer_3_student_1 + "</td> <td>" + right_button_1_3 + " " + wrong_button_1_3 + "</td></tr>"
                    answer_4_display_1 = "<tr> <td> 4   </td><td>" + question_4_student + "</td> <td id='answer_1_4'>" + answer_4_student_1 + "</td> <td>" + right_button_1_4 + " " + wrong_button_1_4 + "</td></tr> "
                    answer_5_display_1 = "<tr><td>  5   </td><td>" + question_5_student + "</td> <td id='answer_1_5'>" + answer_5_student_1 + "</td> <td>" + right_button_1_5 + " " + wrong_button_1_5 + "</td></tr> "
                    answer_6_display_1 = "  <tr><td> 6   </td> <td>" + question_6_student + "</td> <td id='answer_1_6'>" + answer_6_student_1 + "</td><td>" + right_button_1_6 + " " + wrong_button_1_6 + "</td> </tr> "
                    answer_7_display_1 = " <tr> <td> 7   </td><td>" + question_7_student + "</td> <td id='answer_1_7'>" + answer_7_student_1 + "</td> <td>" + right_button_1_7 + " " + wrong_button_1_7 + "</td></tr> "
                    answer_8_display_1 = "  <tr> <td> 8   </td> <td>" + question_8_student + "</td> <td id='answer_1_8'>" + answer_8_student_1 + "</td><td>" + right_button_1_8 + " " + wrong_button_1_8 + "</td> </tr> "
                    answer_9_display_1 = "  <tr> <td> 9  </td> <td>" + question_9_student + "</td> <td id='answer_1_9'>" + answer_9_student_1 + "</td> <td>" + right_button_1_9 + " " + wrong_button_1_9 + "</td></tr> "
                    answer_10_display_1 = "  <tr><td> 10  </td><td>" + question_10_student + "</td> <td id='answer_1_10'>" + answer_10_student_1 + "</td><td>" + right_button_1_10 + " " + wrong_button_1_10 + "</td> </tr> </table>"
                    check_button_1 = "<button onclick='check_1()' class='btn btn'info'>Checked </button>"
                    document.getElementById("display_answer_1").innerHTML = answer_1_display_1 + answer_2_display_1 + answer_3_display_1 + answer_4_display_1 + answer_5_display_1 + answer_6_display_1 + answer_7_display_1 + answer_8_display_1 + answer_9_display_1 + answer_10_display_1 + check_button_1



                  }
                });
              });

              //getting answer_2
              document.getElementById("display_answer_2").style="block"
              firebase.database().ref("/" + student_2_name_fetch + teachername + name).on('value', function (snapshot) {
                document.getElementById("display_answer_2").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

                    getstudentAnswer_2 = childData

                    answer_1_student_2 = getstudentAnswer_2["answer_1"]
                    answer_2_student_2 = getstudentAnswer_2["answer_2"]
                    answer_3_student_2 = getstudentAnswer_2["answer_3"]
                    answer_4_student_2 = getstudentAnswer_2["answer_4"]
                    answer_5_student_2 = getstudentAnswer_2["answer_5"]
                    answer_6_student_2 = getstudentAnswer_2["answer_6"]
                    answer_7_student_2 = getstudentAnswer_2["answer_7"]
                    answer_8_student_2 = getstudentAnswer_2["answer_8"]
                    answer_9_student_2 = getstudentAnswer_2["answer_9"]
                    answer_10_student_2 = getstudentAnswer_2["answer_10"]

                    right_button_2_1 = "<button onclick='right_button_2_1_()' class='btn btn-success'> Right </button>"
                    wrong_button_2_1 = "<button onclick='wrong_button_2_1_()' class='btn btn-danger'> Wrong </button>"

                    right_button_2_2 = "<button onclick='right_button_2_2_()' class='btn btn-success'> Right </button>"
                    wrong_button_2_2 = "<button onclick='wrong_button_2_2_()' class='btn btn-danger'> Wrong </button>"

                    right_button_2_3 = "<button onclick='right_button_2_3_()' class='btn btn-success'> Right </button>"
                    wrong_button_2_3 = "<button onclick='wrong_button_2_3_()' class='btn btn-danger'> Wrong </button>"

                    right_button_2_4 = "<button onclick='right_button_2_4_()' class='btn btn-success'> Right </button>"
                    wrong_button_2_4 = "<button onclick='wrong_button_2_4_()' class='btn btn-danger'> Wrong </button>"

                    right_button_2_5 = "<button onclick='right_button_2_5_()' class='btn btn-success'> Right </button>"
                    wrong_button_2_5 = "<button onclick='wrong_button_2_5_()' class='btn btn-danger'> Wrong </button>"

                    right_button_2_6 = "<button onclick='right_button_2_6_()' class='btn btn-success'> Right </button>"
                    wrong_button_2_6 = "<button onclick='wrong_button_2_6_()' class='btn btn-danger'> Wrong </button>"

                    right_button_2_7 = "<button onclick='right_button_2_7_()' class='btn btn-success'> Right </button>"
                    wrong_button_2_7 = "<button onclick='wrong_button_2_7_()' class='btn btn-danger'> Wrong </button>"

                    right_button_2_8 = "<button onclick='right_button_2_8_()' class='btn btn-success'> Right </button>"
                    wrong_button_2_8 = "<button onclick='wrong_button_2_8_()' class='btn btn-danger'> Wrong </button>"

                    right_button_2_9 = "<button onclick='right_button_2_9_()' class='btn btn-success'> Right </button>"
                    wrong_button_2_9 = "<button onclick='wrong_button_2_9_()' class='btn btn-danger'> Wrong </button>"

                    right_button_2_10 = "<button onclick='right_button_2_10_()' class='btn btn-success'> Right </button>"
                    wrong_button_2_10 = "<button onclick='wrong_button_2_10_()' class='btn btn-danger'> Wrong </button>"

                    answer_1_display_2 = "<span>2 - </span> <b> Student Name :  </b><h4 id='c_name_2'>" + student_2_name_fetch + " </h4>  <h4> <b> Test Name :" + name + " </b> </h4><table> <tr> <th> S.No </th> <th> Questions</th> <th>   Answers</th> <th>Check </th> </tr> <tr> <td> 1  </td><td>" + question_1_student + "</td> <td id='answer_2_1'>" + answer_1_student_2 + "</td><td>" + right_button_2_1 + " " + wrong_button_2_1 + "</td> </tr> "
                    answer_2_display_2 = "<tr> <td> 2  </td> <td>" + question_2_student + "</td> <td id='answer_2_2'>" + answer_2_student_2 + "</td> <td>" + right_button_2_2 + " " + wrong_button_2_2 + "</td></tr>"
                    answer_3_display_2 = "<tr> <td> 3  </td> <td>" + question_3_student + "</td> <td id='answer_2_3'>" + answer_3_student_2 + "</td> <td>" + right_button_2_3 + " " + wrong_button_2_3 + "</td></tr>"
                    answer_4_display_2 = "<tr> <td> 4   </td><td>" + question_4_student + "</td> <td id='answer_2_4'>" + answer_4_student_2 + "</td> <td>" + right_button_2_4 + " " + wrong_button_2_4 + "</td></tr> "
                    answer_5_display_2 = "<tr><td>  5   </td><td>" + question_5_student + "</td> <td id='answer_2_5'>" + answer_5_student_2 + "</td> <td>" + right_button_2_5 + " " + wrong_button_2_5 + "</td></tr> "
                    answer_6_display_2 = "  <tr><td> 6   </td> <td>" + question_6_student + "</td> <td id='answer_2_6'>" + answer_6_student_2 + "</td><td>" + right_button_2_6 + " " + wrong_button_2_6 + "</td> </tr> "
                    answer_7_display_2 = " <tr> <td> 7   </td><td>" + question_7_student + "</td> <td id='answer_2_7'>" + answer_7_student_2 + "</td> <td>" + right_button_2_7 + " " + wrong_button_2_7 + "</td></tr> "
                    answer_8_display_2 = "  <tr> <td> 8   </td> <td>" + question_8_student + "</td> <td id='answer_2_8'>" + answer_8_student_2 + "</td><td>" + right_button_2_8 + " " + wrong_button_2_8 + "</td> </tr> "
                    answer_9_display_2 = "  <tr> <td> 9  </td> <td>" + question_9_student + "</td> <td id='answer_2_9'>" + answer_9_student_2 + "</td> <td>" + right_button_2_9 + " " + wrong_button_2_9 + "</td></tr> "
                    answer_10_display_2 = "  <tr><td> 10  </td><td>" + question_10_student + "</td> <td id='answer_2_10'>" + answer_10_student_2 + "</td><td>" + right_button_2_10 + " " + wrong_button_2_10 + "</td> </tr> </table>"
                    check_button_2 = "<button onclick='check_2()' class='btn btn'info'>Checked </button>"
                    document.getElementById("display_answer_2").innerHTML = answer_1_display_2 + answer_2_display_2 + answer_3_display_2 + answer_4_display_2 + answer_5_display_2 + answer_6_display_2 + answer_7_display_2 + answer_8_display_2 + answer_9_display_2 + answer_10_display_2 + check_button_2

                  }
                });
              });

              //geting answer 3
              document.getElementById("display_answer_3").style="block"
              firebase.database().ref("/" + student_3_name_fetch + teachername + name).on('value', function (snapshot) {
                document.getElementById("display_answer_3").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

                    getstudentAnswer_3 = childData

                    answer_1_student_3 = getstudentAnswer_3["answer_1"]
                    answer_2_student_3 = getstudentAnswer_3["answer_2"]
                    answer_3_student_3 = getstudentAnswer_3["answer_3"]
                    answer_4_student_3 = getstudentAnswer_3["answer_4"]
                    answer_5_student_3 = getstudentAnswer_3["answer_5"]
                    answer_6_student_3 = getstudentAnswer_3["answer_6"]
                    answer_7_student_3 = getstudentAnswer_3["answer_7"]
                    answer_8_student_3 = getstudentAnswer_3["answer_8"]
                    answer_9_student_3 = getstudentAnswer_3["answer_9"]
                    answer_10_student_3 = getstudentAnswer_3["answer_10"]

                    right_button_3_1 = "<button onclick='right_button_3_1_()' class='btn btn-success'> Right </button>"
                    wrong_button_3_1 = "<button onclick='wrong_button_3_1_()' class='btn btn-danger'> Wrong </button>"

                    right_button_3_2 = "<button onclick='right_button_3_2_()' class='btn btn-success'> Right </button>"
                    wrong_button_3_2 = "<button onclick='wrong_button_3_2_()' class='btn btn-danger'> Wrong </button>"

                    right_button_3_3 = "<button onclick='right_button_3_3_()' class='btn btn-success'> Right </button>"
                    wrong_button_3_3 = "<button onclick='wrong_button_3_3_()' class='btn btn-danger'> Wrong </button>"

                    right_button_3_4 = "<button onclick='right_button_3_4_()' class='btn btn-success'> Right </button>"
                    wrong_button_3_4 = "<button onclick='wrong_button_3_4_()' class='btn btn-danger'> Wrong </button>"

                    right_button_3_5 = "<button onclick='right_button_3_5_()' class='btn btn-success'> Right </button>"
                    wrong_button_3_5 = "<button onclick='wrong_button_3_5_()' class='btn btn-danger'> Wrong </button>"

                    right_button_3_6 = "<button onclick='right_button_3_6_()' class='btn btn-success'> Right </button>"
                    wrong_button_3_6 = "<button onclick='wrong_button_3_6_()' class='btn btn-danger'> Wrong </button>"

                    right_button_3_7 = "<button onclick='right_button_3_7_()' class='btn btn-success'> Right </button>"
                    wrong_button_3_7 = "<button onclick='wrong_button_3_7_()' class='btn btn-danger'> Wrong </button>"

                    right_button_3_8 = "<button onclick='right_button_3_8_()' class='btn btn-success'> Right </button>"
                    wrong_button_3_8 = "<button onclick='wrong_button_3_8_()' class='btn btn-danger'> Wrong </button>"

                    right_button_3_9 = "<button onclick='right_button_3_9_()' class='btn btn-success'> Right </button>"
                    wrong_button_3_9 = "<button onclick='wrong_button_3_9_()' class='btn btn-danger'> Wrong </button>"

                    right_button_3_10 = "<button onclick='right_button_3_10_()' class='btn btn-success'> Right </button>"
                    wrong_button_3_10 = "<button onclick='wrong_button_3_10_()' class='btn btn-danger'> Wrong </button>"

                    answer_1_display_3 = " <span>3 - </span><b> Student Name :  </b><h4 id='c_name_3'>" + student_3_name_fetch + " </h4>  <h4> <b> Test Name :" + name + " </b> </h4><table> <tr> <th> S.No </th> <th> Questions</th> <th>   Answers</th> <th>Check </th> </tr> <tr> <td> 1  </td><td>" + question_1_student + "</td> <td id='answer_3_1'>" + answer_1_student_3 + "</td><td>" + right_button_3_1 + " " + wrong_button_3_1 + "</td> </tr> "
                    answer_2_display_3 = "<tr> <td> 2  </td> <td>" + question_2_student + "</td> <td id='answer_3_2'>" + answer_2_student_3 + "</td> <td>" + right_button_3_2 + " " + wrong_button_3_2 + "</td></tr>"
                    answer_3_display_3 = "<tr> <td> 3  </td> <td>" + question_3_student + "</td> <td id='answer_3_3'>" + answer_3_student_3 + "</td> <td>" + right_button_3_3 + " " + wrong_button_3_3 + "</td></tr>"
                    answer_4_display_3 = "<tr> <td> 4   </td><td>" + question_4_student + "</td> <td id='answer_3_4'>" + answer_4_student_3 + "</td> <td>" + right_button_3_4 + " " + wrong_button_3_4 + "</td></tr> "
                    answer_5_display_3 = "<tr><td>  5   </td><td>" + question_5_student + "</td> <td id='answer_3_5'>" + answer_5_student_3 + "</td> <td>" + right_button_3_5 + " " + wrong_button_3_5 + "</td></tr> "
                    answer_6_display_3 = "  <tr><td> 6   </td> <td>" + question_6_student + "</td> <td id='answer_3_6'>" + answer_6_student_3 + "</td><td>" + right_button_3_6 + " " + wrong_button_3_6 + "</td> </tr> "
                    answer_7_display_3 = " <tr> <td> 7   </td><td>" + question_7_student + "</td> <td id='answer_3_7'>" + answer_7_student_3 + "</td> <td>" + right_button_3_7 + " " + wrong_button_3_7 + "</td></tr> "
                    answer_8_display_3 = "  <tr> <td> 8   </td> <td>" + question_8_student + "</td> <td id='answer_3_8'>" + answer_8_student_3 + "</td><td>" + right_button_3_8 + " " + wrong_button_3_8 + "</td> </tr> "
                    answer_9_display_3 = "  <tr> <td> 9  </td> <td>" + question_9_student + "</td> <td id='answer_3_9'>" + answer_9_student_3 + "</td> <td>" + right_button_3_9 + " " + wrong_button_3_9 + "</td></tr> "
                    answer_10_display_3 = "  <tr><td> 10  </td><td>" + question_10_student + "</td> <td id='answer_3_10'>" + answer_10_student_3 + "</td><td>" + right_button_3_10 + " " + wrong_button_3_10 + "</td> </tr> </table>"
                    check_button_3 = "<button onclick='check_3()' class='btn btn'info'>Checked </button>"
                    document.getElementById("display_answer_3").innerHTML = answer_1_display_3 + answer_2_display_3 + answer_3_display_3 + answer_4_display_3 + answer_5_display_3 + answer_6_display_3 + answer_7_display_3 + answer_8_display_3 + answer_9_display_3 + answer_10_display_3 + check_button_3

                  }
                });
              });

              //geting answer 4
              document.getElementById("display_answer_4").style="block"
              firebase.database().ref("/" + student_4_name_fetch + teachername + name).on('value', function (snapshot) {
                document.getElementById("display_answer_4").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

                    getstudentAnswer_4 = childData

                    answer_1_student_4 = getstudentAnswer_4["answer_1"]
                    answer_2_student_4 = getstudentAnswer_4["answer_2"]
                    answer_3_student_4 = getstudentAnswer_4["answer_3"]
                    answer_4_student_4 = getstudentAnswer_4["answer_4"]
                    answer_5_student_4 = getstudentAnswer_4["answer_5"]
                    answer_6_student_4 = getstudentAnswer_4["answer_6"]
                    answer_7_student_4 = getstudentAnswer_4["answer_7"]
                    answer_8_student_4 = getstudentAnswer_4["answer_8"]
                    answer_9_student_4 = getstudentAnswer_4["answer_9"]
                    answer_10_student_4 = getstudentAnswer_4["answer_10"]

                    right_button_4_1 = "<button onclick='right_button_4_1_()' class='btn btn-success'> Right </button>"
                    wrong_button_4_1 = "<button onclick='wrong_button_4_1_()' class='btn btn-danger'> Wrong </button>"

                    right_button_4_2 = "<button onclick='right_button_4_2_()' class='btn btn-success'> Right </button>"
                    wrong_button_4_2 = "<button onclick='wrong_button_4_2_()' class='btn btn-danger'> Wrong </button>"

                    right_button_4_3 = "<button onclick='right_button_4_3_()' class='btn btn-success'> Right </button>"
                    wrong_button_4_3 = "<button onclick='wrong_button_4_3_()' class='btn btn-danger'> Wrong </button>"

                    right_button_4_4 = "<button onclick='right_button_4_4_()' class='btn btn-success'> Right </button>"
                    wrong_button_4_4 = "<button onclick='wrong_button_4_4_()' class='btn btn-danger'> Wrong </button>"

                    right_button_4_5 = "<button onclick='right_button_4_5_()' class='btn btn-success'> Right </button>"
                    wrong_button_4_5 = "<button onclick='wrong_button_4_5_()' class='btn btn-danger'> Wrong </button>"

                    right_button_4_6 = "<button onclick='right_button_4_6_()' class='btn btn-success'> Right </button>"
                    wrong_button_4_6 = "<button onclick='wrong_button_4_6_()' class='btn btn-danger'> Wrong </button>"

                    right_button_4_7 = "<button onclick='right_button_4_7_()' class='btn btn-success'> Right </button>"
                    wrong_button_4_7 = "<button onclick='wrong_button_4_7_()' class='btn btn-danger'> Wrong </button>"

                    right_button_4_8 = "<button onclick='right_button_4_8_()' class='btn btn-success'> Right </button>"
                    wrong_button_4_8 = "<button onclick='wrong_button_4_8_()' class='btn btn-danger'> Wrong </button>"

                    right_button_4_9 = "<button onclick='right_button_4_9_()' class='btn btn-success'> Right </button>"
                    wrong_button_4_9 = "<button onclick='wrong_button_4_9_()' class='btn btn-danger'> Wrong </button>"

                    right_button_4_10 = "<button onclick='right_button_4_10_()' class='btn btn-success'> Right </button>"
                    wrong_button_4_10 = "<button onclick='wrong_button_4_10_()' class='btn btn-danger'> Wrong </button>"

                    answer_1_display_4 = "<span>4 - </span> <b> Student Name :  </b><h4 id='c_name_4'>" + student_4_name_fetch + " </h4>  <h4> <b> Test Name :" + name + " </b> </h4><table> <tr> <th> S.No </th> <th> Questions</th> <th>   Answers</th> <th>Check </th> </tr> <tr> <td> 1  </td><td>" + question_1_student + "</td> <td id='answer_4_1'>" + answer_1_student_4 + "</td><td>" + right_button_4_1 + " " + wrong_button_4_1 + "</td> </tr> "
                    answer_2_display_4 = "<tr> <td> 2  </td> <td>" + question_2_student + "</td> <td id='answer_4_2'>" + answer_2_student_4 + "</td> <td>" + right_button_4_2 + " " + wrong_button_4_2 + "</td></tr>"
                    answer_3_display_4 = "<tr> <td> 3  </td> <td>" + question_3_student + "</td> <td id='answer_4_3'>" + answer_3_student_4 + "</td> <td>" + right_button_4_3 + " " + wrong_button_4_3 + "</td></tr>"
                    answer_4_display_4 = "<tr> <td> 4   </td><td>" + question_4_student + "</td> <td id='answer_4_4'>" + answer_4_student_4 + "</td> <td>" + right_button_4_4 + " " + wrong_button_4_4 + "</td></tr> "
                    answer_5_display_4 = "<tr><td>  5   </td><td>" + question_5_student + "</td> <td id='answer_4_5'>" + answer_5_student_4 + "</td> <td>" + right_button_4_5 + " " + wrong_button_4_5 + "</td></tr> "
                    answer_6_display_4 = "  <tr><td> 6   </td> <td>" + question_6_student + "</td> <td id='answer_4_6'>" + answer_6_student_4 + "</td><td>" + right_button_4_6 + " " + wrong_button_4_6 + "</td> </tr> "
                    answer_7_display_4 = " <tr> <td> 7   </td><td>" + question_7_student + "</td> <td id='answer_4_7'>" + answer_7_student_4 + "</td> <td>" + right_button_4_7 + " " + wrong_button_4_7 + "</td></tr> "
                    answer_8_display_4 = "  <tr> <td> 8   </td> <td>" + question_8_student + "</td> <td id='answer_4_8'>" + answer_8_student_4 + "</td><td>" + right_button_4_8 + " " + wrong_button_4_8 + "</td> </tr> "
                    answer_9_display_4 = "  <tr> <td> 9  </td> <td>" + question_9_student + "</td> <td id='answer_4_9'>" + answer_9_student_4 + "</td> <td>" + right_button_4_9 + " " + wrong_button_4_9 + "</td></tr> "
                    answer_10_display_4 = "  <tr><td> 10  </td><td>" + question_10_student + "</td> <td id='answer_4_10'>" + answer_10_student_4 + "</td><td>" + right_button_4_10 + " " + wrong_button_4_10 + "</td> </tr> </table>"
                    check_button_4 = "<button onclick='check_4()' class='btn btn'info'>Checked </button>"
                    document.getElementById("display_answer_4").innerHTML = answer_1_display_4 + answer_2_display_4 + answer_3_display_4 + answer_4_display_3 + answer_5_display_4 + answer_6_display_4 + answer_7_display_4 + answer_8_display_4 + answer_9_display_4 + answer_10_display_4 + check_button_4


                  }
                });
              });
              //geting answer 5
              document.getElementById("display_answer_5").style="block"
              firebase.database().ref("/" + student_5_name_fetch + teachername + name).on('value', function (snapshot) {
                document.getElementById("display_answer_5").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

                    getstudentAnswer_5 = childData

                    answer_1_student_5 = getstudentAnswer_5["answer_1"]
                    answer_2_student_5 = getstudentAnswer_5["answer_2"]
                    answer_3_student_5 = getstudentAnswer_5["answer_3"]
                    answer_4_student_5 = getstudentAnswer_5["answer_4"]
                    answer_5_student_5 = getstudentAnswer_5["answer_5"]
                    answer_6_student_5 = getstudentAnswer_5["answer_6"]
                    answer_7_student_5 = getstudentAnswer_5["answer_7"]
                    answer_8_student_5 = getstudentAnswer_5["answer_8"]
                    answer_9_student_5 = getstudentAnswer_5["answer_9"]
                    answer_10_student_5 = getstudentAnswer_5["answer_10"]

                    right_button_5_1 = "<button onclick='right_button_5_1_()' class='btn btn-success'> Right </button>"
                    wrong_button_5_1 = "<button onclick='wrong_button_5_1_()' class='btn btn-danger'> Wrong </button>"

                    right_button_5_2 = "<button onclick='right_button_5_2_()' class='btn btn-success'> Right </button>"
                    wrong_button_5_2 = "<button onclick='wrong_button_5_2_()' class='btn btn-danger'> Wrong </button>"

                    right_button_5_3 = "<button onclick='right_button_5_3_()' class='btn btn-success'> Right </button>"
                    wrong_button_5_3 = "<button onclick='wrong_button_5_3_()' class='btn btn-danger'> Wrong </button>"

                    right_button_5_4 = "<button onclick='right_button_5_4_()' class='btn btn-success'> Right </button>"
                    wrong_button_5_4 = "<button onclick='wrong_button_5_4_()' class='btn btn-danger'> Wrong </button>"

                    right_button_5_5 = "<button onclick='right_button_5_5_()' class='btn btn-success'> Right </button>"
                    wrong_button_5_5 = "<button onclick='wrong_button_5_5_()' class='btn btn-danger'> Wrong </button>"

                    right_button_5_6 = "<button onclick='right_button_5_6_()' class='btn btn-success'> Right </button>"
                    wrong_button_5_6 = "<button onclick='wrong_button_5_6_()' class='btn btn-danger'> Wrong </button>"

                    right_button_5_7 = "<button onclick='right_button_5_7_()' class='btn btn-success'> Right </button>"
                    wrong_button_5_7 = "<button onclick='wrong_button_5_7_()' class='btn btn-danger'> Wrong </button>"

                    right_button_5_8 = "<button onclick='right_button_5_8_()' class='btn btn-success'> Right </button>"
                    wrong_button_5_8 = "<button onclick='wrong_button_5_8_()' class='btn btn-danger'> Wrong </button>"

                    right_button_5_9 = "<button onclick='right_button_5_9_()' class='btn btn-success'> Right </button>"
                    wrong_button_5_9 = "<button onclick='wrong_button_5_9_()' class='btn btn-danger'> Wrong </button>"

                    right_button_5_10 = "<button onclick='right_button_5_10_()' class='btn btn-success'> Right </button>"
                    wrong_button_5_10 = "<button onclick='wrong_button_5_10_()' class='btn btn-danger'> Wrong </button>"

                    answer_1_display_5 = " <span>5 - </span><b> Student Name :  </b><h4 id='c_name_5'>" + student_5_name_fetch + " </h4>  <h4> <b> Test Name :" + name + " </b> </h4><table> <tr> <th> S.No </th> <th> Questions</th> <th>   Answers</th> <th>Check </th> </tr> <tr> <td> 1  </td><td>" + question_1_student + "</td> <td id='answer_5_1'>" + answer_1_student_5 + "</td><td>" + right_button_5_1 + " " + wrong_button_5_1 + "</td> </tr> "
                    answer_2_display_5 = "<tr> <td> 2  </td> <td>" + question_2_student + "</td> <td id='answer_5_2'>" + answer_2_student_5 + "</td> <td>" + right_button_5_2 + " " + wrong_button_5_2 + "</td></tr>"
                    answer_3_display_5 = "<tr> <td> 3  </td> <td>" + question_3_student + "</td> <td id='answer_5_3'>" + answer_3_student_5 + "</td> <td>" + right_button_5_3 + " " + wrong_button_5_3 + "</td></tr>"
                    answer_4_display_5 = "<tr> <td> 4   </td><td>" + question_4_student + "</td> <td id='answer_5_4'>" + answer_4_student_5 + "</td> <td>" + right_button_5_4 + " " + wrong_button_5_4 + "</td></tr> "
                    answer_5_display_5 = "<tr><td>  5   </td><td>" + question_5_student + "</td> <td id='answer_5_5'>" + answer_5_student_5 + "</td> <td>" + right_button_5_5 + " " + wrong_button_5_5 + "</td></tr> "
                    answer_6_display_5 = "  <tr><td> 6   </td> <td>" + question_6_student + "</td> <td id='answer_5_6'>" + answer_6_student_5 + "</td><td>" + right_button_5_6 + " " + wrong_button_5_6 + "</td> </tr> "
                    answer_7_display_5 = " <tr> <td> 7   </td><td>" + question_7_student + "</td> <td id='answer_5_7'>" + answer_7_student_5 + "</td> <td>" + right_button_5_7 + " " + wrong_button_5_7 + "</td></tr> "
                    answer_8_display_5 = "  <tr> <td> 8   </td> <td>" + question_8_student + "</td> <td id='answer_5_8'>" + answer_8_student_5 + "</td><td>" + right_button_5_8 + " " + wrong_button_5_8 + "</td> </tr> "
                    answer_9_display_5 = "  <tr> <td> 9  </td> <td>" + question_9_student + "</td> <td id='answer_5_9'>" + answer_9_student_5 + "</td> <td>" + right_button_5_9 + " " + wrong_button_5_9 + "</td></tr> "
                    answer_10_display_5 = "  <tr><td> 10  </td><td>" + question_10_student + "</td> <td id='answer_5_10'>" + answer_10_student_5 + "</td><td>" + right_button_5_10 + " " + wrong_button_5_10 + "</td> </tr> </table>"
                    check_button_5 = "<button onclick='check_5()' class='btn btn'info'>Checked </button>"
                    document.getElementById("display_answer_5").innerHTML = answer_1_display_5 + answer_2_display_5 + answer_3_display_5 + answer_4_display_5 + answer_5_display_5 + answer_6_display_5 + answer_7_display_5 + answer_8_display_5 + answer_9_display_5 + answer_10_display_5 + check_button_5


                  }
                });
              });
              //geting answer 6
              document.getElementById("display_answer_6").style="block"
              firebase.database().ref("/" + student_6_name_fetch + teachername + name).on('value', function (snapshot) {
                document.getElementById("display_answer_6").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

                    getstudentAnswer_6 = childData

                    answer_1_student_6 = getstudentAnswer_6["answer_1"]
                    answer_2_student_6 = getstudentAnswer_6["answer_2"]
                    answer_3_student_6 = getstudentAnswer_6["answer_3"]
                    answer_4_student_6 = getstudentAnswer_6["answer_4"]
                    answer_5_student_6 = getstudentAnswer_6["answer_5"]
                    answer_6_student_6 = getstudentAnswer_6["answer_6"]
                    answer_7_student_6 = getstudentAnswer_6["answer_7"]
                    answer_8_student_6 = getstudentAnswer_6["answer_8"]
                    answer_9_student_6 = getstudentAnswer_6["answer_9"]
                    answer_10_student_6 = getstudentAnswer_6["answer_10"]

                    right_button_6_1 = "<button onclick='right_button_6_1_()' class='btn btn-success'> Right </button>"
                    wrong_button_6_1 = "<button onclick='wrong_button_6_1_()' class='btn btn-danger'> Wrong </button>"

                    right_button_6_2 = "<button onclick='right_button_6_2_()' class='btn btn-success'> Right </button>"
                    wrong_button_6_2 = "<button onclick='wrong_button_6_2_()' class='btn btn-danger'> Wrong </button>"

                    right_button_6_3 = "<button onclick='right_button_6_3_()' class='btn btn-success'> Right </button>"
                    wrong_button_6_3 = "<button onclick='wrong_button_6_3_()' class='btn btn-danger'> Wrong </button>"

                    right_button_6_4 = "<button onclick='right_button_6_4_()' class='btn btn-success'> Right </button>"
                    wrong_button_6_4 = "<button onclick='wrong_button_6_4_()' class='btn btn-danger'> Wrong </button>"

                    right_button_6_5 = "<button onclick='right_button_6_5_()' class='btn btn-success'> Right </button>"
                    wrong_button_6_5 = "<button onclick='wrong_button_6_5_()' class='btn btn-danger'> Wrong </button>"

                    right_button_6_6 = "<button onclick='right_button_6_6_()' class='btn btn-success'> Right </button>"
                    wrong_button_6_6 = "<button onclick='wrong_button_6_6_()' class='btn btn-danger'> Wrong </button>"

                    right_button_6_7 = "<button onclick='right_button_6_7_()' class='btn btn-success'> Right </button>"
                    wrong_button_6_7 = "<button onclick='wrong_button_6_7_()' class='btn btn-danger'> Wrong </button>"

                    right_button_6_8 = "<button onclick='right_button_6_8_()' class='btn btn-success'> Right </button>"
                    wrong_button_6_8 = "<button onclick='wrong_button_6_8_()' class='btn btn-danger'> Wrong </button>"

                    right_button_6_9 = "<button onclick='right_button_6_9_()' class='btn btn-success'> Right </button>"
                    wrong_button_6_9 = "<button onclick='wrong_button_6_9_()' class='btn btn-danger'> Wrong </button>"

                    right_button_6_10 = "<button onclick='right_button_6_10_()' class='btn btn-success'> Right </button>"
                    wrong_button_6_10 = "<button onclick='wrong_button_6_10_()' class='btn btn-danger'> Wrong </button>"

                    answer_1_display_6 = "<span>6 - </span> <b> Student Name :  </b><h4 id='c_name_6'>" + student_6_name_fetch + " </h4>  <h4> <b> Test Name :" + name + " </b> </h4><table> <tr> <th> S.No </th> <th> Questions</th> <th>   Answers</th> <th>Check </th> </tr> <tr> <td> 1  </td><td>" + question_1_student + "</td> <td id='answer_6_1'>" + answer_1_student_6 + "</td><td>" + right_button_6_1 + " " + wrong_button_6_1 + "</td> </tr> "
                    answer_2_display_6 = "<tr> <td> 2  </td> <td>" + question_2_student + "</td> <td id='answer_6_2'>" + answer_2_student_6 + "</td> <td>" + right_button_6_2 + " " + wrong_button_6_2 + "</td></tr>"
                    answer_3_display_6 = "<tr> <td> 3  </td> <td>" + question_3_student + "</td> <td id='answer_6_3'>" + answer_3_student_6 + "</td> <td>" + right_button_6_3 + " " + wrong_button_6_3 + "</td></tr>"
                    answer_4_display_6 = "<tr> <td> 4   </td><td>" + question_4_student + "</td> <td id='answer_6_4'>" + answer_4_student_6 + "</td> <td>" + right_button_6_4 + " " + wrong_button_6_4 + "</td></tr> "
                    answer_5_display_6 = "<tr><td>  5   </td><td>" + question_5_student + "</td> <td id='answer_6_5'>" + answer_5_student_6 + "</td> <td>" + right_button_6_5 + " " + wrong_button_6_5 + "</td></tr> "
                    answer_6_display_6 = "  <tr><td> 6   </td> <td>" + question_6_student + "</td> <td id='answer_6_6'>" + answer_6_student_6 + "</td><td>" + right_button_6_6 + " " + wrong_button_6_6 + "</td> </tr> "
                    answer_7_display_6 = " <tr> <td> 7   </td><td>" + question_7_student + "</td> <td id='answer_6_7'>" + answer_7_student_6 + "</td> <td>" + right_button_6_7 + " " + wrong_button_6_7 + "</td></tr> "
                    answer_8_display_6 = "  <tr> <td> 8   </td> <td>" + question_8_student + "</td> <td id='answer_6_8'>" + answer_8_student_6 + "</td><td>" + right_button_6_8 + " " + wrong_button_6_8 + "</td> </tr> "
                    answer_9_display_6 = "  <tr> <td> 9  </td> <td>" + question_9_student + "</td> <td id='answer_6_9'>" + answer_9_student_6 + "</td> <td>" + right_button_6_9 + " " + wrong_button_6_9 + "</td></tr> "
                    answer_10_display_6 = "  <tr><td> 10  </td><td>" + question_10_student + "</td> <td id='answer_6_10'>" + answer_10_student_6 + "</td><td>" + right_button_6_10 + " " + wrong_button_6_10 + "</td> </tr> </table>"
                    check_button_6 = "<button onclick='check_6()' class='btn btn'info'>Checked </button>"
                    document.getElementById("display_answer_6").innerHTML = answer_1_display_6 + answer_2_display_6 + answer_3_display_6 + answer_4_display_6 + answer_5_display_6 + answer_6_display_6 + answer_7_display_6 + answer_8_display_6 + answer_9_display_6 + answer_10_display_6 + check_button_6

                  }
                });
              });
              //geting answer 7
              document.getElementById("display_answer_7").style="block"
              firebase.database().ref("/" + student_7_name_fetch + teachername + name).on('value', function (snapshot) {
                document.getElementById("display_answer_7").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

                    getstudentAnswer_7 = childData

                    answer_1_student_7 = getstudentAnswer_7["answer_1"]
                    answer_2_student_7 = getstudentAnswer_7["answer_2"]
                    answer_3_student_7 = getstudentAnswer_7["answer_3"]
                    answer_4_student_7 = getstudentAnswer_7["answer_4"]
                    answer_5_student_7 = getstudentAnswer_7["answer_5"]
                    answer_6_student_7 = getstudentAnswer_7["answer_6"]
                    answer_7_student_7 = getstudentAnswer_7["answer_7"]
                    answer_8_student_7 = getstudentAnswer_7["answer_8"]
                    answer_9_student_7 = getstudentAnswer_7["answer_9"]
                    answer_10_student_7 = getstudentAnswer_7["answer_10"]

                    right_button_7_1 = "<button onclick='right_button_7_1_()' class='btn btn-success'> Right </button>"
                    wrong_button_7_1 = "<button onclick='wrong_button_7_1_()' class='btn btn-danger'> Wrong </button>"

                    right_button_7_2 = "<button onclick='right_button_7_2_()' class='btn btn-success'> Right </button>"
                    wrong_button_7_2 = "<button onclick='wrong_button_7_2_()' class='btn btn-danger'> Wrong </button>"

                    right_button_7_3 = "<button onclick='right_button_7_3_()' class='btn btn-success'> Right </button>"
                    wrong_button_7_3 = "<button onclick='wrong_button_7_3_()' class='btn btn-danger'> Wrong </button>"

                    right_button_7_4 = "<button onclick='right_button_7_4_()' class='btn btn-success'> Right </button>"
                    wrong_button_7_4 = "<button onclick='wrong_button_7_4_()' class='btn btn-danger'> Wrong </button>"

                    right_button_7_5 = "<button onclick='right_button_7_5_()' class='btn btn-success'> Right </button>"
                    wrong_button_7_5 = "<button onclick='wrong_button_7_5_()' class='btn btn-danger'> Wrong </button>"

                    right_button_7_6 = "<button onclick='right_button_7_6_()' class='btn btn-success'> Right </button>"
                    wrong_button_7_6 = "<button onclick='wrong_button_7_6_()' class='btn btn-danger'> Wrong </button>"

                    right_button_7_7 = "<button onclick='right_button_7_7_()' class='btn btn-success'> Right </button>"
                    wrong_button_7_7 = "<button onclick='wrong_button_7_7_()' class='btn btn-danger'> Wrong </button>"

                    right_button_7_8 = "<button onclick='right_button_7_8_()' class='btn btn-success'> Right </button>"
                    wrong_button_7_8 = "<button onclick='wrong_button_7_8_()' class='btn btn-danger'> Wrong </button>"

                    right_button_7_9 = "<button onclick='right_button_7_9_()' class='btn btn-success'> Right </button>"
                    wrong_button_7_9 = "<button onclick='wrong_button_7_9_()' class='btn btn-danger'> Wrong </button>"

                    right_button_7_10 = "<button onclick='right_button_7_10_()' class='btn btn-success'> Right </button>"
                    wrong_button_7_10 = "<button onclick='wrong_button_7_10_()' class='btn btn-danger'> Wrong </button>"

                    answer_1_display_7 = "<span>7 - </span> <b> Student Name :  </b><h4 id='c_name_7'>" + student_7_name_fetch + " </h4>  <h4> <b> Test Name :" + name + " </b> </h4><table> <tr> <th> S.No </th> <th> Questions</th> <th>   Answers</th> <th>Check </th> </tr> <tr> <td> 1  </td><td>" + question_1_student + "</td> <td id='answer_7_1'>" + answer_1_student_7 + "</td><td>" + right_button_7_1 + " " + wrong_button_7_1 + "</td> </tr> "
                    answer_2_display_7 = "<tr> <td> 2  </td> <td>" + question_2_student + "</td> <td id='answer_7_2'>" + answer_2_student_7 + "</td> <td>" + right_button_7_2 + " " + wrong_button_7_2 + "</td></tr>"
                    answer_3_display_7 = "<tr> <td> 3  </td> <td>" + question_3_student + "</td> <td id='answer_7_3'>" + answer_3_student_7 + "</td> <td>" + right_button_7_3 + " " + wrong_button_7_3 + "</td></tr>"
                    answer_4_display_7 = "<tr> <td> 4   </td><td>" + question_4_student + "</td> <td id='answer_7_4'>" + answer_4_student_7 + "</td> <td>" + right_button_7_4 + " " + wrong_button_7_4 + "</td></tr> "
                    answer_5_display_7 = "<tr><td>  5   </td><td>" + question_5_student + "</td> <td id='answer_7_5'>" + answer_5_student_7 + "</td> <td>" + right_button_7_5 + " " + wrong_button_7_5 + "</td></tr> "
                    answer_6_display_7 = "  <tr><td> 6   </td> <td>" + question_6_student + "</td> <td id='answer_7_6'>" + answer_6_student_7 + "</td><td>" + right_button_7_6 + " " + wrong_button_7_6 + "</td> </tr> "
                    answer_7_display_7 = " <tr> <td> 7   </td><td>" + question_7_student + "</td> <td id='answer_7_7'>" + answer_7_student_7 + "</td> <td>" + right_button_7_7 + " " + wrong_button_7_7 + "</td></tr> "
                    answer_8_display_7 = "  <tr> <td> 8   </td> <td>" + question_8_student + "</td> <td id='answer_7_8'>" + answer_8_student_7 + "</td><td>" + right_button_7_8 + " " + wrong_button_7_8 + "</td> </tr> "
                    answer_9_display_7 = "  <tr> <td> 9  </td> <td>" + question_9_student + "</td> <td id='answer_7_9'>" + answer_9_student_7 + "</td> <td>" + right_button_7_9 + " " + wrong_button_7_9 + "</td></tr> "
                    answer_10_display_7 = "  <tr><td> 10  </td><td>" + question_10_student + "</td> <td id='answer_7_10'>" + answer_10_student_7 + "</td><td>" + right_button_7_10 + " " + wrong_button_7_10 + "</td> </tr> </table>"
                    check_button_7 = "<button onclick='check_7()' class='btn btn'info'>Checked </button>"
                    document.getElementById("display_answer_7").innerHTML = answer_1_display_7 + answer_2_display_7 + answer_3_display_7 + answer_4_display_7 + answer_5_display_7 + answer_6_display_7 + answer_7_display_7 + answer_8_display_7 + answer_9_display_7 + answer_10_display_7 + check_button_7


                  }
                });
              });

              //geting answer 8
              document.getElementById("display_answer_8").style="block"
              firebase.database().ref("/" + student_8_name_fetch + teachername + name).on('value', function (snapshot) {
                document.getElementById("display_answer_8").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

                    getstudentAnswer_8 = childData

                    answer_1_student_8 = getstudentAnswer_8["answer_1"]
                    answer_2_student_8 = getstudentAnswer_8["answer_2"]
                    answer_3_student_8 = getstudentAnswer_8["answer_3"]
                    answer_4_student_8 = getstudentAnswer_8["answer_4"]
                    answer_5_student_8 = getstudentAnswer_8["answer_5"]
                    answer_6_student_8 = getstudentAnswer_8["answer_6"]
                    answer_7_student_8 = getstudentAnswer_8["answer_7"]
                    answer_8_student_8 = getstudentAnswer_8["answer_8"]
                    answer_9_student_8 = getstudentAnswer_8["answer_9"]
                    answer_10_student_8 = getstudentAnswer_8["answer_10"]

                    right_button_8_1 = "<button onclick='right_button_8_1_()' class='btn btn-success'> Right </button>"
                    wrong_button_8_1 = "<button onclick='wrong_button_8_1_()' class='btn btn-danger'> Wrong </button>"

                    right_button_8_2 = "<button onclick='right_button_8_2_()' class='btn btn-success'> Right </button>"
                    wrong_button_8_2 = "<button onclick='wrong_button_8_2_()' class='btn btn-danger'> Wrong </button>"

                    right_button_8_3 = "<button onclick='right_button_8_3_()' class='btn btn-success'> Right </button>"
                    wrong_button_8_3 = "<button onclick='wrong_button_8_3_()' class='btn btn-danger'> Wrong </button>"

                    right_button_8_4 = "<button onclick='right_button_8_4_()' class='btn btn-success'> Right </button>"
                    wrong_button_8_4 = "<button onclick='wrong_button_8_4_()' class='btn btn-danger'> Wrong </button>"

                    right_button_8_5 = "<button onclick='right_button_8_5_()' class='btn btn-success'> Right </button>"
                    wrong_button_8_5 = "<button onclick='wrong_button_8_5_()' class='btn btn-danger'> Wrong </button>"

                    right_button_8_6 = "<button onclick='right_button_8_6_()' class='btn btn-success'> Right </button>"
                    wrong_button_8_6 = "<button onclick='wrong_button_8_6_()' class='btn btn-danger'> Wrong </button>"

                    right_button_8_7 = "<button onclick='right_button_8_7_()' class='btn btn-success'> Right </button>"
                    wrong_button_8_7 = "<button onclick='wrong_button_8_7_()' class='btn btn-danger'> Wrong </button>"

                    right_button_8_8 = "<button onclick='right_button_8_8_()' class='btn btn-success'> Right </button>"
                    wrong_button_8_8 = "<button onclick='wrong_button_8_8_()' class='btn btn-danger'> Wrong </button>"

                    right_button_8_9 = "<button onclick='right_button_8_9_()' class='btn btn-success'> Right </button>"
                    wrong_button_8_9 = "<button onclick='wrong_button_8_9_()' class='btn btn-danger'> Wrong </button>"

                    right_button_8_10 = "<button onclick='right_button_8_10_()' class='btn btn-success'> Right </button>"
                    wrong_button_8_10 = "<button onclick='wrong_button_8_10_()' class='btn btn-danger'> Wrong </button>"

                    answer_1_display_8 = " <span>8 - </span><b> Student Name :  </b><h4 id='c_name_8'>" + student_8_name_fetch + " </h4>  <h4> <b> Test Name :" + name + " </b> </h4><table> <tr> <th> S.No </th> <th> Questions</th> <th>   Answers</th> <th>Check </th> </tr> <tr> <td> 1  </td><td>" + question_1_student + "</td> <td id='answer_8_1'>" + answer_1_student_8 + "</td><td>" + right_button_8_1 + " " + wrong_button_8_1 + "</td> </tr> "
                    answer_2_display_8 = "<tr> <td> 2  </td> <td>" + question_2_student + "</td> <td id='answer_8_2'>" + answer_2_student_8 + "</td> <td>" + right_button_8_2 + " " + wrong_button_8_2 + "</td></tr>"
                    answer_3_display_8 = "<tr> <td> 3  </td> <td>" + question_3_student + "</td> <td id='answer_8_3'>" + answer_3_student_8 + "</td> <td>" + right_button_8_3 + " " + wrong_button_8_3 + "</td></tr>"
                    answer_4_display_8 = "<tr> <td> 4   </td><td>" + question_4_student + "</td> <td id='answer_8_4'>" + answer_4_student_8 + "</td> <td>" + right_button_8_4 + " " + wrong_button_8_4 + "</td></tr> "
                    answer_5_display_8 = "<tr><td>  5   </td><td>" + question_5_student + "</td> <td id='answer_8_5'>" + answer_5_student_8 + "</td> <td>" + right_button_8_5 + " " + wrong_button_8_5 + "</td></tr> "
                    answer_6_display_8 = "  <tr><td> 6   </td> <td>" + question_6_student + "</td> <td id='answer_8_6'>" + answer_6_student_8 + "</td><td>" + right_button_8_6 + " " + wrong_button_8_6 + "</td> </tr> "
                    answer_7_display_8 = " <tr> <td> 7   </td><td>" + question_7_student + "</td> <td id='answer_8_7'>" + answer_7_student_8 + "</td> <td>" + right_button_8_7 + " " + wrong_button_8_7 + "</td></tr> "
                    answer_8_display_8 = "  <tr> <td> 8   </td> <td>" + question_8_student + "</td> <td id='answer_8_8'>" + answer_8_student_8 + "</td><td>" + right_button_8_8 + " " + wrong_button_8_8 + "</td> </tr> "
                    answer_9_display_8 = "  <tr> <td> 9  </td> <td>" + question_9_student + "</td> <td id='answer_8_9'>" + answer_9_student_8 + "</td> <td>" + right_button_8_9 + " " + wrong_button_8_9 + "</td></tr> "
                    answer_10_display_8 = "  <tr><td> 10  </td><td>" + question_10_student + "</td> <td id='answer_8_10'>" + answer_10_student_8 + "</td><td>" + right_button_8_10 + " " + wrong_button_8_10 + "</td> </tr> </table>"
                    check_button_8 = "<button onclick='check_8()' class='btn btn'info'>Checked </button>"
                    document.getElementById("display_answer_8").innerHTML = answer_1_display_8 + answer_2_display_8 + answer_3_display_8 + answer_4_display_8 + answer_5_display_8 + answer_6_display_8 + answer_7_display_8 + answer_8_display_8 + answer_9_display_8 + answer_10_display_8 + check_button_8



                  }
                });
              });

              //geting answer 9
              document.getElementById("display_answer_9").style="block"
              firebase.database().ref("/" + student_9_name_fetch + teachername + name).on('value', function (snapshot) {
                document.getElementById("display_answer_9").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

                    getstudentAnswer_9 = childData

                    answer_1_student_9 = getstudentAnswer_9["answer_1"]
                    answer_2_student_9 = getstudentAnswer_9["answer_2"]
                    answer_3_student_9 = getstudentAnswer_9["answer_3"]
                    answer_4_student_9 = getstudentAnswer_9["answer_4"]
                    answer_5_student_9 = getstudentAnswer_9["answer_5"]
                    answer_6_student_9 = getstudentAnswer_9["answer_6"]
                    answer_7_student_9 = getstudentAnswer_9["answer_7"]
                    answer_8_student_9 = getstudentAnswer_9["answer_8"]
                    answer_9_student_9 = getstudentAnswer_9["answer_9"]
                    answer_10_student_9 = getstudentAnswer_9["answer_10"]

                    right_button_9_1 = "<button onclick='right_button_9_1_()' class='btn btn-success'> Right </button>"
                    wrong_button_9_1 = "<button onclick='wrong_button_9_1_()' class='btn btn-danger'> Wrong </button>"

                    right_button_9_2 = "<button onclick='right_button_9_2_()' class='btn btn-success'> Right </button>"
                    wrong_button_9_2 = "<button onclick='wrong_button_9_2_()' class='btn btn-danger'> Wrong </button>"

                    right_button_9_3 = "<button onclick='right_button_9_3_()' class='btn btn-success'> Right </button>"
                    wrong_button_9_3 = "<button onclick='wrong_button_9_3_()' class='btn btn-danger'> Wrong </button>"

                    right_button_9_4 = "<button onclick='right_button_9_4_()' class='btn btn-success'> Right </button>"
                    wrong_button_9_4 = "<button onclick='wrong_button_9_4_()' class='btn btn-danger'> Wrong </button>"

                    right_button_9_5 = "<button onclick='right_button_9_5_()' class='btn btn-success'> Right </button>"
                    wrong_button_9_5 = "<button onclick='wrong_button_9_5_()' class='btn btn-danger'> Wrong </button>"

                    right_button_9_6 = "<button onclick='right_button_9_6_()' class='btn btn-success'> Right </button>"
                    wrong_button_9_6 = "<button onclick='wrong_button_9_6_()' class='btn btn-danger'> Wrong </button>"

                    right_button_9_7 = "<button onclick='right_button_9_7_()' class='btn btn-success'> Right </button>"
                    wrong_button_9_7 = "<button onclick='wrong_button_9_7_()' class='btn btn-danger'> Wrong </button>"

                    right_button_9_8 = "<button onclick='right_button_9_8_()' class='btn btn-success'> Right </button>"
                    wrong_button_9_8 = "<button onclick='wrong_button_9_8_()' class='btn btn-danger'> Wrong </button>"

                    right_button_9_9 = "<button onclick='right_button_9_9_()' class='btn btn-success'> Right </button>"
                    wrong_button_9_9 = "<button onclick='wrong_button_9_9_()' class='btn btn-danger'> Wrong </button>"

                    right_button_9_10 = "<button onclick='right_button_9_10_()' class='btn btn-success'> Right </button>"
                    wrong_button_9_10 = "<button onclick='wrong_button_9_10_()' class='btn btn-danger'> Wrong </button>"

                    answer_1_display_9 = "<span>9 - </span> <b> Student Name :  </b><h4 id='c_name_9'>" + student_9_name_fetch + " </h4>  <h4> <b> Test Name :" + name + " </b> </h4><table> <tr> <th> S.No </th> <th> Questions</th> <th>   Answers</th> <th>Check </th> </tr> <tr> <td> 1  </td><td>" + question_1_student + "</td> <td id='answer_9_1'>" + answer_1_student_9 + "</td><td>" + right_button_9_1 + " " + wrong_button_9_1 + "</td> </tr> "
                    answer_2_display_9 = "<tr> <td> 2  </td> <td>" + question_2_student + "</td> <td id='answer_9_2'>" + answer_2_student_9 + "</td> <td>" + right_button_9_2 + " " + wrong_button_9_2 + "</td></tr>"
                    answer_3_display_9 = "<tr> <td> 3  </td> <td>" + question_3_student + "</td> <td id='answer_9_3'>" + answer_3_student_9 + "</td> <td>" + right_button_9_3 + " " + wrong_button_9_3 + "</td></tr>"
                    answer_4_display_9 = "<tr> <td> 4   </td><td>" + question_4_student + "</td> <td id='answer_9_4'>" + answer_4_student_9 + "</td> <td>" + right_button_9_4 + " " + wrong_button_9_4 + "</td></tr> "
                    answer_5_display_9 = "<tr><td>  5   </td><td>" + question_5_student + "</td> <td id='answer_9_5'>" + answer_5_student_9 + "</td> <td>" + right_button_9_5 + " " + wrong_button_9_5 + "</td></tr> "
                    answer_6_display_9 = "  <tr><td> 6   </td> <td>" + question_6_student + "</td> <td id='answer_9_6'>" + answer_6_student_9 + "</td><td>" + right_button_9_6 + " " + wrong_button_9_6 + "</td> </tr> "
                    answer_7_display_9 = " <tr> <td> 7   </td><td>" + question_7_student + "</td> <td id='answer_9_7'>" + answer_7_student_9 + "</td> <td>" + right_button_9_7 + " " + wrong_button_9_7 + "</td></tr> "
                    answer_8_display_9 = "  <tr> <td> 8   </td> <td>" + question_8_student + "</td> <td id='answer_9_8'>" + answer_8_student_9 + "</td><td>" + right_button_9_8 + " " + wrong_button_9_8 + "</td> </tr> "
                    answer_9_display_9 = "  <tr> <td> 9  </td> <td>" + question_9_student + "</td> <td id='answer_9_9'>" + answer_9_student_9 + "</td> <td>" + right_button_9_9 + " " + wrong_button_9_9 + "</td></tr> "
                    answer_10_display_9 = "  <tr><td> 10  </td><td>" + question_10_student + "</td> <td id='answer_9_10'>" + answer_10_student_9 + "</td><td>" + right_button_9_10 + " " + wrong_button_9_10 + "</td> </tr> </table>"
                    check_button_9 = "<button onclick='check_9()' class='btn btn'info'>Checked </button>"
                    document.getElementById("display_answer_9").innerHTML = answer_1_display_9 + answer_2_display_9 + answer_3_display_9 + answer_4_display_9 + answer_5_display_9 + answer_6_display_9 + answer_7_display_9 + answer_8_display_9 + answer_9_display_9 + answer_10_display_9 + check_button_9


                  }
                });
              });

              //getting answer 10
              document.getElementById("display_answer_10").style="block"
              firebase.database().ref("/" + student_10_name_fetch + teachername + name).on('value', function (snapshot) {
                document.getElementById("display_answer_10").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {

                    getstudentAnswer_10 = childData

                    answer_1_student_10 = getstudentAnswer_10["answer_1"]
                    answer_2_student_10 = getstudentAnswer_10["answer_2"]
                    answer_3_student_10 = getstudentAnswer_10["answer_3"]
                    answer_4_student_10 = getstudentAnswer_10["answer_4"]
                    answer_5_student_10 = getstudentAnswer_10["answer_5"]
                    answer_6_student_10 = getstudentAnswer_10["answer_6"]
                    answer_7_student_10 = getstudentAnswer_10["answer_7"]
                    answer_8_student_10 = getstudentAnswer_10["answer_8"]
                    answer_9_student_10 = getstudentAnswer_10["answer_9"]
                    answer_10_student_10 = getstudentAnswer_10["answer_10"]

                    right_button_10_1 = "<button onclick='right_button_10_1_()' class='btn btn-success'> Right </button>"
                    wrong_button_10_1 = "<button onclick='wrong_button_10_1_()' class='btn btn-danger'> Wrong </button>"

                    right_button_10_2 = "<button onclick='right_button_10_2_()' class='btn btn-success'> Right </button>"
                    wrong_button_10_2 = "<button onclick='wrong_button_10_2_()' class='btn btn-danger'> Wrong </button>"

                    right_button_10_3 = "<button onclick='right_button_10_3_()' class='btn btn-success'> Right </button>"
                    wrong_button_10_3 = "<button onclick='wrong_button_10_3_()' class='btn btn-danger'> Wrong </button>"

                    right_button_10_4 = "<button onclick='right_button_10_4_()' class='btn btn-success'> Right </button>"
                    wrong_button_10_4 = "<button onclick='wrong_button_10_4_()' class='btn btn-danger'> Wrong </button>"

                    right_button_10_5 = "<button onclick='right_button_10_5_()' class='btn btn-success'> Right </button>"
                    wrong_button_10_5 = "<button onclick='wrong_button_10_5_()' class='btn btn-danger'> Wrong </button>"

                    right_button_10_6 = "<button onclick='right_button_10_6_()' class='btn btn-success'> Right </button>"
                    wrong_button_10_6 = "<button onclick='wrong_button_10_6_()' class='btn btn-danger'> Wrong </button>"

                    right_button_10_7 = "<button onclick='right_button_10_7_()' class='btn btn-success'> Right </button>"
                    wrong_button_10_7 = "<button onclick='wrong_button_10_7_()' class='btn btn-danger'> Wrong </button>"

                    right_button_10_8 = "<button onclick='right_button_10_8_()' class='btn btn-success'> Right </button>"
                    wrong_button_10_8 = "<button onclick='wrong_button_10_8_()' class='btn btn-danger'> Wrong </button>"

                    right_button_10_9 = "<button onclick='right_button_10_9_()' class='btn btn-success'> Right </button>"
                    wrong_button_10_9 = "<button onclick='wrong_button_10_9_()' class='btn btn-danger'> Wrong </button>"

                    right_button_10_10 = "<button onclick='right_button_10_10_()' class='btn btn-success'> Right </button>"
                    wrong_button_10_10 = "<button onclick='wrong_button_10_10_()' class='btn btn-danger'> Wrong </button>"

                    answer_1_display_10 = "<span>10 - </span> <b> Student Name :  </b><h4 id='c_name_10'>" + student_10_name_fetch + " </h4>  <h4> <b> Test Name :" + name + " </b> </h4><table> <tr> <th> S.No </th> <th> Questions</th> <th>   Answers</th> <th>Check </th> </tr> <tr> <td> 1  </td><td>" + question_1_student + "</td> <td id='answer_10_1'>" + answer_1_student_10 + "</td><td>" + right_button_10_1 + " " + wrong_button_10_1 + "</td> </tr> "
                    answer_2_display_10 = "<tr> <td> 2  </td> <td>" + question_2_student + "</td> <td id='answer_10_2'>" + answer_2_student_10 + "</td> <td>" + right_button_10_2 + " " + wrong_button_10_2 + "</td></tr>"
                    answer_3_display_10 = "<tr> <td> 3  </td> <td>" + question_3_student + "</td> <td id='answer_10_3'>" + answer_3_student_10 + "</td> <td>" + right_button_10_3 + " " + wrong_button_10_3 + "</td></tr>"
                    answer_4_display_10 = "<tr> <td> 4   </td><td>" + question_4_student + "</td> <td id='answer_10_4'>" + answer_4_student_10 + "</td> <td>" + right_button_10_4 + " " + wrong_button_10_4 + "</td></tr> "
                    answer_5_display_10 = "<tr><td>  5   </td><td>" + question_5_student + "</td> <td id='answer_10_5'>" + answer_5_student_10 + "</td> <td>" + right_button_10_5 + " " + wrong_button_10_5 + "</td></tr> "
                    answer_6_display_10 = "  <tr><td> 6   </td> <td>" + question_6_student + "</td> <td id='answer_10_6'>" + answer_6_student_10 + "</td><td>" + right_button_10_6 + " " + wrong_button_10_6 + "</td> </tr> "
                    answer_7_display_10 = " <tr> <td> 7   </td><td>" + question_7_student + "</td> <td id='answer_10_7'>" + answer_7_student_10 + "</td> <td>" + right_button_10_7 + " " + wrong_button_10_7 + "</td></tr> "
                    answer_8_display_10 = "  <tr> <td> 8   </td> <td>" + question_8_student + "</td> <td id='answer_10_8'>" + answer_8_student_10 + "</td><td>" + right_button_10_8 + " " + wrong_button_10_8 + "</td> </tr> "
                    answer_9_display_10 = "  <tr> <td> 9  </td> <td>" + question_9_student + "</td> <td id='answer_10_9'>" + answer_9_student_10 + "</td> <td>" + right_button_10_9 + " " + wrong_button_10_9 + "</td></tr> "
                    answer_10_display_10 = "  <tr><td> 10  </td><td>" + question_10_student + "</td> <td id='answer_10_10'>" + answer_10_student_10 + "</td><td>" + right_button_10_10 + " " + wrong_button_10_10 + "</td> </tr> </table>"
                    check_button_10 = "<button onclick='check_10()' class='btn btn'info'>Checked </button>"
                    document.getElementById("display_answer_10").innerHTML = answer_1_display_10 + answer_2_display_10 + answer_3_display_10 + answer_4_display_10 + answer_5_display_10 + answer_6_display_10 + answer_7_display_10 + answer_8_display_10 + answer_9_display_10 + answer_10_display_10 + check_button_10



                  }
                });
              });
            }
          });
        });
      }
    });
  });
}

var marks = 0

function right_button_1_1_() {
  document.getElementById("answer_1_1").style.color = "green"
}
function wrong_button_1_1_() {
  document.getElementById("answer_1_1").style.color = "red"
}

function right_button_1_2_() {
  document.getElementById("answer_1_2").style.color = "green"
}
function wrong_button_1_2_() {
  document.getElementById("answer_1_2").style.color = "red"
}
function right_button_1_3_() {
  document.getElementById("answer_1_3").style.color = "green"
}
function wrong_button_1_3_() {
  document.getElementById("answer_1_3").style.color = "red"
}
function right_button_1_4_() {
  document.getElementById("answer_1_4").style.color = "green"
}
function wrong_button_1_4_() {
  document.getElementById("answer_1_4").style.color = "red"
}
function right_button_1_5_() {
  document.getElementById("answer_1_5").style.color = "green"
}
function wrong_button_1_5_() {
  document.getElementById("answer_1_5").style.color = "red"
}
function right_button_1_6_() {
  document.getElementById("answer_1_6").style.color = "green"
}
function wrong_button_1_6_() {
  document.getElementById("answer_1_6").style.color = "red"
}
function right_button_1_7_() {
  document.getElementById("answer_1_7").style.color = "green"
}
function wrong_button_1_7_() {
  document.getElementById("answer_1_7").style.color = "red"
}
function right_button_1_8_() {
  document.getElementById("answer_1_8").style.color = "green"
}
function wrong_button_1_8_() {
  document.getElementById("answer_1_8").style.color = "red"
}
function right_button_1_9_() {
  document.getElementById("answer_1_9").style.color = "green"
}
function wrong_button_1_9_() {
  document.getElementById("answer_1_9").style.color = "red"
}
function right_button_1_10_() {
  document.getElementById("answer_1_10").style.color = "green"
}
function wrong_button_1_10_() {
  document.getElementById("answer_1_10").style.color = "red"

}





function check_1() {

  if (document.getElementById("answer_1_1").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_1_status = "Wrong"
    } else {
      marks = marks
      question_1_status = "Wrong"
    }
  } else if (document.getElementById("answer_1_1").style.color == "green") {
    marks = marks + 1
    question_1_status = "Right"
  }

  if (document.getElementById("answer_1_2").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_2_status = "Wrong"
    } else {
      marks = marks
      question_2_status = "Wrong"
    }
  } else if (document.getElementById("answer_1_2").style.color == "green") {
    marks = marks + 1
    question_2_status = "Right"
  }

  if (document.getElementById("answer_1_3").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_3_status = "Wrong"
    } else {
      marks = marks
      question_3_status = "Wrong"
    }
  } else if (document.getElementById("answer_1_3").style.color == "green") {
    marks = marks + 1
    question_3_status = "Right"
  }

  if (document.getElementById("answer_1_4").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_4_status = "Wrong"
    } else {
      marks = marks
      question_4_status = "Wrong"
    }
  } else if (document.getElementById("answer_1_4").style.color == "green") {
    marks = marks + 1
    question_4_status = "Right"
  }

  if (document.getElementById("answer_1_5").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_5_status = "Wrong"
    } else {
      marks = marks
      question_5_status = "Wrong"
    }
  } else if (document.getElementById("answer_1_5").style.color == "green") {
    marks = marks + 1
    question_5_status = "Right"
  }

  if (document.getElementById("answer_1_6").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_6_status = "Wrong"
    } else {
      marks = marks
      question_6_status = "Wrong"
    }
  } else if (document.getElementById("answer_1_6").style.color == "green") {
    marks = marks + 1
    question_6_status = "Right"
  }

  if (document.getElementById("answer_1_7").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_7_status = "Wrong"
    } else {
      marks = marks
      question_7_status = "Wrong"
    }
  } else if (document.getElementById("answer_1_7").style.color == "green") {
    marks = marks + 1
    question_7_status = "Right"
  }

  if (document.getElementById("answer_1_8").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_8_status = "Wrong"
    } else {
      marks = marks
      question_8_status = "Wrong"
    }
  } else if (document.getElementById("answer_1_8").style.color == "green") {
    marks = marks + 1
    question_8_status = "Right"
  }

  if (document.getElementById("answer_1_9").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_9_status = "Wrong"
    } else {
      marks = marks
      question_9_status = "Wrong"
    }
  } else if (document.getElementById("answer_1_9").style.color == "green") {
    marks = marks + 1
    question_9_status = "Right"
  }

  if (document.getElementById("answer_1_10").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_10_status = "Wrong"
    } else {
      marks = marks
      question_10_status = "Wrong"
    }
  } else if (document.getElementById("answer_1_10").style.color == "green") {
    marks = marks + 1
    question_10_status = "Right"
  }



  Test_name = localStorage.getItem("Test_name")
  firebase.database().ref(document.getElementById("c_name").innerHTML + Test_name + "Result").push({
    question_1_status: question_1_status,
    question_2_status: question_2_status,
    question_3_status: question_3_status,
    question_4_status: question_4_status,
    question_5_status: question_5_status,
    question_6_status: question_6_status,
    question_7_status: question_7_status,
    question_8_status: question_8_status,
    question_9_status: question_9_status,
    question_10_status: question_10_status,
    marks: marks
  })
  marks = 0
  document.getElementById("display_answer_1").style.display="none"
  document.getElementById("display_answer_1_status").style.display="none"
}

function right_button_2_1_() {
  document.getElementById("answer_2_1").style.color = "green"
}
function wrong_button_2_1_() {
  document.getElementById("answer_2_1").style.color = "red"
}

function right_button_2_2_() {
  document.getElementById("answer_2_2").style.color = "green"
}
function wrong_button_2_2_() {
  document.getElementById("answer_2_2").style.color = "red"
}
function right_button_2_3_() {
  document.getElementById("answer_2_3").style.color = "green"
}
function wrong_button_2_3_() {
  document.getElementById("answer_2_3").style.color = "red"
}
function right_button_2_4_() {
  document.getElementById("answer_2_4").style.color = "green"
}
function wrong_button_2_4_() {
  document.getElementById("answer_2_4").style.color = "red"
}
function right_button_2_5_() {
  document.getElementById("answer_2_5").style.color = "green"
}
function wrong_button_2_5_() {
  document.getElementById("answer_2_5").style.color = "red"
}
function right_button_2_6_() {
  document.getElementById("answer_2_6").style.color = "green"
}
function wrong_button_2_6_() {
  document.getElementById("answer_3_6").style.color = "red"
}
function right_button_2_7_() {
  document.getElementById("answer_2_7").style.color = "green"
}
function wrong_button_2_7_() {
  document.getElementById("answer_2_7").style.color = "red"
}
function right_button_2_8_() {
  document.getElementById("answer_2_8").style.color = "green"
}
function wrong_button_2_8_() {
  document.getElementById("answer_2_8").style.color = "red"
}
function right_button_2_9_() {
  document.getElementById("answer_2_9").style.color = "green"
}
function wrong_button_2_9_() {
  document.getElementById("answer_2_9").style.color = "red"
}
function right_button_2_10_() {
  document.getElementById("answer_2_10").style.color = "green"
}
function wrong_button_2_10_() {
  document.getElementById("answer_2_10").style.color = "red"

}





function check_2() {

  if (document.getElementById("answer_2_1").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_1_status = "Wrong"
    } else {
      marks = marks
      question_1_status = "Wrong"
    }
  } else if (document.getElementById("answer_2_1").style.color == "green") {
    marks = marks + 1
    question_1_status = "Right"
  }

  if (document.getElementById("answer_2_2").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_2_status = "Wrong"
    } else {
      marks = marks
      question_2_status = "Wrong"
    }
  } else if (document.getElementById("answer_2_2").style.color == "green") {
    marks = marks + 1
    question_2_status = "Right"
  }

  if (document.getElementById("answer_2_3").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_3_status = "Wrong"
    } else {
      marks = marks
      question_3_status = "Wrong"
    }
  } else if (document.getElementById("answer_2_3").style.color == "green") {
    marks = marks + 1
    question_3_status = "Right"
  }

  if (document.getElementById("answer_2_4").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_4_status = "Wrong"
    } else {
      marks = marks
      question_4_status = "Wrong"
    }
  } else if (document.getElementById("answer_2_4").style.color == "green") {
    marks = marks + 1
    question_4_status = "Right"
  }

  if (document.getElementById("answer_2_5").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_5_status = "Wrong"
    } else {
      marks = marks
      question_5_status = "Wrong"
    }
  } else if (document.getElementById("answer_2_5").style.color == "green") {
    marks = marks + 1
    question_5_status = "Right"
  }

  if (document.getElementById("answer_2_6").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_6_status = "Wrong"
    } else {
      marks = marks
      question_6_status = "Wrong"
    }
  } else if (document.getElementById("answer_2_6").style.color == "green") {
    marks = marks + 1
    question_6_status = "Right"
  }

  if (document.getElementById("answer_2_7").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_7_status = "Wrong"
    } else {
      marks = marks
      question_7_status = "Wrong"
    }
  } else if (document.getElementById("answer_2_7").style.color == "green") {
    marks = marks + 1
    question_7_status = "Right"
  }

  if (document.getElementById("answer_2_8").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_8_status = "Wrong"
    } else {
      marks = marks
      question_8_status = "Wrong"
    }
  } else if (document.getElementById("answer_2_8").style.color == "green") {
    marks = marks + 1
    question_8_status = "Right"
  }

  if (document.getElementById("answer_2_9").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_9_status = "Wrong"
    } else {
      marks = marks
      question_9_status = "Wrong"
    }
  } else if (document.getElementById("answer_2_9").style.color == "green") {
    marks = marks + 1
    question_9_status = "Right"
  }

  if (document.getElementById("answer_2_10").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_10_status = "Wrong"
    } else {
      marks = marks
      question_10_status = "Wrong"
    }
  } else if (document.getElementById("answer_2_10").style.color == "green") {
    marks = marks + 1
    question_10_status = "Right"
  }



  Test_name = localStorage.getItem("Test_name")
  firebase.database().ref(document.getElementById("c_name_2").innerHTML + Test_name + "Result").push({
    question_1_status: question_1_status,
    question_2_status: question_2_status,
    question_3_status: question_3_status,
    question_4_status: question_4_status,
    question_5_status: question_5_status,
    question_6_status: question_6_status,
    question_7_status: question_7_status,
    question_8_status: question_8_status,
    question_9_status: question_9_status,
    question_10_status: question_10_status,
    marks: marks
  })
  marks = 0
  document.getElementById("display_answer_2").style.display="none"
  document.getElementById("display_answer_2_status").style.display="none"
}
function right_button_3_1_() {
  document.getElementById("answer_3_1").style.color = "green"
}
function wrong_button_3_1_() {
  document.getElementById("answer_3_1").style.color = "red"
}

function right_button_3_2_() {
  document.getElementById("answer_3_2").style.color = "green"
}
function wrong_button_3_2_() {
  document.getElementById("answer_3_2").style.color = "red"
}
function right_button_3_3_() {
  document.getElementById("answer_3_3").style.color = "green"
}
function wrong_button_3_3_() {
  document.getElementById("answer_3_3").style.color = "red"
}
function right_button_3_4_() {
  document.getElementById("answer_3_4").style.color = "green"
}
function wrong_button_3_4_() {
  document.getElementById("answer_3_4").style.color = "red"
}
function right_button_3_5_() {
  document.getElementById("answer_3_5").style.color = "green"
}
function wrong_button_3_5_() {
  document.getElementById("answer_3_5").style.color = "red"
}
function right_button_3_6_() {
  document.getElementById("answer_3_6").style.color = "green"
}
function wrong_button_3_6_() {
  document.getElementById("answer_3_6").style.color = "red"
}
function right_button_3_7_() {
  document.getElementById("answer_3_7").style.color = "green"
}
function wrong_button_3_7_() {
  document.getElementById("answer_3_7").style.color = "red"
}
function right_button_3_8_() {
  document.getElementById("answer_3_8").style.color = "green"
}
function wrong_button_3_8_() {
  document.getElementById("answer_3_8").style.color = "red"
}
function right_button_3_9_() {
  document.getElementById("answer_3_9").style.color = "green"
}
function wrong_button_3_9_() {
  document.getElementById("answer_3_9").style.color = "red"
}
function right_button_3_10_() {
  document.getElementById("answer_3_10").style.color = "green"
}
function wrong_button_3_10_() {
  document.getElementById("answer_3_10").style.color = "red"

}





function check_3() {

  if (document.getElementById("answer_3_1").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_1_status = "Wrong"
    } else {
      marks = marks
      question_1_status = "Wrong"
    }
  } else if (document.getElementById("answer_3_1").style.color == "green") {
    marks = marks + 1
    question_1_status = "Right"
  }

  if (document.getElementById("answer_3_2").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_2_status = "Wrong"
    } else {
      marks = marks
      question_2_status = "Wrong"
    }
  } else if (document.getElementById("answer_3_2").style.color == "green") {
    marks = marks + 1
    question_2_status = "Right"
  }

  if (document.getElementById("answer_3_3").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_3_status = "Wrong"
    } else {
      marks = marks
      question_3_status = "Wrong"
    }
  } else if (document.getElementById("answer_3_3").style.color == "green") {
    marks = marks + 1
    question_3_status = "Right"
  }

  if (document.getElementById("answer_3_4").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_4_status = "Wrong"
    } else {
      marks = marks
      question_4_status = "Wrong"
    }
  } else if (document.getElementById("answer_3_4").style.color == "green") {
    marks = marks + 1
    question_4_status = "Right"
  }

  if (document.getElementById("answer_3_5").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_5_status = "Wrong"
    } else {
      marks = marks
      question_5_status = "Wrong"
    }
  } else if (document.getElementById("answer_3_5").style.color == "green") {
    marks = marks + 1
    question_5_status = "Right"
  }

  if (document.getElementById("answer_3_6").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_6_status = "Wrong"
    } else {
      marks = marks
      question_6_status = "Wrong"
    }
  } else if (document.getElementById("answer_3_6").style.color == "green") {
    marks = marks + 1
    question_6_status = "Right"
  }

  if (document.getElementById("answer_3_7").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_7_status = "Wrong"
    } else {
      marks = marks
      question_7_status = "Wrong"
    }
  } else if (document.getElementById("answer_3_7").style.color == "green") {
    marks = marks + 1
    question_7_status = "Right"
  }

  if (document.getElementById("answer_3_8").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_8_status = "Wrong"
    } else {
      marks = marks
      question_8_status = "Wrong"
    }
  } else if (document.getElementById("answer_3_8").style.color == "green") {
    marks = marks + 1
    question_8_status = "Right"
  }

  if (document.getElementById("answer_3_9").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_9_status = "Wrong"
    } else {
      marks = marks
      question_9_status = "Wrong"
    }
  } else if (document.getElementById("answer_3_9").style.color == "green") {
    marks = marks + 1
    question_9_status = "Right"
  }

  if (document.getElementById("answer_3_10").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_10_status = "Wrong"
    } else {
      marks = marks
      question_10_status = "Wrong"
    }
  } else if (document.getElementById("answer_3_10").style.color == "green") {
    marks = marks + 1
    question_10_status = "Right"
  }



  Test_name = localStorage.getItem("Test_name")
  firebase.database().ref(document.getElementById("c_name_3").innerHTML + Test_name + "Result").push({
    question_1_status: question_1_status,
    question_2_status: question_2_status,
    question_3_status: question_3_status,
    question_4_status: question_4_status,
    question_5_status: question_5_status,
    question_6_status: question_6_status,
    question_7_status: question_7_status,
    question_8_status: question_8_status,
    question_9_status: question_9_status,
    question_10_status: question_10_status,
    marks: marks
  })
  marks = 0
  document.getElementById("display_answer_3").style.display="none"
  document.getElementById("display_answer_3_status").style.display="none"
}


function right_button_4_1_() {
  document.getElementById("answer_4_1").style.color = "green"
}
function wrong_button_4_1_() {
  document.getElementById("answer_4_1").style.color = "red"
}

function right_button_4_2_() {
  document.getElementById("answer_4_2").style.color = "green"
}
function wrong_button_4_2_() {
  document.getElementById("answer_4_2").style.color = "red"
}
function right_button_4_3_() {
  document.getElementById("answer_4_3").style.color = "green"
}
function wrong_button_4_3_() {
  document.getElementById("answer_4_3").style.color = "red"
}
function right_button_4_4_() {
  document.getElementById("answer_4_4").style.color = "green"
}
function wrong_button_4_4_() {
  document.getElementById("answer_4_4").style.color = "red"
}
function right_button_4_5_() {
  document.getElementById("answer_4_5").style.color = "green"
}
function wrong_button_4_5_() {
  document.getElementById("answer_4_5").style.color = "red"
}
function right_button_4_6_() {
  document.getElementById("answer_4_6").style.color = "green"
}
function wrong_button_4_6_() {
  document.getElementById("answer_4_6").style.color = "red"
}
function right_button_4_7_() {
  document.getElementById("answer_4_7").style.color = "green"
}
function wrong_button_4_7_() {
  document.getElementById("answer_4_7").style.color = "red"
}
function right_button_4_8_() {
  document.getElementById("answer_4_8").style.color = "green"
}
function wrong_button_4_8_() {
  document.getElementById("answer_4_8").style.color = "red"
}
function right_button_4_9_() {
  document.getElementById("answer_4_9").style.color = "green"
}
function wrong_button_4_9_() {
  document.getElementById("answer_4_9").style.color = "red"
}
function right_button_4_10_() {
  document.getElementById("answer_4_10").style.color = "green"
}
function wrong_button_4_10_() {
  document.getElementById("answer_4_10").style.color = "red"

}





function check_4() {

  if (document.getElementById("answer_4_1").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_1_status = "Wrong"
    } else {
      marks = marks
      question_1_status = "Wrong"
    }
  } else if (document.getElementById("answer_4_1").style.color == "green") {
    marks = marks + 1
    question_1_status = "Right"
  }

  if (document.getElementById("answer_4_2").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_2_status = "Wrong"
    } else {
      marks = marks
      question_2_status = "Wrong"
    }
  } else if (document.getElementById("answer_4_2").style.color == "green") {
    marks = marks + 1
    question_2_status = "Right"
  }

  if (document.getElementById("answer_4_3").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_3_status = "Wrong"
    } else {
      marks = marks
      question_3_status = "Wrong"
    }
  } else if (document.getElementById("answer_4_3").style.color == "green") {
    marks = marks + 1
    question_3_status = "Right"
  }

  if (document.getElementById("answer_4_4").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_4_status = "Wrong"
    } else {
      marks = marks
      question_4_status = "Wrong"
    }
  } else if (document.getElementById("answer_4_4").style.color == "green") {
    marks = marks + 1
    question_4_status = "Right"
  }

  if (document.getElementById("answer_4_5").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_5_status = "Wrong"
    } else {
      marks = marks
      question_5_status = "Wrong"
    }
  } else if (document.getElementById("answer_4_5").style.color == "green") {
    marks = marks + 1
    question_5_status = "Right"
  }

  if (document.getElementById("answer_4_6").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_6_status = "Wrong"
    } else {
      marks = marks
      question_6_status = "Wrong"
    }
  } else if (document.getElementById("answer_4_6").style.color == "green") {
    marks = marks + 1
    question_6_status = "Right"
  }

  if (document.getElementById("answer_4_7").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_7_status = "Wrong"
    } else {
      marks = marks
      question_7_status = "Wrong"
    }
  } else if (document.getElementById("answer_4_7").style.color == "green") {
    marks = marks + 1
    question_7_status = "Right"
  }

  if (document.getElementById("answer_4_8").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_8_status = "Wrong"
    } else {
      marks = marks
      question_8_status = "Wrong"
    }
  } else if (document.getElementById("answer_4_8").style.color == "green") {
    marks = marks + 1
    question_8_status = "Right"
  }

  if (document.getElementById("answer_4_9").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_9_status = "Wrong"
    } else {
      marks = marks
      question_9_status = "Wrong"
    }
  } else if (document.getElementById("answer_4_9").style.color == "green") {
    marks = marks + 1
    question_9_status = "Right"
  }

  if (document.getElementById("answer_4_10").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_10_status = "Wrong"
    } else {
      marks = marks
      question_10_status = "Wrong"
    }
  } else if (document.getElementById("answer_4_10").style.color == "green") {
    marks = marks + 1
    question_10_status = "Right"
  }



  Test_name = localStorage.getItem("Test_name")
  firebase.database().ref(document.getElementById("c_name_4").innerHTML + Test_name + "Result").push({
    question_1_status: question_1_status,
    question_2_status: question_2_status,
    question_3_status: question_3_status,
    question_4_status: question_4_status,
    question_5_status: question_5_status,
    question_6_status: question_6_status,
    question_7_status: question_7_status,
    question_8_status: question_8_status,
    question_9_status: question_9_status,
    question_10_status: question_10_status,
    marks: marks
  })
  marks = 0
  document.getElementById("display_answer_4").style.display="none"
  document.getElementById("display_answer_4_status").style.display="none"
}


function right_button_5_1_() {
  document.getElementById("answer_5_1").style.color = "green"
}
function wrong_button_5_1_() {
  document.getElementById("answer_5_1").style.color = "red"
}

function right_button_5_2_() {
  document.getElementById("answer_5_2").style.color = "green"
}
function wrong_button_5_2_() {
  document.getElementById("answer_5_2").style.color = "red"
}
function right_button_5_3_() {
  document.getElementById("answer_5_3").style.color = "green"
}
function wrong_button_5_3_() {
  document.getElementById("answer_5_3").style.color = "red"
}
function right_button_5_4_() {
  document.getElementById("answer_5_4").style.color = "green"
}
function wrong_button_5_4_() {
  document.getElementById("answer_5_4").style.color = "red"
}
function right_button_5_5_() {
  document.getElementById("answer_5_5").style.color = "green"
}
function wrong_button_5_5_() {
  document.getElementById("answer_5_5").style.color = "red"
}
function right_button_5_6_() {
  document.getElementById("answer_5_6").style.color = "green"
}
function wrong_button_5_6_() {
  document.getElementById("answer_5_6").style.color = "red"
}
function right_button_5_7_() {
  document.getElementById("answer_5_7").style.color = "green"
}
function wrong_button_5_7_() {
  document.getElementById("answer_5_7").style.color = "red"
}
function right_button_5_8_() {
  document.getElementById("answer_5_8").style.color = "green"
}
function wrong_button_5_8_() {
  document.getElementById("answer_5_8").style.color = "red"
}
function right_button_5_9_() {
  document.getElementById("answer_5_9").style.color = "green"
}
function wrong_button_5_9_() {
  document.getElementById("answer_5_9").style.color = "red"
}
function right_button_5_10_() {
  document.getElementById("answer_5_10").style.color = "green"
}
function wrong_button_5_10_() {
  document.getElementById("answer_5_10").style.color = "red"

}





function check_5() {

  if (document.getElementById("answer_5_1").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_1_status = "Wrong"
    } else {
      marks = marks
      question_1_status = "Wrong"
    }
  } else if (document.getElementById("answer_5_1").style.color == "green") {
    marks = marks + 1
    question_1_status = "Right"
  }

  if (document.getElementById("answer_5_2").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_2_status = "Wrong"
    } else {
      marks = marks
      question_2_status = "Wrong"
    }
  } else if (document.getElementById("answer_5_2").style.color == "green") {
    marks = marks + 1
    question_2_status = "Right"
  }

  if (document.getElementById("answer_5_3").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_3_status = "Wrong"
    } else {
      marks = marks
      question_3_status = "Wrong"
    }
  } else if (document.getElementById("answer_5_3").style.color == "green") {
    marks = marks + 1
    question_3_status = "Right"
  }

  if (document.getElementById("answer_5_4").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_4_status = "Wrong"
    } else {
      marks = marks
      question_4_status = "Wrong"
    }
  } else if (document.getElementById("answer_5_4").style.color == "green") {
    marks = marks + 1
    question_4_status = "Right"
  }

  if (document.getElementById("answer_5_5").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_5_status = "Wrong"
    } else {
      marks = marks
      question_5_status = "Wrong"
    }
  } else if (document.getElementById("answer_5_5").style.color == "green") {
    marks = marks + 1
    question_5_status = "Right"
  }

  if (document.getElementById("answer_5_6").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_6_status = "Wrong"
    } else {
      marks = marks
      question_6_status = "Wrong"
    }
  } else if (document.getElementById("answer_5_6").style.color == "green") {
    marks = marks + 1
    question_6_status = "Right"
  }

  if (document.getElementById("answer_5_7").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_7_status = "Wrong"
    } else {
      marks = marks
      question_7_status = "Wrong"
    }
  } else if (document.getElementById("answer_5_7").style.color == "green") {
    marks = marks + 1
    question_7_status = "Right"
  }

  if (document.getElementById("answer_5_8").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_8_status = "Wrong"
    } else {
      marks = marks
      question_8_status = "Wrong"
    }
  } else if (document.getElementById("answer_5_8").style.color == "green") {
    marks = marks + 1
    question_8_status = "Right"
  }

  if (document.getElementById("answer_5_9").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_9_status = "Wrong"
    } else {
      marks = marks
      question_9_status = "Wrong"
    }
  } else if (document.getElementById("answer_5_9").style.color == "green") {
    marks = marks + 1
    question_9_status = "Right"
  }

  if (document.getElementById("answer_5_10").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_10_status = "Wrong"
    } else {
      marks = marks
      question_10_status = "Wrong"
    }
  } else if (document.getElementById("answer_5_10").style.color == "green") {
    marks = marks + 1
    question_10_status = "Right"
  }

 

  Test_name = localStorage.getItem("Test_name")
  firebase.database().ref(document.getElementById("c_name_5").innerHTML + Test_name + "Result").push({
    question_1_status: question_1_status,
    question_2_status: question_2_status,
    question_3_status: question_3_status,
    question_4_status: question_4_status,
    question_5_status: question_5_status,
    question_6_status: question_6_status,
    question_7_status: question_7_status,
    question_8_status: question_8_status,
    question_9_status: question_9_status,
    question_10_status: question_10_status,
    marks: marks
  })
  marks = 0
  document.getElementById("display_answer_5").style.display="none"
  document.getElementById("display_answer_5_status").style.display="none"
}

function right_button_6_1_() {
  document.getElementById("answer_6_1").style.color = "green"
}
function wrong_button_6_1_() {
  document.getElementById("answer_6_1").style.color = "red"
}

function right_button_6_2_() {
  document.getElementById("answer_6_2").style.color = "green"
}
function wrong_button_6_2_() {
  document.getElementById("answer_6_2").style.color = "red"
}
function right_button_6_3_() {
  document.getElementById("answer_6_3").style.color = "green"
}
function wrong_button_6_3_() {
  document.getElementById("answer_6_3").style.color = "red"
}
function right_button_6_4_() {
  document.getElementById("answer_6_4").style.color = "green"
}
function wrong_button_6_4_() {
  document.getElementById("answer_6_4").style.color = "red"
}
function right_button_6_5_() {
  document.getElementById("answer_6_5").style.color = "green"
}
function wrong_button_6_5_() {
  document.getElementById("answer_6_5").style.color = "red"
}
function right_button_6_6_() {
  document.getElementById("answer_6_6").style.color = "green"
}
function wrong_button_6_6_() {
  document.getElementById("answer_6_6").style.color = "red"
}
function right_button_6_7_() {
  document.getElementById("answer_6_7").style.color = "green"
}
function wrong_button_6_7_() {
  document.getElementById("answer_6_7").style.color = "red"
}
function right_button_6_8_() {
  document.getElementById("answer_6_8").style.color = "green"
}
function wrong_button_6_8_() {
  document.getElementById("answer_6_8").style.color = "red"
}
function right_button_6_9_() {
  document.getElementById("answer_6_9").style.color = "green"
}
function wrong_button_6_9_() {
  document.getElementById("answer_6_9").style.color = "red"
}
function right_button_6_10_() {
  document.getElementById("answer_6_10").style.color = "green"
}
function wrong_button_6_10_() {
  document.getElementById("answer_6_10").style.color = "red"

}





function check_6() {

  if (document.getElementById("answer_6_1").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_1_status = "Wrong"
    } else {
      marks = marks
      question_1_status = "Wrong"
    }
  } else if (document.getElementById("answer_6_1").style.color == "green") {
    marks = marks + 1
    question_1_status = "Right"
  }

  if (document.getElementById("answer_6_2").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_2_status = "Wrong"
    } else {
      marks = marks
      question_2_status = "Wrong"
    }
  } else if (document.getElementById("answer_6_2").style.color == "green") {
    marks = marks + 1
    question_2_status = "Right"
  }

  if (document.getElementById("answer_6_3").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_3_status = "Wrong"
    } else {
      marks = marks
      question_3_status = "Wrong"
    }
  } else if (document.getElementById("answer_6_3").style.color == "green") {
    marks = marks + 1
    question_3_status = "Right"
  }

  if (document.getElementById("answer_6_4").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_4_status = "Wrong"
    } else {
      marks = marks
      question_4_status = "Wrong"
    }
  } else if (document.getElementById("answer_6_4").style.color == "green") {
    marks = marks + 1
    question_4_status = "Right"
  }

  if (document.getElementById("answer_6_5").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_5_status = "Wrong"
    } else {
      marks = marks
      question_5_status = "Wrong"
    }
  } else if (document.getElementById("answer_6_5").style.color == "green") {
    marks = marks + 1
    question_5_status = "Right"
  }

  if (document.getElementById("answer_6_6").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_6_status = "Wrong"
    } else {
      marks = marks
      question_6_status = "Wrong"
    }
  } else if (document.getElementById("answer_6_6").style.color == "green") {
    marks = marks + 1
    question_6_status = "Right"
  }

  if (document.getElementById("answer_6_7").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_7_status = "Wrong"
    } else {
      marks = marks
      question_7_status = "Wrong"
    }
  } else if (document.getElementById("answer_6_7").style.color == "green") {
    marks = marks + 1
    question_7_status = "Right"
  }

  if (document.getElementById("answer_6_8").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_8_status = "Wrong"
    } else {
      marks = marks
      question_8_status = "Wrong"
    }
  } else if (document.getElementById("answer_6_8").style.color == "green") {
    marks = marks + 1
    question_8_status = "Right"
  }

  if (document.getElementById("answer_6_9").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_9_status = "Wrong"
    } else {
      marks = marks
      question_9_status = "Wrong"
    }
  } else if (document.getElementById("answer_6_9").style.color == "green") {
    marks = marks + 1
    question_9_status = "Right"
  }

  if (document.getElementById("answer_6_10").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_10_status = "Wrong"
    } else {
      marks = marks
      question_10_status = "Wrong"
    }
  } else if (document.getElementById("answer_6_10").style.color == "green") {
    marks = marks + 1
    question_10_status = "Right"
  }



  Test_name = localStorage.getItem("Test_name")
  firebase.database().ref(document.getElementById("c_name_6").innerHTML + Test_name + "Result").push({
    question_1_status: question_1_status,
    question_2_status: question_2_status,
    question_3_status: question_3_status,
    question_4_status: question_4_status,
    question_5_status: question_5_status,
    question_6_status: question_6_status,
    question_7_status: question_7_status,
    question_8_status: question_8_status,
    question_9_status: question_9_status,
    question_10_status: question_10_status,
    marks: marks
  })
  marks = 0
  document.getElementById("display_answer_6").style.display="none"
  document.getElementById("display_answer_6_status").style.display="none"
}



function right_button_7_1_() {
  document.getElementById("answer_7_1").style.color = "green"
}
function wrong_button_7_1_() {
  document.getElementById("answer_7_1").style.color = "red"
}

function right_button_7_2_() {
  document.getElementById("answer_7_2").style.color = "green"
}
function wrong_button_7_2_() {
  document.getElementById("answer_7_2").style.color = "red"
}
function right_button_7_3_() {
  document.getElementById("answer_7_3").style.color = "green"
}
function wrong_button_7_3_() {
  document.getElementById("answer_7_3").style.color = "red"
}
function right_button_7_4_() {
  document.getElementById("answer_7_4").style.color = "green"
}
function wrong_button_7_4_() {
  document.getElementById("answer_7_4").style.color = "red"
}
function right_button_7_5_() {
  document.getElementById("answer_7_5").style.color = "green"
}
function wrong_button_7_5_() {
  document.getElementById("answer_7_5").style.color = "red"
}
function right_button_7_6_() {
  document.getElementById("answer_7_6").style.color = "green"
}
function wrong_button_7_6_() {
  document.getElementById("answer_7_6").style.color = "red"
}
function right_button_7_7_() {
  document.getElementById("answer_7_7").style.color = "green"
}
function wrong_button_7_7_() {
  document.getElementById("answer_7_7").style.color = "red"
}
function right_button_7_8_() {
  document.getElementById("answer_7_8").style.color = "green"
}
function wrong_button_7_8_() {
  document.getElementById("answer_7_8").style.color = "red"
}
function right_button_7_9_() {
  document.getElementById("answer_7_9").style.color = "green"
}
function wrong_button_7_9_() {
  document.getElementById("answer_7_9").style.color = "red"
}
function right_button_7_10_() {
  document.getElementById("answer_7_10").style.color = "green"
}
function wrong_button_7_10_() {
  document.getElementById("answer_7_10").style.color = "red"

}





function check_7() {

  if (document.getElementById("answer_7_1").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_1_status = "Wrong"
    } else {
      marks = marks
      question_1_status = "Wrong"
    }
  } else if (document.getElementById("answer_7_1").style.color == "green") {
    marks = marks + 1
    question_1_status = "Right"
  }

  if (document.getElementById("answer_7_2").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_2_status = "Wrong"
    } else {
      marks = marks
      question_2_status = "Wrong"
    }
  } else if (document.getElementById("answer_7_2").style.color == "green") {
    marks = marks + 1
    question_2_status = "Right"
  }

  if (document.getElementById("answer_7_3").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_3_status = "Wrong"
    } else {
      marks = marks
      question_3_status = "Wrong"
    }
  } else if (document.getElementById("answer_7_3").style.color == "green") {
    marks = marks + 1
    question_3_status = "Right"
  }

  if (document.getElementById("answer_7_4").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_4_status = "Wrong"
    } else {
      marks = marks
      question_4_status = "Wrong"
    }
  } else if (document.getElementById("answer_7_4").style.color == "green") {
    marks = marks + 1
    question_4_status = "Right"
  }

  if (document.getElementById("answer_7_5").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_5_status = "Wrong"
    } else {
      marks = marks
      question_5_status = "Wrong"
    }
  } else if (document.getElementById("answer_7_5").style.color == "green") {
    marks = marks + 1
    question_5_status = "Right"
  }

  if (document.getElementById("answer_7_6").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_6_status = "Wrong"
    } else {
      marks = marks
      question_6_status = "Wrong"
    }
  } else if (document.getElementById("answer_7_6").style.color == "green") {
    marks = marks + 1
    question_6_status = "Right"
  }

  if (document.getElementById("answer_7_7").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_7_status = "Wrong"
    } else {
      marks = marks
      question_7_status = "Wrong"
    }
  } else if (document.getElementById("answer_7_7").style.color == "green") {
    marks = marks + 1
    question_7_status = "Right"
  }

  if (document.getElementById("answer_7_8").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_8_status = "Wrong"
    } else {
      marks = marks
      question_8_status = "Wrong"
    }
  } else if (document.getElementById("answer_7_8").style.color == "green") {
    marks = marks + 1
    question_8_status = "Right"
  }

  if (document.getElementById("answer_7_9").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_9_status = "Wrong"
    } else {
      marks = marks
      question_9_status = "Wrong"
    }
  } else if (document.getElementById("answer_7_9").style.color == "green") {
    marks = marks + 1
    question_9_status = "Right"
  }

  if (document.getElementById("answer_7_10").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_10_status = "Wrong"
    } else {
      marks = marks
      question_10_status = "Wrong"
    }
  } else if (document.getElementById("answer_7_10").style.color == "green") {
    marks = marks + 1
    question_10_status = "Right"
  }



  Test_name = localStorage.getItem("Test_name")
  firebase.database().ref(document.getElementById("c_name_7").innerHTML + Test_name + "Result").push({
    question_1_status: question_1_status,
    question_2_status: question_2_status,
    question_3_status: question_3_status,
    question_4_status: question_4_status,
    question_5_status: question_5_status,
    question_6_status: question_6_status,
    question_7_status: question_7_status,
    question_8_status: question_8_status,
    question_9_status: question_9_status,
    question_10_status: question_10_status,
    marks: marks
  })
  marks = 0
  document.getElementById("display_answer_7").style.display="none"
  document.getElementById("display_answer_7_status").style.display="none"
}



function right_button_8_1_() {
  document.getElementById("answer_8_1").style.color = "green"
}
function wrong_button_8_1_() {
  document.getElementById("answer_8_1").style.color = "red"
}

function right_button_8_2_() {
  document.getElementById("answer_8_2").style.color = "green"
}
function wrong_button_8_2_() {
  document.getElementById("answer_8_2").style.color = "red"
}
function right_button_8_3_() {
  document.getElementById("answer_8_3").style.color = "green"
}
function wrong_button_8_3_() {
  document.getElementById("answer_8_3").style.color = "red"
}
function right_button_8_4_() {
  document.getElementById("answer_8_4").style.color = "green"
}
function wrong_button_8_4_() {
  document.getElementById("answer_8_4").style.color = "red"
}
function right_button_8_5_() {
  document.getElementById("answer_8_5").style.color = "green"
}
function wrong_button_8_5_() {
  document.getElementById("answer_8_5").style.color = "red"
}
function right_button_8_6_() {
  document.getElementById("answer_8_6").style.color = "green"
}
function wrong_button_8_6_() {
  document.getElementById("answer_8_6").style.color = "red"
}
function right_button_8_7_() {
  document.getElementById("answer_8_7").style.color = "green"
}
function wrong_button_8_7_() {
  document.getElementById("answer_8_7").style.color = "red"
}
function right_button_8_8_() {
  document.getElementById("answer_8_8").style.color = "green"
}
function wrong_button_8_8_() {
  document.getElementById("answer_8_8").style.color = "red"
}
function right_button_8_9_() {
  document.getElementById("answer_8_9").style.color = "green"
}
function wrong_button_8_9_() {
  document.getElementById("answer_8_9").style.color = "red"
}
function right_button_8_10_() {
  document.getElementById("answer_8_10").style.color = "green"
}
function wrong_button_8_10_() {
  document.getElementById("answer_8_10").style.color = "red"

}





function check_8() {

  if (document.getElementById("answer_8_1").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_1_status = "Wrong"
    } else {
      marks = marks
      question_1_status = "Wrong"
    }
  } else if (document.getElementById("answer_8_1").style.color == "green") {
    marks = marks + 1
    question_1_status = "Right"
  }

  if (document.getElementById("answer_8_2").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_2_status = "Wrong"
    } else {
      marks = marks
      question_2_status = "Wrong"
    }
  } else if (document.getElementById("answer_8_2").style.color == "green") {
    marks = marks + 1
    question_2_status = "Right"
  }

  if (document.getElementById("answer_8_3").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_3_status = "Wrong"
    } else {
      marks = marks
      question_3_status = "Wrong"
    }
  } else if (document.getElementById("answer_8_3").style.color == "green") {
    marks = marks + 1
    question_3_status = "Right"
  }

  if (document.getElementById("answer_8_4").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_4_status = "Wrong"
    } else {
      marks = marks
      question_4_status = "Wrong"
    }
  } else if (document.getElementById("answer_8_4").style.color == "green") {
    marks = marks + 1
    question_4_status = "Right"
  }

  if (document.getElementById("answer_8_5").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_5_status = "Wrong"
    } else {
      marks = marks
      question_5_status = "Wrong"
    }
  } else if (document.getElementById("answer_8_5").style.color == "green") {
    marks = marks + 1
    question_5_status = "Right"
  }

  if (document.getElementById("answer_8_6").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_6_status = "Wrong"
    } else {
      marks = marks
      question_6_status = "Wrong"
    }
  } else if (document.getElementById("answer_8_6").style.color == "green") {
    marks = marks + 1
    question_6_status = "Right"
  }

  if (document.getElementById("answer_8_7").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_7_status = "Wrong"
    } else {
      marks = marks
      question_7_status = "Wrong"
    }
  } else if (document.getElementById("answer_8_7").style.color == "green") {
    marks = marks + 1
    question_7_status = "Right"
  }

  if (document.getElementById("answer_8_8").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_8_status = "Wrong"
    } else {
      marks = marks
      question_8_status = "Wrong"
    }
  } else if (document.getElementById("answer_8_8").style.color == "green") {
    marks = marks + 1
    question_8_status = "Right"
  }

  if (document.getElementById("answer_8_9").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_9_status = "Wrong"
    } else {
      marks = marks
      question_9_status = "Wrong"
    }
  } else if (document.getElementById("answer_8_9").style.color == "green") {
    marks = marks + 1
    question_9_status = "Right"
  }

  if (document.getElementById("answer_8_10").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_10_status = "Wrong"
    } else {
      marks = marks
      question_10_status = "Wrong"
    }
  } else if (document.getElementById("answer_8_10").style.color == "green") {
    marks = marks + 1
    question_10_status = "Right"
  }

  

  Test_name = localStorage.getItem("Test_name")
  firebase.database().ref(document.getElementById("c_name_8").innerHTML + Test_name + "Result").push({
    question_1_status: question_1_status,
    question_2_status: question_2_status,
    question_3_status: question_3_status,
    question_4_status: question_4_status,
    question_5_status: question_5_status,
    question_6_status: question_6_status,
    question_7_status: question_7_status,
    question_8_status: question_8_status,
    question_9_status: question_9_status,
    question_10_status: question_10_status,
    marks: marks
  })
  marks = 0
  document.getElementById("display_answer_8").style.display="none"
  document.getElementById("display_answer_8_status").style.display="none"
}

function right_button_9_1_() {
  document.getElementById("answer_9_1").style.color = "green"
}
function wrong_button_9_1_() {
  document.getElementById("answer_9_1").style.color = "red"
}

function right_button_9_2_() {
  document.getElementById("answer_9_2").style.color = "green"
}
function wrong_button_9_2_() {
  document.getElementById("answer_9_2").style.color = "red"
}
function right_button_9_3_() {
  document.getElementById("answer_9_3").style.color = "green"
}
function wrong_button_9_3_() {
  document.getElementById("answer_9_3").style.color = "red"
}
function right_button_9_4_() {
  document.getElementById("answer_9_4").style.color = "green"
}
function wrong_button_9_4_() {
  document.getElementById("answer_9_4").style.color = "red"
}
function right_button_9_5_() {
  document.getElementById("answer_9_5").style.color = "green"
}
function wrong_button_9_5_() {
  document.getElementById("answer_9_5").style.color = "red"
}
function right_button_9_6_() {
  document.getElementById("answer_9_6").style.color = "green"
}
function wrong_button_9_6_() {
  document.getElementById("answer_9_6").style.color = "red"
}
function right_button_9_7_() {
  document.getElementById("answer_9_7").style.color = "green"
}
function wrong_button_9_7_() {
  document.getElementById("answer_9_7").style.color = "red"
}
function right_button_9_8_() {
  document.getElementById("answer_9_8").style.color = "green"
}
function wrong_button_9_8_() {
  document.getElementById("answer_9_8").style.color = "red"
}
function right_button_9_9_() {
  document.getElementById("answer_9_9").style.color = "green"
}
function wrong_button_9_9_() {
  document.getElementById("answer_9_9").style.color = "red"
}
function right_button_9_10_() {
  document.getElementById("answer_9_10").style.color = "green"
}
function wrong_button_9_10_() {
  document.getElementById("answer_9_10").style.color = "red"

}





function check_9() {

  if (document.getElementById("answer_9_1").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_1_status = "Wrong"
    } else {
      marks = marks
      question_1_status = "Wrong"
    }
  } else if (document.getElementById("answer_9_1").style.color == "green") {
    marks = marks + 1
    question_1_status = "Right"
  }

  if (document.getElementById("answer_9_2").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_2_status = "Wrong"
    } else {
      marks = marks
      question_2_status = "Wrong"
    }
  } else if (document.getElementById("answer_9_2").style.color == "green") {
    marks = marks + 1
    question_2_status = "Right"
  }

  if (document.getElementById("answer_9_3").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_3_status = "Wrong"
    } else {
      marks = marks
      question_3_status = "Wrong"
    }
  } else if (document.getElementById("answer_9_3").style.color == "green") {
    marks = marks + 1
    question_3_status = "Right"
  }

  if (document.getElementById("answer_9_4").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_4_status = "Wrong"
    } else {
      marks = marks
      question_4_status = "Wrong"
    }
  } else if (document.getElementById("answer_9_4").style.color == "green") {
    marks = marks + 1
    question_4_status = "Right"
  }

  if (document.getElementById("answer_9_5").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_5_status = "Wrong"
    } else {
      marks = marks
      question_5_status = "Wrong"
    }
  } else if (document.getElementById("answer_9_5").style.color == "green") {
    marks = marks + 1
    question_5_status = "Right"
  }

  if (document.getElementById("answer_9_6").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_6_status = "Wrong"
    } else {
      marks = marks
      question_6_status = "Wrong"
    }
  } else if (document.getElementById("answer_9_6").style.color == "green") {
    marks = marks + 1
    question_6_status = "Right"
  }

  if (document.getElementById("answer_9_7").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_7_status = "Wrong"
    } else {
      marks = marks
      question_7_status = "Wrong"
    }
  } else if (document.getElementById("answer_9_7").style.color == "green") {
    marks = marks + 1
    question_7_status = "Right"
  }

  if (document.getElementById("answer_9_8").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_8_status = "Wrong"
    } else {
      marks = marks
      question_8_status = "Wrong"
    }
  } else if (document.getElementById("answer_9_8").style.color == "green") {
    marks = marks + 1
    question_8_status = "Right"
  }

  if (document.getElementById("answer_9_9").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_9_status = "Wrong"
    } else {
      marks = marks
      question_9_status = "Wrong"
    }
  } else if (document.getElementById("answer_9_9").style.color == "green") {
    marks = marks + 1
    question_9_status = "Right"
  }

  if (document.getElementById("answer_9_10").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_10_status = "Wrong"
    } else {
      marks = marks
      question_10_status = "Wrong"
    }
  } else if (document.getElementById("answer_9_10").style.color == "green") {
    marks = marks + 1
    question_10_status = "Right"
  }

  

  Test_name = localStorage.getItem("Test_name")
  firebase.database().ref(document.getElementById("c_name_9").innerHTML + Test_name + "Result").push({
    question_1_status: question_1_status,
    question_2_status: question_2_status,
    question_3_status: question_3_status,
    question_4_status: question_4_status,
    question_5_status: question_5_status,
    question_6_status: question_6_status,
    question_7_status: question_7_status,
    question_8_status: question_8_status,
    question_9_status: question_9_status,
    question_10_status: question_10_status,
    marks: marks
  })
  marks = 0
  document.getElementById("display_answer_9").style.display="none"
  document.getElementById("display_answer_9_status").style.display="none"
}


function right_button_10_1_() {
  document.getElementById("answer_10_1").style.color = "green"
}
function wrong_button_10_1_() {
  document.getElementById("answer_10_1").style.color = "red"
}

function right_button_10_2_() {
  document.getElementById("answer_10_2").style.color = "green"
}
function wrong_button_10_2_() {
  document.getElementById("answer_10_2").style.color = "red"
}
function right_button_10_3_() {
  document.getElementById("answer_10_3").style.color = "green"
}
function wrong_button_10_3_() {
  document.getElementById("answer_10_3").style.color = "red"
}
function right_button_10_4_() {
  document.getElementById("answer_10_4").style.color = "green"
}
function wrong_button_10_4_() {
  document.getElementById("answer_10_4").style.color = "red"
}
function right_button_10_5_() {
  document.getElementById("answer_10_5").style.color = "green"
}
function wrong_button_10_5_() {
  document.getElementById("answer_10_5").style.color = "red"
}
function right_button_10_6_() {
  document.getElementById("answer_10_6").style.color = "green"
}
function wrong_button_10_6_() {
  document.getElementById("answer_10_6").style.color = "red"
}
function right_button_10_7_() {
  document.getElementById("answer_10_7").style.color = "green"
}
function wrong_button_10_7_() {
  document.getElementById("answer_10_7").style.color = "red"
}
function right_button_10_8_() {
  document.getElementById("answer_10_8").style.color = "green"
}
function wrong_button_10_8_() {
  document.getElementById("answer_10_8").style.color = "red"
}
function right_button_10_9_() {
  document.getElementById("answer_10_9").style.color = "green"
}
function wrong_button_10_9_() {
  document.getElementById("answer_10_9").style.color = "red"
}
function right_button_10_10_() {
  document.getElementById("answer_10_10").style.color = "green"
}
function wrong_button_10_10_() {
  document.getElementById("answer_0_10").style.color = "red"

}





function check_10() {

  if (document.getElementById("answer_10_1").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_1_status = "Wrong"
    } else {
      marks = marks
      question_1_status = "Wrong"
    }
  } else if (document.getElementById("answer_10_1").style.color == "green") {
    marks = marks + 1
    question_1_status = "Right"
  }

  if (document.getElementById("answer_10_2").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_2_status = "Wrong"
    } else {
      marks = marks
      question_2_status = "Wrong"
    }
  } else if (document.getElementById("answer_10_2").style.color == "green") {
    marks = marks + 1
    question_2_status = "Right"
  }

  if (document.getElementById("answer_10_3").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_3_status = "Wrong"
    } else {
      marks = marks
      question_3_status = "Wrong"
    }
  } else if (document.getElementById("answer_10_3").style.color == "green") {
    marks = marks + 1
    question_3_status = "Right"
  }

  if (document.getElementById("answer_10_4").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_4_status = "Wrong"
    } else {
      marks = marks
      question_4_status = "Wrong"
    }
  } else if (document.getElementById("answer_10_4").style.color == "green") {
    marks = marks + 1
    question_4_status = "Right"
  }

  if (document.getElementById("answer_10_5").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_5_status = "Wrong"
    } else {
      marks = marks
      question_5_status = "Wrong"
    }
  } else if (document.getElementById("answer_10_5").style.color == "green") {
    marks = marks + 1
    question_5_status = "Right"
  }

  if (document.getElementById("answer_10_6").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_6_status = "Wrong"
    } else {
      marks = marks
      question_6_status = "Wrong"
    }
  } else if (document.getElementById("answer_10_6").style.color == "green") {
    marks = marks + 1
    question_6_status = "Right"
  }

  if (document.getElementById("answer_10_7").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_7_status = "Wrong"
    } else {
      marks = marks
      question_7_status = "Wrong"
    }
  } else if (document.getElementById("answer_10_7").style.color == "green") {
    marks = marks + 1
    question_7_status = "Right"
  }

  if (document.getElementById("answer_10_8").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_8_status = "Wrong"
    } else {
      marks = marks
      question_8_status = "Wrong"
    }
  } else if (document.getElementById("answer_10_8").style.color == "green") {
    marks = marks + 1
    question_8_status = "Right"
  }

  if (document.getElementById("answer_10_9").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_9_status = "Wrong"
    } else {
      marks = marks
      question_9_status = "Wrong"
    }
  } else if (document.getElementById("answer_10_9").style.color == "green") {
    marks = marks + 1
    question_9_status = "Right"
  }

  if (document.getElementById("answer_10_10").style.color == "red") {
    if (marks == 0) {
      marks = 0
      question_10_status = "Wrong"
    } else {
      marks = marks
      question_10_status = "Wrong"
    }
  } else if (document.getElementById("answer_10_10").style.color == "green") {
    marks = marks + 1
    question_10_status = "Right"
  }

  

  Test_name = localStorage.getItem("Test_name")
  firebase.database().ref(document.getElementById("c_name_10").innerHTML + Test_name + "Result").push({
    question_1_status: question_1_status,
    question_2_status: question_2_status,
    question_3_status: question_3_status,
    question_4_status: question_4_status,
    question_5_status: question_5_status,
    question_6_status: question_6_status,
    question_7_status: question_7_status,
    question_8_status: question_8_status,
    question_9_status: question_9_status,
    question_10_status: question_10_status,
    marks: marks
  })
  marks = 0
  document.getElementById("display_answer_10").style.display="none"
  document.getElementById("display_answer_10_status").style.display="none"
}

function chat() {
document.getElementById("chat_div").style.display="block"
document.getElementById("chat_display").style.display="block"
document.getElementById("component").style.display="block"
  test_name_chat = localStorage.getItem("Test_name")
  firebase.database().ref("/" + teachername + "StudentName").on('value', function (snapshot) {
    document.getElementById("chat_display").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        firebase_message_id = childKey;

        getDetail_1 = childData

        var student_1_name_fetch_1 = getDetail_1["student_1_name"]

   
        var student_2_name_fetch = getDetail_1["student_2_name"]

        var student_3_name_fetch = getDetail_1["student_3_name"]

        var student_4_name_fetch = getDetail_1["student_4_name"]

        var student_5_name_fetch = getDetail_1["student_5_name"]

        var student_6_name_fetch = getDetail_1["student_6_name"]

        var student_7_name_fetch = getDetail_1["student_7_name"]

        var student_8_name_fetch = getDetail_1["student_8_name"]


        var student_9_name_fetch = getDetail_1["student_9_name"]

        var student_10_name_fetch = getDetail_1["student_10_name"]

        var first = getDetail_1['student_1_name']
        student_1 = "<a id= 'student_1_name' onclick='redirectToChatPage_1()'>" +first+ "</a>"
        student_2 = "<a id= 'student_2_name' onclick='redirectToChatPage_2()'>"+student_2_name_fetch + "</a>"
        student_3 = "<a id= 'student_3_name' onclick='redirectToChatPage_3()'>"+student_3_name_fetch + "</a>"
        student_4 = "<a id= 'student_4_name'  onclick='redirectToChatPage_4()'>"+student_4_name_fetch + "</a>"
        student_5 = "<a id= 'student_5_name'  onclick='redirectToChatPage_5()'>"+student_5_name_fetch + "</a>"
        student_6 = "<a id= 'student_6_name'  onclick='redirectToChatPage_6()'>"+student_6_name_fetch + "</a>"
        student_7 = "<a id= 'student_7_name'  onclick='redirectToChatPage_7()'>"+student_7_name_fetch + "</a>"
        student_8 = "<a id= 'student_8_name'  onclick='redirectToChatPage_8()'>"+student_8_name_fetch + "</a>"
        student_9 = "<a id= 'student_9_name'   onclick='redirectToChatPage_9()'>"+student_9_name_fetch + "</a>"
        student_10 = "<a id= 'student_10_name'  onclick='redirectToChatPage_10()'>"+student_10_name_fetch + "</a>"

        document.getElementById("chat_display").innerHTML = student_1 + " <hr> " + student_2 + "<br> <hr>" + student_3 + " <br> <hr>" + student_4 + "<br> <hr> " + student_5 + " <br> <hr>" +student_6 + " <br> <hr>" + student_7 + " <br> <hr>" + student_8 + "<br> <hr> " + student_9 + " <br> <hr>" + student_10

      }
    });
  });
}

function redirectToChatPage_1() {
name_name= document.getElementById("student_1_name").innerHTML
document.getElementById("display_chat").innerHTML=""

  firebase.database().ref("/" + name_name+"Message").on('value', function (snapshot) {
    document.getElementById("display_chat").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
       
        get_message_2 = childData
        

        
        document.getElementById("display_chat").innerHTML += "<b> "+ get_message_2["name"] +" </b> <br>"+ get_message_2["message"] + " <hr> "

localStorage.setItem("send_name",name_name)
      }
    });
  });
}

function send() {
  name_name_send=localStorage.getItem("send_name")
  firebase.database().ref(name_name_send + "Message").push({
    message: document.getElementById("msg").value,
    name: teachername
  })
  document.getElementById("msg").value = ""
}

function redirectToChatPage_2() {
  name_name= document.getElementById("student_2_name").innerHTML
  document.getElementById("display_chat").innerHTML=""
   
    firebase.database().ref("/" + name_name+"Message").on('value', function (snapshot) {
      document.getElementById("display_chat").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
          get_message_2 = childData
  
 
          row_display="<b> "+ get_message_2["name"] +" </b> <br>"+ get_message_2["message"] + " <hr> "
          document.getElementById("display_chat").innerHTML += row_display

        }
      });
    });
  }
  function redirectToChatPage_3() {
    name_name= document.getElementById("student_3_name").innerHTML
    document.getElementById("display_chat").innerHTML=""
 
      firebase.database().ref("/" + name_name+"Message").on('value', function (snapshot) {
        document.getElementById("display_chat").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
            get_message_2 = childData
    

            
            document.getElementById("display_chat").innerHTML += "<b> "+ get_message_2["name"] +" </b> <br>"+ get_message_2["message"] + " <hr> "
    

          }
        });
      });
    }
    function redirectToChatPage_4() {
      name_name= document.getElementById("student_4_name").innerHTML
      document.getElementById("display_chat").innerHTML=""
      
        firebase.database().ref("/" + name_name+"Message").on('value', function (snapshot) {
          document.getElementById("display_chat").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
              get_message_2 = childData
      
    
              
              document.getElementById("display_chat").innerHTML += "<b> "+ get_message_2["name"] +" </b> <br>"+ get_message_2["message"] + " <hr> "
    
            }
          });
        });
      }
      function redirectToChatPage_5() {
        name_name= document.getElementById("student_5_name").innerHTML
        document.getElementById("display_chat").innerHTML=""
       
          firebase.database().ref("/" + name_name+"Message").on('value', function (snapshot) {
            document.getElementById("display_chat").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                get_message_2 = childData
        
                document.getElementById("display_chat").innerHTML += "<b> "+ get_message_2["name"] +" </b> <br>"+ get_message_2["message"] + " <hr> "
      
              }
            });
          });
        }
        function redirectToChatPage_6() {
          name_name= document.getElementById("student_6_name").innerHTML
          document.getElementById("display_chat").innerHTML=""
          
            firebase.database().ref("/" + name_name+"Message").on('value', function (snapshot) {
              document.getElementById("display_chat").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                  get_message_2 = childData
          
       
                  
                  document.getElementById("display_chat").innerHTML += "<b> "+ get_message_2["name"] +" </b> <br>"+ get_message_2["message"] + " <hr> "
          
   
                }
              });
            });
          }
          function redirectToChatPage_7() {
            name_name= document.getElementById("student_7_name").innerHTML
            document.getElementById("display_chat").innerHTML=""
           
              firebase.database().ref("/" + name_name+"Message").on('value', function (snapshot) {
                document.getElementById("display_chat").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                    get_message_2 = childData
            
           
                    
                    document.getElementById("display_chat").innerHTML += "<b> "+ get_message_2["name"] +" </b> <br>"+ get_message_2["message"] + " <hr> "
            

                  }
                });
              });
            }
            function redirectToChatPage_8() {
              name_name= document.getElementById("student_8_name").innerHTML
              document.getElementById("display_chat").innerHTML=""
              
                firebase.database().ref("/" + name_name+"Message").on('value', function (snapshot) {
                  document.getElementById("display_chat").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                    childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      get_message_2 = childData
           
                      
                      document.getElementById("display_chat").innerHTML += "<b> "+ get_message_2["name"] +" </b> <br>"+ get_message_2["message"] + " <hr> "
              
     
                    }
                  });
                });
              }
              function redirectToChatPage_9() {
                name_name= document.getElementById("student_9_name").innerHTML
                document.getElementById("display_chat").innerHTML=""
                   firebase.database().ref("/" + name_name+"Message").on('value', function (snapshot) {
                    document.getElementById("display_chat").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        get_message_2 = childData
                
                
                        
                        document.getElementById("display_chat").innerHTML += "<b> "+ get_message_2["name"] +" </b> <br>"+ get_message_2["message"] + " <hr> "
                
           
                      }
                    });
                  });
                }
                function redirectToChatPage_10() {
                  name_name= document.getElementById("student_10_name").innerHTML
                  document.getElementById("display_chat").innerHTML=""
                  
                    firebase.database().ref("/" + name_name+"Message").on('value', function (snapshot) {
                      document.getElementById("display_chat").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                        childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                          get_message_2 = childData
                          
              
                          
                          document.getElementById("display_chat").innerHTML += "<b> "+ get_message_2["name"] +" </b> <br>"+ get_message_2["message"] + " <hr> "
              

                 
                        }
                      });
                    });
                  }