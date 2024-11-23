
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { Main } from "./components"


export default function App() {
  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <div className="flex">
        <Sidebar/>
        <Main/>
      </div>
    </div>
  )
}

