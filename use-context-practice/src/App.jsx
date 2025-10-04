import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

const Context = createContext();
function App() {
  const [user,setUser] = useState("Gagan Sharma");
  return (
    <>
    <Context.Provider value={{user,setUser}}>
      <ChildA/>
    </Context.Provider>
    </>
  )
}

export default App
export {Context};