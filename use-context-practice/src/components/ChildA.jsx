import React from 'react'
import ChildB from './ChildB'
import ChildE from './ChildE'

const ChildA = () => {
  return (
    <div>
      <h2>Child A</h2>
      <ChildB val="some value Come from Parent A"/>
      <ChildE/>
    </div>
  )
}

export default ChildA
