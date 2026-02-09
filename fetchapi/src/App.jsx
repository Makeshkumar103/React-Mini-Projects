import { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'
import Table from './Table'

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [items, setItems] = useState([])
  const [reqType, setReqType] = useState('users')

  useEffect(() => {

    const fetchItems =async () => {
      try{
        const response = await fetch(`${API_URL}${reqType}`)
        const data = await response.json()
        setItems(data)
      }catch(err){
        console.error(err)
      }
    }

    fetchItems()
  }, [reqType])


  return (
      <div className='App'>
        <Form reqType={reqType} setReqType={setReqType} />
        <List items={items} />
        <Table items={items} />
      </div>
  )
}

export default App
