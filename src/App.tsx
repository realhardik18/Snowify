import { useState } from 'react'
import './index.css'

import Navbar from './components/Navbar';
function App() {  
  return (   
    <>
      <Navbar/>
      <h1 className='text-3xl'>Hello World</h1>
      <button className="btn btn-blue">
        Button
      </button>
    </>       
  )
}

export default App
