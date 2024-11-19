import Demo from "./components/Demo"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"

function App() {
  return (
    <div className="h-screen w-screen px-10">
      <Navbar />
      <div className="flex h-[90vh] w-full justify-between">
        <Sidebar />
        <Home/>
      </div>
    </div>
    // <Demo/>
  )
}

export default App