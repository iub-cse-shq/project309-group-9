// function addStudent(newStudent){

//     $.ajax({
//         type: 'POST',
//         url: '/student/new',
//         data: newStudent,
//         success: response => {
//             console.log(response);
//         },
//         error: response => {
//             console.log(response);
//         }
//     })
// }

function getStudentData(){
    let student = [];
    $.ajax({
        type:'GET',
        url: '/students/all',
        async: false,
        success: response => {
            student = JSON.parse(response)
            // console.log(student[0]._id);
        },
        error: response => {
            console.log(response);
        }
    })
    return student;
}

function getTeacherData(){
    let teacher = [];
    $.ajax({
        type:'GET',
        url: '/teachers/all',
        async: false,
        success: response => {
            teacher = JSON.parse(response)
            // console.log(teacher[0]._id);
        },
        error: response => {
            console.log(response);
        }
    })
    return teacher;
}