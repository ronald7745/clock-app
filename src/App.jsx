import { useState } from 'react';
import Hour from './components/Hour'
import Data from './components/Data'
import './sass/style.scss'

export default function App() {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className='App'>
      <Hour Date={date} />
      <Data Date={date} />
    </div>
  )
}
