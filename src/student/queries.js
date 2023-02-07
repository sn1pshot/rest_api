const getstudents = "SELECT * FROM students";
const getstudentbyid = "SELECT * FROM students WHERE id = $1"
const emailexists = "SELECT s FROM students s WHERE s.email = $1"
const createstudent = "INSERT INTO students (name,email,age,dob) VALUES($1,$2,$3,$4)"
const deletestudent = "DELETE FROM students WHERE id = $1"
const updatestudent = "UPDATE students SET name = $2, email = $3, age = $4, dob = $5 WHERE id = $1"
module.exports = {
    getstudents,
    getstudentbyid,
    emailexists,
    createstudent,
    deletestudent,
    updatestudent
}