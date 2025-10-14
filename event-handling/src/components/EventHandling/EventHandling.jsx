import React, { useState } from 'react'

const EventHandling = () => {
    const [count,setCount] = useState(0);
    const handleButtonClick = ()=>{
        setCount(count+1);
    }
  return (
    <div>
      <h1>____________________________________________________________________________________</h1>
      {count}
      <button onClick={handleButtonClick}></button>
    </div>
  )
}

export default EventHandling
