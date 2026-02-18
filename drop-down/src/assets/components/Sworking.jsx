import { useState } from 'react'
import './App.css'
import { data } from './assets/services/data'

function App() {
  const [departments] = useState(data.departments)
  const [deptIdInput, setDeptIdInput] = useState('')
  const [studentIdInput, setStudentIdInput] = useState('')

  const selectedDept = departments.find(
    (dept) => dept.deptId === Number(deptIdInput)
  )
  const selectedStudent =
    selectedDept?.students.find(
      (student) => student.studentId === Number(studentIdInput)
    ) ?? null

  return (
    <>
      <div>
        <h1>Lookup Department & Student</h1>
        <form>
          <fieldset>
            <label>
              Department
              <input
                type="number"
                value={deptIdInput}
                onChange={(e) => setDeptIdInput(e.target.value)}
                placeholder="e.g. 1"
              />
            </label>
            <label>
              Student ID
              <input
                type="number"
                value={studentIdInput}
                onChange={(e) => setStudentIdInput(e.target.value)}
                placeholder="e.g. 101"
              />
            </label>
          </fieldset>
        </form>

        <div style={{ marginTop: '1rem' }}>
          <div>
            Department:{' '}
            {selectedDept ? selectedDept.deptName : 'Not found for that id'}
          </div>
          <div>
            Student:{' '}
            {selectedStudent
              ? selectedStudent.studentName
              : 'Not found for that dept/student id'}
          </div>
        </div>
      </div>
    </>
  )
}
export default App
