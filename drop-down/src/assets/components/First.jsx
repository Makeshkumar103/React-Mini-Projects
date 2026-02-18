import { useState } from 'react'
import './App.css'
import { data } from './assets/services/data'

function First() {
  // keep the department list from data.js and track the selected department id
  const [departments] = useState(data.departments)
  const [selectedDeptId, setSelectedDeptId] = useState(
    departments[0]?.deptId ?? ''
  )

  const handleDeptChange = (e) => {
    setSelectedDeptId(Number(e.target.value))
  }

  return (
    <>
      <div>
        <h1>Dropdown Menu</h1>
        <div className="dropdown">
          <form>
            <fieldset>
              <input type="text" placeholder="Search" />
              <button type="submit">Search</button>
              <select value={selectedDeptId} onChange={handleDeptChange}>
                {departments.map((dept) => (
                  <option key={dept.deptId} value={dept.deptId}>
                    {dept.deptName}
                  </option>
                ))}
              </select>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  )
}
export default First