import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar"

const DasboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* <Navbar /> */}
        <main className="flex-1 p-4 bg-gray-50 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DasboardLayout