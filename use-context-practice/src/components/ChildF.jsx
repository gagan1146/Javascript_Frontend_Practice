import React, { useContext } from 'react'
import { Context } from '../App'

const ChildF = () => {
    const { user, setUser } = useContext(Context);
  return (
    <div>
      <h2>Child F { user } </h2>
        <button onClick={()=>setUser("Hii F")}>Update User</button>

    </div>
  )
}

export default ChildF
