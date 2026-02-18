import { useState } from 'react'
import './App.css'
import { data } from './assets/services/data'

function App() {
  const [departments] = useState(data.departments)

  // unique list of sections: ["A", "B", ...]
  const [sections] = useState(
    Array.from(new Set(departments.map((dept) => dept.section)))
  )

  // no section selected initially for better UX
  const [selectedSection, setSelectedSection] = useState('')
  const [selectedStudentId, setSelectedStudentId] = useState('')
  const [isStudentDropdownOpen, setIsStudentDropdownOpen] = useState(false)

  const studentsInSection =
    departments.find((dept) => dept.section === selectedSection)?.students ??
    []

  const selectedDept = departments.find(
    (dept) => dept.section === selectedSection
  )

  const selectedStudent =
    selectedDept?.students.find(
      (student) => student.studentId === Number(selectedStudentId)
    ) ?? null

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'section') {
      // clear selection
      if (value === '') {
        setSelectedSection('')
        setSelectedStudentId('')
        return
      }

      const nextSection = value
      setSelectedSection(nextSection)

      const deptForSection = departments.find(
        (dept) => dept.section === nextSection
      )

      if (deptForSection?.students?.length) {
        setSelectedStudentId(deptForSection.students[0].studentId)
      } else {
        setSelectedStudentId('')
      }
      return
    }

    if (name === 'studentId') {
      if (value === '') {
        setSelectedStudentId('')
      } else {
        setSelectedStudentId(Number(value))
      }
    }
  }

  return (
    <>
      <div>
        <h1>Student Selector by Section</h1>
        {/* <p>Choose a section first, then pick a student from that section.</p> */}
        <form>
          <fieldset>
            <label>
              Section
              <select
                name="section"
                value={selectedSection}
                onChange={handleChange}
              >
                <option value="">Select section</option>
                {sections.map((sec) => (
                  <option key={sec} value={sec}>
                    {sec}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Student
              <div
                className="custom-dropdown"
                onMouseEnter={() => !studentsInSection.length || setIsStudentDropdownOpen(true)}
                onMouseLeave={() => setIsStudentDropdownOpen(false)}
              >
                <div
                  className={`custom-dropdown-trigger ${!studentsInSection.length ? 'disabled' : ''}`}
                >
                  {selectedStudentId
                    ? studentsInSection.find((s) => s.studentId === selectedStudentId)?.studentName
                    : 'Select student'}
                  <span className="dropdown-arrow">▼</span>
                </div>
                {isStudentDropdownOpen && studentsInSection.length > 0 && (
                  <ul className="custom-dropdown-menu">
                    <li
                      className="custom-dropdown-option"
                      onClick={() => {
                        setSelectedStudentId('')
                        setIsStudentDropdownOpen(false)
                      }}
                    >
                      Select student
                    </li>
                    {studentsInSection.map((student) => (
                      <li
                        key={student.studentId}
                        className={`custom-dropdown-option ${
                          selectedStudentId === student.studentId ? 'selected' : ''
                        }`}
                        onClick={() => {
                          setSelectedStudentId(student.studentId)
                          setIsStudentDropdownOpen(false)
                        }}
                      >
                        {student.studentName}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </label>
          </fieldset>

          {selectedStudent && (
            <div className="student-details">
              <h2>Student Details</h2>
              <p>
                <strong>Student Name:</strong> {selectedStudent.studentName}
              </p>
              <p>
                <strong>Department:</strong> {selectedDept?.deptName}
              </p>
              <p>
                <strong>Section:</strong> {selectedDept?.section}
              </p>
              <p>
                <strong>Student ID:</strong> {selectedStudent.studentId}
              </p>
             
            </div>
          )}
        </form>
      </div>
    </>
  )
}
export default App
