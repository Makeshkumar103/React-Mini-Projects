import React from 'react'
import Row from './Row'

const Table = ( { items }) => {
  return (
    <div className='table-container'>
      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <br />
      <table>
        <tbody>
          {items.map(item => (
            <Row key={item.id} item={item}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table