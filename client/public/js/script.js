// function showPassBtn(){
//     var x = document.getElementById("myPassword");
//         if (x.type === "password") {
//         x.type = "text";
//         } else {
//         x.type = "password";
//         }
// }

// $('#submitStdCSV').click(function(){
//   function readSingleFile(evt) {
//     var f = evt.target.files[0]; 
//     if (f) {
//       var r = new FileReader();
//       r.onload = function(e) { 
//           var contents = e.target.result;
//           document.write("File Uploaded! <br />" + "name: " + f.name + "<br />" + "content: " + contents + "<br />" + "type: " + f.type + "<br />" + "size: " + f.size + " bytes <br />");

//           var lines = contents.split("\n"), output = [];
//           for (var i=0; i<lines.length; i++){
//             output.push("<tr><td>" + lines[i].split(",").join("</td><td>") + "</td></tr>");
//           }
//           output = "<table>" + output.join("") + "</table>";
//           document.write(output);
//      }
//       r.readAsText(f);
//       document.write(output);
//     } else { 
//       alert("Failed to load file");
//     }
//   }
//   document.getElementById('stdCSV').addEventListener('change', readSingleFile);
// })

// add Student data individually

// $('#addStudentBtn').click(function(){
//     let year = $('#year').val();
//     let studentId = $('#studentId').val();
//     let university = $('#university').val();
//     let school = $('#school').val();
//     let dept = $('#dept').val();
//     let major = $('major').val();
//     let semester = $('semester').val();
    
//     if(year && studentId && university && school && major){
//         let newStudent = {year:year, studentId:studentId, university: university, school: school, dept:dept, major: major, semester: semester};
//         addStudent(newStudent);
//     }
// })

const studentData = getStudentData();
console.log(studentData);

const teacherData = getTeacherData();
console.log(teacherData);

//PIE Chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawStudentPieChart);


function drawStudentPieChart() {

  let nsuC = 0;
  let iubC = 0;
  let aiubC = 0;
  let uiuC = 0;
  let diuC = 0;
  for(let i=0; i<studentData.length; i++){
    if(studentData[i].university === 'nsu'){
      nsuC+=1;
    }
    else if(studentData[i].university === 'iub'){
      iubC+=1;
    }else if(studentData[i].university === 'aiub'){
      aiubC+=1;
    }else if(studentData[i].university === 'uiu'){
      uiuC+=1;
    }
    else if(studentData[i].university === 'diu'){
      diuC+=1;
    }
  }
  var data = google.visualization.arrayToDataTable([
    ['University', 'Student\'s rate per university'],
    ["IUB", iubC],
    ["NSU", nsuC],
    ["AIUB", aiubC],
    ["UIU", uiuC],
    ["DIU", diuC]
  ]);
  var options = {
    title: 'Students rate in private University\'s'
  };

  var chart = new google.visualization.PieChart(document.getElementById('studentsPieChart'));

  chart.draw(data, options);
}

// google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawTeacherPieChart);
function drawTeacherPieChart() {

  let nsuC = 0;
  let iubC = 0;
  let aiubC = 0;
  let uiuC = 0;
  let diuC = 0;
  for(let i=0; i<teacherData.length; i++){
    if(teacherData[i].teachers_uni === 'nsu'){
      nsuC+=1;
    }
    else if(teacherData[i].teachers_uni === 'iub'){
      iubC+=1;
    }else if(teacherData[i].teachers_uni === 'aiub'){
      aiubC+=1;
    }else if(teacherData[i].teachers_uni === 'uiu'){
      uiuC+=1;
    }
    else if(teacherData[i].teachers_uni === 'diu'){
      diuC+=1;
    }
  }
  var data = google.visualization.arrayToDataTable([
    ['University', 'Teacher\'s rate per university'],
    ["IUB", iubC],
    ["NSU", nsuC],
    ["AIUB", aiubC],
    ["UIU", uiuC],
    ["DIU", diuC]
  ]);
  var options = {
    title: 'Teachers rate in private University\'s'
  };

  var chart = new google.visualization.PieChart(document.getElementById('teachersPieChart'));

  chart.draw(data, options);
}

// Bar Chart

