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

// const readData = getStudentViaCSV();
// console.log(readData);

$('#submitStdCSV').click(function(){
    let urlPath = $('#csvPathLink').val();
    let filePath = $('stdCSV').val();
    const readData = getStudentViaCSV();
    if(readData){
      for(let i=0; i<readData.length; i++){
        readData[i].university = readData[i].university.toLowerCase();
        readData[i].school = readData[i].school.toLowerCase();
        readData[i].dept = readData[i].dept.toLowerCase();
        readData[i].major = readData[i].major.toLowerCase();
        readData[i].semester = readData[i].semester.toLowerCase();
      
      // console.log('readData', readData);
      // console.log(filePath);
      // const readData = getStudentViaCSV(filePath);
      // console.log(readData);
      let newStudent = {year:readData[i].year, studentId:readData[i].studentId, university: readData[i].university, school: readData[i].school, dept:readData[i].dept, major: readData[i].major, semester: readData[i].semester};
      addStudentsViaCSV(newStudent);
      }
      // console.log('readData', readData);
    }
})

$('#submitTeacherCSV').click(function(){
  let urlPath = $('#csvPathLink').val();
  let filePath = $('stdCSV').val();
  const readData = getTeacherViaCSV();
  if(readData){
    for(let i=0; i<readData.length; i++){
      readData[i].firstname = readData[i].firstname.toLowerCase();
      readData[i].lastname = readData[i].lastname.toLowerCase();
      readData[i].teachers_uni = readData[i].teachers_uni.toLowerCase();
      readData[i].income = readData[i].income.toLowerCase();
      readData[i].teachers_rank = readData[i].teachers_rank.toLowerCase();
    
    // console.log('readData', readData);
    // console.log(filePath);
    // const readData = getStudentViaCSV(filePath);
    // console.log(readData);
    let newTeacher = {firstname:readData[i].firstname, lastname:readData[i].lastname, teacherId: readData[i].teacherId, teachers_uni: readData[i].teachers_uni, income: readData[i].income, teachers_rank:readData[i].teachers_rank};
    addTeachersViaCSV(newTeacher);
    }
    // console.log('readData', readData);
  }
})


const studentData = getStudentData();
// console.log(studentData);

const teacherData = getTeacherData();
// console.log(teacherData);

// Chart Generation 
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
    ['University', 'Average income rate per university', { role: 'style' } ],
    ["IUB", parseFloat(iubS/iubC), 'color: red'],
    ["NSU", parseFloat(nsuS/nsuC), 'color: #76A7FA'],
    ["AIUB", parseFloat(aiubS/aiubC), 'opacity: 0.2'],
    ["UIU", parseFloat(uiuS/uiuC), 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
    ["DIU", parseFloat(diuS/diuC), 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
  ]);

  var options = {
    title: 'Average income rate for faculty\'s in private University\'s',
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('avgSalaryColumnChart'));

  chart.draw(data, options);
}


// Column Chart
google.charts.setOnLoadCallback(drawYearlyStdAreaChart);
function drawYearlyStdAreaChart() {
  let nsuY15 = nsuY16 = nsuY17 = nsuY18 = nsuY19 = nsuY20 = 0;
  let iubY15 = iubY16 = iubY17 = iubY18 = iubY19 = iubY20 = 0;
  let aiubY15 = aiubY16 = aiubY17 = aiubY18 = aiubY19 = aiubY20 = 0;
  let uiuY15 = uiuY16 = uiuY17 = uiuY18 = uiuY19 = uiuY20 = 0;
  let diuY15 = diuY16 = diuY17 = diuY18 = diuY19 = diuY20 = 0;
  for(let i=0; i<studentData.length; i++){
    if(studentData[i].university === 'nsu'){
      if(studentData[i].year === 2015){
        nsuY15+=1;
      }else if(studentData[i].year === 2016){
        nsuY16+=1;
      }else if(studentData[i].year === 2017){
        nsuY17+=1;
      }else if(studentData[i].year === 2018){
        nsuY18+=1;
      }else if(studentData[i].year === 2019){
        nsuY19+=1;
      }else if(studentData[i].year === 2020){
        nsuY20+=1;
      }
    }
    else if(studentData[i].university === 'iub'){
      if(studentData[i].year === 2015){
        iubY15+=1;
      }else if(studentData[i].year === 2016){
        iubY16+=1;
      }else if(studentData[i].year === 2017){
        iubY17+=1;
      }else if(studentData[i].year === 2018){
        iubY18+=1;
      }else if(studentData[i].year === 2019){
        iubY19+=1;
      }else if(studentData[i].year === 2020){
        iubY20+=1;
      }
    }else if(studentData[i].university === 'aiub'){
      if(studentData[i].year === 2015){
        aiubY15+=1;
      }else if(studentData[i].year === 2016){
        aiubY16+=1;
      }else if(studentData[i].year === 2017){
        aiubY17+=1;
      }else if(studentData[i].year === 2018){
        aiubY18+=1;
      }else if(studentData[i].year === 2019){
        aiubY19+=1;
      }else if(studentData[i].year === 2020){
        aiubY20+=1;
      }
    }else if(studentData[i].university === 'uiu'){
      if(studentData[i].year === 2015){
        uiuY15+=1;
      }else if(studentData[i].year === 2016){
        uiuY16+=1;
      }else if(studentData[i].year === 2017){
        uiuY17+=1;
      }else if(studentData[i].year === 2018){
        uiuY18+=1;
      }else if(studentData[i].year === 2019){
        uiuY19+=1;
      }else if(studentData[i].year === 2020){
        uiuY20+=1;
      }
    }
    else if(studentData[i].university === 'diu'){
      if(studentData[i].year === 2015){
        diuY15+=1;
      }else if(studentData[i].year === 2016){
        diuY16+=1;
      }else if(studentData[i].year === 2017){
        diuY17+=1;
      }else if(studentData[i].year === 2018){
        diuY18+=1;
      }else if(studentData[i].year === 2019){
        diuY19+=1;
      }else if(studentData[i].year === 2020){
        diuY20+=1;
      }
    }
  }
  var data = google.visualization.arrayToDataTable([
    ['Year', 'IUB', 'NSU', 'AIUB', 'UIU', 'DIU'],
    ['2015', iubY15, nsuY15, aiubY15, uiuY15, diuY15],
    ['2016', iubY16, nsuY16, aiubY16, uiuY16, diuY16],
    ['2017', iubY17, nsuY17, aiubY17, uiuY17, diuY17],
    ['2018', iubY18, nsuY18, aiubY18, uiuY18, diuY18],
    ['2019', iubY19, nsuY19, aiubY19, uiuY19, diuY19],
    ['2020', iubY20, nsuY20, aiubY20, uiuY20, diuY20]
  ]);
  var options = {
    title: 'Yearly Student enrolled in private University\'s',
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('yearlyStdAreaChart'));

  chart.draw(data, options);
}
