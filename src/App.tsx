import { useState } from 'react'
import './App.css'

function App() {

  const handleInputChange = () => {

  };
  

  return (
    <div className='app'> 
      <h1>To-Do List</h1>
      <div className="input-wrapper">
        <input type="text" onChange={handleInputChange}/>
      </div>
    </div>
  )
}

export default App