google.charts.setOnLoadCallback(drawPhdBarChart);
function drawPhdBarChart() {

  let nsuC = 0;
  let iubC = 0;
  let aiubC = 0;
  let uiuC = 0;
  let diuC = 0;
  for(let i=0; i<teacherData.length; i++){
    if(teacherData[i].teachers_rank === 'phd'){
      if(teacherData[i].teachers_uni === 'nsu'){
        nsuC+=1;
      }
      else if(teacherData[i].teachers_uni === 'iub'){
        iubC+=1;
      }else if(teacherData[i].teachers_uni === 'aiub'){
        aiubC+=1;
      }else if(teacherData[i].teachers_uni === 'uiu'){
        uiuC+=1;
      }
      else if(teacherData[i].teachers_uni === 'diu'){
        diuC+=1;
      }
  }
  }
  var data = google.visualization.arrayToDataTable([
    ['University', 'Phd teacher\'s rate per university'],
    ["IUB", iubC],
    ["NSU", nsuC],
    ["AIUB", aiubC],
    ["UIU", uiuC],
    ["DIU", diuC]
  ]);
  var options = {
    title: 'Phd teacher\'s rate in private University\'s'
  };

  var chart = new google.visualization.BarChart(document.getElementById('phdBarChart'));

  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawLecturerBarChart);
function drawLecturerBarChart() {

  let nsuC = 0;
  let iubC = 0;
  let aiubC = 0;
  let uiuC = 0;
  let diuC = 0;
  for(let i=0; i<teacherData.length; i++){
    if(teacherData[i].teachers_rank === 'lecturer'){
      if(teacherData[i].teachers_uni === 'nsu'){
        nsuC+=1;
      }
      else if(teacherData[i].teachers_uni === 'iub'){
        iubC+=1;
      }else if(teacherData[i].teachers_uni === 'aiub'){
        aiubC+=1;
      }else if(teacherData[i].teachers_uni === 'uiu'){
        uiuC+=1;
      }
      else if(teacherData[i].teachers_uni === 'diu'){
        diuC+=1;
      }
    }
}
  var data = google.visualization.arrayToDataTable([
    ['University', 'Lecturer\'s rate per university'],
    ["IUB", iubC],
    ["NSU", nsuC],
    ["AIUB", aiubC],
    ["UIU", uiuC],
    ["DIU", diuC]
  ]);
  var options = {
    title: 'Lecturer\'s rate in private University\'s'
  };

  var chart = new google.visualization.BarChart(document.getElementById('lecturerBarChart'));

  chart.draw(data, options);
}

// Column Chart
google.charts.setOnLoadCallback(drawAvgSalaryColumnChart);
function drawAvgSalaryColumnChart() {

  let nsuC = 0;
  let iubC = 0;
  let aiubC = 0;
  let uiuC = 0;
  let diuC = 0;
  let iubS = nsuS = aiubS = uiuS = diuS = 0;
  for(let i=0; i<teacherData.length; i++){
      if(teacherData[i].teachers_uni === 'nsu'){
        nsuC+=1;
        nsuS+=teacherData[i].income;
      }
      else if(teacherData[i].teachers_uni === 'iub'){
        iubC+=1;
        iubS+=teacherData[i].income;
      }else if(teacherData[i].teachers_uni === 'aiub'){
        aiubC+=1;
        aiubS+=teacherData[i].income;
      }else if(teacherData[i].teachers_uni === 'uiu'){
        uiuC+=1;
        uiuS+=teacherData[i].income;
      }
      else if(teacherData[i].teachers_uni === 'diu'){
        diuC+=1;
        diuS+=teacherData[i].income;
      }
}
  var data = google.visualization.arrayToDataTable([
    ['University', 'Average income rate per university'],
    ["IUB", parseFloat(iubS/iubC)],
    ["NSU", parseFloat(nsuS/nsuC)],
    ["AIUB", parseFloat(aiubS/aiubC)],
    ["UIU", parseFloat(uiuS/uiuC)],
    ["DIU", parseFloat(diuS/diuC)]
  ]);
  var options = {
    title: 'Average income rate for faculty\'s in private University\'s'
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('avgSalaryColumnChart'));

  chart.draw(data, options);
}
