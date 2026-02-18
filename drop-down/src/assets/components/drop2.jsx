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

  const studentsInSection =
    departments.find((dept) => dept.section === selectedSection)?.students ??
    []

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
                onMouseOver={handleChange}
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
              <select
                name="studentId"
                value={selectedStudentId}
                onChange={handleChange}
                disabled={!studentsInSection.length}
              >
                <option value="">Select student</option>
                {studentsInSection.map((student) => (
                  <option key={student.studentId} value={student.studentId}>
                    {student.studentName}
                  </option>
                ))}
              </select>
            </label>
          </fieldset>
        </form>
      </div>
    </>
  )
}
export default App
