import { useState } from 'react'
import './App.css'
import { data } from './assets/services/data'

function App() {
  const [departments] = useState(data.departments)
  const [deptIdInput, setDeptIdInput] = useState('')
  const [sectionInput, setSectionInput] = useState('')
  const [studentIdInput, setStudentIdInput] = useState('')
  const [studentNameInput, setStudentNameInput] = useState('')  
  const [savedDepartment, setSavedDepartment] = useState('')
  const [savedSection, setSavedSection] = useState('')
  const [savedStudentId, setSavedStudentId] = useState('')
  const [savedStudentName, setSavedStudentName] = useState('')

  const selectedDept = departments.find(
    (dept) => dept.deptId === Number(deptIdInput)
  )
  const selectedStudent =
    selectedDept?.students.find(
      (student) => student.studentId === Number(studentIdInput)
    ) ?? null

  const handleSave = (e) => {
    e.preventDefault()
    if (!selectedDept || !selectedStudent) return
    setSavedDepartment(selectedDept.deptName)
    setSavedSection(selectedDept.section)
    setSavedStudentId(selectedStudent.studentId)
    setSavedStudentName(selectedStudent.studentName)
  }
  return (
    <>    
      <div>
        <h1>Lookup Department , Section & Student & Save the Output</h1>
        <form onSubmit={handleSave} autoComplete="off">
          <fieldset>
            <label>
              Department
              <input
                type="text"
                value={deptIdInput}
                onChange={(e) => {
                  const nextId = e.target.value
                  const nextDept = departments.find(
                    (dept) => dept.deptId === Number(nextId)
                  )
                  setDeptIdInput(nextId)
                  setSectionInput(nextDept?.section ?? '')
                  setStudentIdInput(nextDept?.students[0]?.studentId ?? '')
                  setStudentNameInput(nextDept?.students[0]?.studentName ?? '')
                }}
                placeholder="e.g. 1"
              />
            </label>
            <label>
              Section
              <input
                type="text"
                value={sectionInput}
                onChange={(e) => setSectionInput(e.target.value)}
                placeholder="e.g. A"
              />
            </label>
            <label>
              Student ID
              <input
                type="text"
                value={studentIdInput}
                onChange={(e) => {
                  const nextStudentId = e.target.value
                  setStudentIdInput(nextStudentId)
                  const nextStudent = selectedDept?.students.find(
                    (student) => student.studentId === Number(nextStudentId)
                  )
                  setStudentNameInput(nextStudent?.studentName ?? '')
                }}
                placeholder="e.g. 101"
              />
            </label>
            <label>
              Student Name
              <input
                type="text"
                value={studentNameInput}
                onChange={(e) => setStudentNameInput(e.target.value)}
                placeholder="e.g. Hari"
              />
            </label>
          </fieldset>
          <button type="submit" disabled={!selectedDept || !selectedStudent} >Save</button>
        </form>

        <div style={{ marginTop: '1rem' }}>
          <div>
            Department:{' '}
            {selectedDept ? selectedDept.deptName : 'Not found for that id'}
          </div>
          <div>
            Section:{' '}
            {selectedDept ? selectedDept.section : 'Not found for that id'}
          </div>
          <div>
            Student:{' '}
            {selectedStudent
              ? selectedStudent.studentId
              : 'Not found for that dept/student id'}
          </div>
          <div>
            Student Name:{' '}
            {selectedStudent
              ? selectedStudent.studentName
              : 'Not found for that dept/student id'}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <strong>Saved Output</strong>
            <div>Department: {savedDepartment || '-'}</div>
            <div>Section: {savedSection || '-'}</div>
            <div>Student ID: {savedStudentId || '-'}</div>
            <div>Student Name: {savedStudentName || '-'}</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
