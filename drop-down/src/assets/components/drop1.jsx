import { useState } from 'react'
import './App.css'
import { data } from './assets/services/data'

function App() {
  const [departments] = useState(data.departments)

  // unique list of sections: ["A", "B", ...]
  const [sections] = useState(
    Array.from(new Set(departments.map((dept) => dept.section)))
  )

  const [selectedSection, setSelectedSection] = useState(sections[0] ?? '')
  const [selectedStudentId, setSelectedStudentId] = useState('')

  const studentsInSection =
    departments.find((dept) => dept.section === selectedSection)?.students ??
    []

  const handleSectionChange = (e) => {
    const nextSection = e.target.value
    setSelectedSection(nextSection)

    const deptForSection = departments.find(
      (dept) => dept.section === nextSection
    )

    if (deptForSection?.students?.length) {
      setSelectedStudentId(deptForSection.students[0].studentId)
    } else {
      setSelectedStudentId('')
    }
    // const studentChange = (e) => {
    //   setSelectedStudentId(Number(e.target.value))
    // }
  }

  const handleStudentChange = (e) => {
    setSelectedStudentId(Number(e.target.value))
  }

  return (
    <>
      <div>
        <h1>Section & Student Dropdowns</h1>
        <form>
          <fieldset>
            <label>
              Section
              <select
                value={selectedSection}
                onChange={handleSectionChange}
              >
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
                value={selectedStudentId}
                onChange={handleStudentChange}
                disabled={!studentsInSection.length}
              >
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
