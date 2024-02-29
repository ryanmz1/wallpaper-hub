import { useEffect, useState } from 'react'
import './App.css'
import ThemeToggle from './components/ThemeToggle';
import NavBar from './components/NavBar';

function App() {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
{/* 
        <div className='text-3xl font-bold underline'>Hello world!</div>
        <button className="btn w-64 rounded-full">Button</button> */}
        <div className='lg:col-span-2'>
          <NavBar />
        </div>
        {/* <div>nav</div> */}
        <div className='hidden lg:block bg-yellow-500'>aside</div>
        <div className='bg-green-500'>main</div>
      </div>
    </>
  )
}

export default App
