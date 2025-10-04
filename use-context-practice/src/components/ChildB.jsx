import React from 'react'
import ChildC from './ChildC';
import ChildD from './ChildD';

const ChildB = ({ val }) => {
  return (
    <div>
        <h2>Child B</h2>
      <ChildC val={val} />
      <ChildD/>
    </div>
  )
}

export default ChildB
