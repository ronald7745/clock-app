import {useState} from 'react'
import './style.scss'

export default function App() {
  const [count, setCount] = useState(1000)

  return (
    <div className="App">
      <button onClick={()=> {setCount(count + 1)}} className='count btn btn-primary'>Count : {count}</button>
    </div>
  )
}
