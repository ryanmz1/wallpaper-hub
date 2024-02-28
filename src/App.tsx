import { useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <div data-theme="light">

        <div className='text-3xl font-bold underline'>Hello world!</div>
        <button className="btn w-64 rounded-full">Button</button>
        
      </div>
    </>
  )
}

export default App
