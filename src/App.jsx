import { Outlet } from "react-router-dom"
import Mainlayout from "./components/layout/Mainlayout"


function App() {
  

  return (
    <>
      
      <Mainlayout>

        <Outlet></Outlet>
        
      </Mainlayout>
      
    </>
  )
}

export default App
