// Task 2: getStudentsByLocation function

export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
