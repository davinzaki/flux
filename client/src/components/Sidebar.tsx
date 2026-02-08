import { useAuthContext } from "@/context/AuthContext"
import { HomeIcon, LogOutIcon, Package, ShoppingCart, SidebarClose, SidebarOpen } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Sidebar = () => {
    const navigate = useNavigate()
    const { logout } = useAuthContext()

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded)
    }

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <aside
            className={`
                ${isExpanded ? 'w-20' : 'w-64'} 
                h-screen
                bg-black shadow-xl 
                flex flex-col 
                font-intergralcf text-white
                transition-all duration-300 ease-in-out
                z-50
            `}
        >
            {/* Header */}
            <div className="p-4 border-b border-gray-800">
                {isExpanded ? (
                    <SidebarOpen
                        onClick={toggleSidebar}
                        className="w-5 h-5 ms-3.5 flex-shrink-0 cursor-pointer hover:text-gray-400 transition-colors"
                    />
                ) : (
                    <div className="font-bold text-lg flex justify-between items-center">
                        <h4>FLUX</h4>
                        <SidebarClose
                            onClick={toggleSidebar}
                            className="w-5 h-5 flex-shrink-0 cursor-pointer hover:text-gray-400 transition-colors"
                        />
                    </div>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                <Link
                    to="/"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                    <HomeIcon className="w-5 h-5 flex-shrink-0" />
                    {!isExpanded && <span>Home</span>}
                </Link>

                <Link
                    to="/products"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                    <Package className="w-5 h-5 flex-shrink-0" />
                    {!isExpanded && <span>Products</span>}
                </Link>

                <Link
                    to="/cart"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                    <ShoppingCart className="w-5 h-5 flex-shrink-0" />
                    {!isExpanded && <span>Cart</span>}
                </Link>
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-gray-800">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 p-3 cursor-pointer rounded-lg hover:bg-gray-800 transition-colors"
                >
                    <LogOutIcon className="w-5 h-5 flex-shrink-0" />
                    {!isExpanded && <span>Logout</span>}
                </button>
            </div>
        </aside>
    )
}

export default Sidebar