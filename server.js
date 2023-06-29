var express = require("express");
var cors = require("cors");
require('dotenv').config();
var app = express();
app.use(cors())
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
    next();
});

const PORT = process.env.PORT || 8080;

customers = [
    {
        custId: 1,
        name: "ABC",
        password: "abc1234",
        role: "admin",
        email: "abc@gmail.com"
    },
    {
        custId: 2,
        name: "Willie",
        password: "willie1234",
        role: "student",
        email: "willie@gmail.com"
    },
    {
        custId: 3,
        name: "Jack",
        password: "jack1234",
        role: "faculty",
        email: "jack@gmail.com"
    },
    {
        custId: 4,
        name: "James",
        password: "james1234",
        role: "student",
        email: "james@gmail.com"
    },
    {
        custId: 5,
        name: "Harry",
        password: "harry1234",
        role: "faculty",
        email: "harry@gmail.com"
    },
    {
        custId: 6,
        name: "Tia",
        password: "tia1234",
        role: "student",
        email: "tia@gmail.com"
    },
    {
        custId: 7,
        name: "Aditya",
        password: "aditya123",
        role: "faculty",
        email: "aditya@gmail.com"
    },
    {
        custId: 8,
        name: "Sonu",
        password: "sonu1234",
        role: "student",
        email: "sonu@gmail.com"
    },
    {
        custId: 9,
        name: "Ellie",
        password: "ellie1234",
        role: "student",
        email: "ellie@gmail.com"
    },
    {
        custId: 10,
        name: "Gia",
        password: "gia1234",
        role: "faculty",
        email: "gia@gmail.com"
    }
];
courses = [
    {
        courseId: 1,
        name: "ANGULAR",
        code: "ANG97",
        description: "All fundamentals of Angular 7",
        faculty: ["Daniel", "Jack"],
        students: ["Sam"]
    },
    {
        courseId: 2,
        name: "JAVASCRIPT",
        code: "JS124",
        description: "Intoduction to javascript",
        faculty: ["Aditya"],
        students: ["James", "Joy", "Monu", "Rita"]
    },
    {
        courseId: 3,
        name: "REACT",
        code: "RCT56",
        description: "React Javascript library",
        faculty: ["Jack", "Gia"],
        students: ["Raima", "Rita", "Sonu", "James"]
    },
    {
        courseId: 4,
        name: "BOOTSTRAP",
        code: "BS297",
        description: "Bootstrap Designing Framework",
        faculty: [],
        students: ["James", "Tia", "Ellie"]
    },
    {
        courseId: 5,
        name: "CSS",
        code: "CS365",
        description: "Basic stylesheet language",
        faculty: [],
        students: ["James", "Rita", "Monica"]
    },
    {
        courseId: 6,
        name: "REST AND MICROSERVICES",
        code: "RM392",
        description: "Introduction to Microservices",
        faculty: [],
        students: ["Sam"]
    },
    {
        courseId: 7,
        name: "NODE",
        code: "ND725",
        description: "Introduction to Node",
        faculty: ["Sonia"],
        students: ["Saransh", "Shrey", "Monica"]
    }
];
faculties = [
    { id: 5, name: "Daniel", courses: ["ANGULAR"] },
    { id: 4, name: "Sonia", courses: ["NODE"] },
    { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
    { id: 2, name: "Gia", courses: ["REACT"] },
    { id: 1, name: "Aditya", courses: ["ANGULAR"] }
];
classes = [
    {
        classId: 1,
        course: "REACT",
        time: "07:45",
        endTime: "08:45",
        topic: "Redux",
        facultyName: "Jack"
    },
    {
        classId: 2,
        course: "ANGULAR",
        time: "15:45",
        endTime: "17:40",
        topic: "Component",
        facultyName: "Jack"
    },
    {
        classId: 3,
        course: "JAVASCRIPT",
        time: "15:45",
        endTime: "17:40",
        topic: "Component",
        facultyName: "Aditya"
    }
];
students = [
    {
        id: 16,
        name: "Willie",
        dob: "31-July-1997",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["ANGULAR", "NODE"]
    },
    {
        id: 15,
        name: "Tia",
        dob: "30-July-1997",
        gender: "male",
        about: "Pursuing Graduation",
        courses: []
    },
    {
        id: 14,
        name: "Apoorv",
        dob: "31-August-1998",
        gender: "male",
        about: "Want to learn new technologies",
        courses: []
    },
    {
        id: 13,
        name: "Joy",
        dob: "31-July-1997",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["JAVASCRIPT"]
    },
    {
        id: 12,
        name: "Rachel",
        dob: "31-August-1998",
        gender: "female",
        about: "Pursuing Graduation",
        courses: []
    },
    {
        id: 11,
        name: "Monica",
        dob: "30-July-1997",
        gender: "female",
        about: "Want to learn new technologies",
        courses: ["CSS", "NODE"]
    },
    {
        id: 10,
        name: "Monu",
        dob: "12-May-1997",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["JAVASCRIPT"]
    },
    {
        id: 9,
        name: "Sonu",
        dob: "12-May-1997",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["REACT"]
    },
    {
        id: 8,
        name: "Raima",
        dob: "30-July-1997",
        gender: "female",
        about: "Want to learn new technologies",
        courses: ["REACT"]
    },
    {
        id: 7,
        name: "Rita",
        dob: "31-August-1998",
        gender: "female",
        about: "Pursuing Graduation",
        courses: ["JAVASCRIPT", "REACT", "CSS"]
    },
    {
        id: 6,
        name: "Shrey",
        dob: "12-May-1997",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["NODE"]
    },
    {
        id: 5,
        name: "Saransh",
        dob: "31-July-1997",
        gender: "male",
        about: "Want to learn new technologies",
        courses: ["NODE"]
    },
    {
        id: 4,
        name: "Sanya",
        dob: "31-July-1997",
        gender: "male",
        about: "Want to learn new technologies",
        courses: []
    },
    {
        id: 3,
        name: "James",
        dob: "12-July-1994",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
    },
    {
        id: 2,
        name: "Sam",
        dob: "12-July-1994",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["ANGULAR", "REST AND MICROSERVICES"]
    },
    {
        id: 1,
        name: "Ellie",
        dob: "12-June-1992",
        gender: "female",
        about: "Want to learn new technologies",
        courses: ["BOOTSTRAP"]
    }
];




// ------------------------------------------------------------------------- CREATING API's FOR RESETING DATA

let originalCustomers = [...customers];
let originalCourses = [...courses];
let originalFaculties = [...faculties];
let originalClasses = [...classes];
let originalStudents = [...students];


app.get('/resetData', (req, res) => {
    customers = [...originalCustomers]
    courses = [...originalCourses]
    faculties = [...originalFaculties]
    classes = [...originalClasses]
    students = [...originalStudents]
    return res.status(200).send("DATA RESET SUCCESSFULLY")
})



// --------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------- CREATING API's FOR ADMIN


// @ POST
// @ login
app.post("/login", function (req, res) {
    let { email, password } = req.body;

    var cust = customers.find(item => item.email === email && item.password === password);

    if (cust) {
        var custRec = {
            name: cust.name,
            email: cust.email,
            role: cust.role
        }
        //if null then send error
        res.send(custRec);
    } else {
        res.status(500).json({ error: "Please Check Your Name or Password" })
    }
});


// @ POST
// @ register
app.post('/register', (req, res) => {
    let { name, email, password, role } = req.body;
    let id = customers.length;

    // creating new customer and adding to the customers array
    let newCustomer = { custId: id + 1, name, email, password, role }
    customers.push(newCustomer);

    if (role === 'student') {
        console.log('student', role);
        // adding the new customer to the students
        let studentId = students.length + 1;
        let newStudent = { id: studentId, name, dob: '', gender: '', about: '', courses: [] }
        students.unshift(newStudent)
    } else {
        console.log('faculty', role);
        let facultyId = faculties.length + 1;
        let newFaculty = { id: facultyId, name, courses: [] }
        faculties.unshift(newFaculty)
    }

    res.status(200).json({ name, email, role })
})



// @ GET
// @ getStudentNames
app.get('/getStudentNames', (req, res) => {
    let studentNamesArr = students.map(stu => stu.name)
    return res.status(200).json(studentNamesArr)
})



// @ GET
// @ getFacultyNames
app.get('/getFacultyNames', (req, res) => {
    let facultyNamesArr = faculties.map(stu => stu.name)
    return res.status(200).json(facultyNamesArr)
})



// @ GET
// @ getCourseNames
app.get('/getCourseNames', (req, res) => {
    let coursesNamesArr = courses.map(stu => stu.name)
    return res.status(200).json(coursesNamesArr)
})



// @ GET
// @ getCourses
app.get('/getCourses', (req, res) => {
    console.log(courses);
    return res.status(200).json(courses)
})



// @ PUT
// @ putCourse
app.put('/putCourse', (req, res) => {
    let { courseId, name, code, description, faculty, students: studentsArr } = req.body;
    let index = courses.findIndex(c => c.courseId === (+courseId));
    let updatedCourse;
    if (index >= 0) {
        // Create an updated course object
        updatedCourse = {
            courseId: +courseId,
            name,
            code,
            description,
            faculty,
            students: studentsArr
        };
        courses.splice(index, 1, updatedCourse);

        // adding student to course in studenst main array
        students.map(stu => studentsArr.includes(stu.name) && !stu.courses.includes(name) && stu.courses.unshift(name));

        faculties.map(fact => faculty.includes(fact.name) && !fact.courses.includes(name) && fact.courses.unshift(name));

        return res.status(200).json(req.body);
    } else {
        return res.status(404).json({ error: 'Not Found' });
    }
});



// @ GET
// @ getStudents
app.get('/getStudents', (req, res) => {
    studentList = [...students];
    let courseStr = req.query.course;
    if (courseStr) {
        let courseArr = courseStr.split(',')
        studentList = studentList.filter(stu =>
            stu.courses.findIndex(s => courseArr.includes(s)) >= 0
        )
    }
    let result = pagination(studentList, parseInt(req.query.page), 3);
    return res.json({
        items: result,
        page: parseInt(req.query.page),
        totalItems: result.length,
        totalNum: studentList.length
    });
})



// @ GET
// @ getFaculties
app.get('/getFaculties', (req, res) => {
    facultyArr = [...faculties];
    let courseStr = req.query.course;
    if (courseStr) {
        let courseArr = courseStr.split(',')
        facultyArr = facultyArr.filter(faculty =>
            faculty.courses.findIndex(f => courseArr.includes(f)) >= 0
        )
    }
    let result = pagination(facultyArr, parseInt(req.query.page), 3);
    return res.json({
        items: result,
        page: parseInt(req.query.page),
        totalItems: result.length,
        totalNum: facultyArr.length
    });
})



function pagination(arr, page, perPage) {
    let resArr = arr;
    resArr = resArr.slice(page * perPage - perPage, page * perPage);
    return resArr;
}



// -------------------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------- CREATING API's FOR STUDENT


// @ POST
// @ postStudentDetails
app.post(`/postStudentDetails`, (req, res) => {
    let { name, gender, about, dob } = req.body;
    // let newStudent = { id: students.length + 1, ...req.body, courses: [] }
    let index = students.findIndex(stu => stu.name === name);
    if (index >= 0) {
        students[index] = { ...students[index], name, gender, about, dob }
        res.status(200).json(students[index])
    } else {
        res.status(500).json('NOT FOUND')
    }
})


// @ GET
// @ getStudentDetails/:name
app.get(`/getStudentDetails/:name`, (req, res) => {
    let { name } = req.params;
    let student = students.find(stu => stu.name === name);
    if (student) {
        return res.status(200).json(student)
    } else {
        return res.status(500).json({})
    }
})



// @ GET
// @ getStudentCourse/:name
app.get(`/getStudentCourse/:name`, (req, res) => {
    let { name } = req.params;
    let studentCourse = courses.filter(course => course.students.includes(name))
    res.status(200).json(studentCourse);
})


// @ GET
// @ getStudentClass/:name
app.get(`/getStudentClass/:name`, (req, res) => {
    let { name } = req.params;
    let courseArr = students.find(stu => stu.name === name).courses;
    let classArr = classes.filter(c => courseArr.includes(c.course));
    res.status(200).json(classArr);
})


// -------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------- CREATING API's FOR FACULTY


// @ GET
// @ getFacultyCourse/:name
app.get(`/getFacultyCourse/:name`, (req, res) => {
    let { name } = req.params;
    let facultyCourse = courses.filter(course => course.faculty.includes(name))
    res.status(200).json(facultyCourse);
})


// @ GET
// @ getFacultyAllCourse/:name
app.get(`/getFacultyAllCourse/:name`, (req, res) => {
    let { name } = req.params;
    let facultyCourse = courses.filter(course => course.faculty.includes(name))
    let facultyCourses = facultyCourse.map(fc => fc.name)
    res.status(200).json(facultyCourses);
})


// @ GET
// @ getFacultyClass/:name
app.get(`/getFacultyClass/:name`, (req, res) => {
    let { name } = req.params;
    let facultyCourse = classes.filter(c => c.facultyName === name);
    return res.status(200).json(facultyCourse);
})


// let obj = {"classId": 3,"course": "REACT","time": "07:40","endTime": "08:40","topic": "Routing","facultyName": "Jack"}
app.post(`/postClass`, (req, res) => {
    let id = classes.length + 1;
    let newClass = { classId: id, ...req.body };
    classes.push(newClass)
    return res.status(200).json(newClass);
})


// @ GET
// @ getClass/:id
app.get(`/getClass/:id`, (req, res) => {
    let { id } = req.params;
    let facultyClass = classes.find(c => c.classId == id);
    console.log(facultyClass);
    if (!facultyClass) {
        return res.status(400).send("Not Found")
    }
    return res.status(200).json(facultyClass)

})


// @ GET
// @ postClass/:id
app.put(`/postClass/:id`, (req, res) => {
    let { id } = req.params;
    let index = classes.findIndex(c => c.classId == id);
    let updatedClasses = { ...req.body }
    if (index >= 0) {
        classes.splice(index, 1, updatedClasses);
        return res.status(200).json(updatedClasses)
    } else {
        return res.status(404).send('Not Found')
    }
})


// -------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------- LISTENING ON PORT 8080

app.listen(PORT, () => console.log(`Node app listening on port ${PORT}!`));
