import { useState } from "react"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

function AuthenticatedLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className={`layout-app ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      <div className="layout-main">
        <Navbar onMenuClick={toggleSidebar} />

        <div className="layout-content" onClick={sidebarOpen ? closeSidebar : undefined}>
          {children}
        </div>
      </div>

      {sidebarOpen && <div className="sidebar-backdrop" onClick={closeSidebar} />}
    </div>
  )
}

export default AuthenticatedLayout
