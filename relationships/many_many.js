const {Schema, model} = require('mongoose');


const studentSchema = new Schema({
    name:{
        type:String
    },
    courses:[
        {type:String,ref:'Course'}
    ]
});

const courseSchema = new Schema({
    name:{
        type: String
    },
    students:[
        {type:String, ref:'Student'}
    ]
});


const Student = model('Student',studentSchema);
const Course = model('Course',courseSchema);



const add_student = async(req,res) => {
    try{
        const data = req.body;

        const newStudent = await Student.create(data);
        res.status(201).send({Message:'Student addedd...',student:newStudent});
    }catch(error) {
        console.log("error-",error);
        res.status(400).send({Messgae:'Error Orccured while addding student.....'});
    }
}

const add_course = async(req,res) => {
    try{
        const data = req.body;

        const newCourse = await Course.create(data);
        res.status(201).send({Message:'Course addedd...',student:newCourse});
    }catch(error) {
        console.log("error-",error);
        res.status(400).send({Messgae:'Error Orccured while addding Course.....'});
    }
}


const get_students = async(req,res) => {
    try{
        const student = Student.find().populate('courses');
        res.send({Message:'students retrived...',student});

    }catch(error) {
        console.log("error-",error);
        res.status(400).send({Messgae:'Error Orccured while getting students .....'});
    }
}


const enroll_course = async(req,res) => {
    try{
        const {studentId, courseId} = req.body;

        const student = await Student.findById(studentId);
        const course = await Course.findById(courseId);

        if(!student || !course) {
            throw new Error('Either Student of Course Doesnot Exist');
        }

        // add course to student
        student.courses.push(courseId);
        student.save();

        // add student to course
        course.students.push(studentId);
        course.save();

        res.status(201).send({Message:'Course Enrolled...'});
    }catch(error) {
        console.log("error-",error);
        res.status(400).send({Messgae:'Error Orccured while Enrolling for Course.....'});
    }
}


module.exports = {
    add_student,
    add_course,
    enroll_course,
    get_students
}



