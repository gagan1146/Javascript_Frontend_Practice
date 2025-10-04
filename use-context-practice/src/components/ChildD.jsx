import React, { useContext } from 'react'
import { Context } from '../App'

const ChildD = () => {
    const { user , setUser } = useContext(Context);
  return (
    <div>
      <h2>Child D { user } </h2>
        <button onClick={()=>setUser("Hii D")}>Update User</button>

    </div>
  )
}

export default ChildD
