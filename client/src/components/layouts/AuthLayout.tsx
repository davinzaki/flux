import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <div className="w-full flex flex-col h-screen sm:flex-row sm:justify-between sm:items-center">
            <div className=" flex flex-col gap-4 p-4">
                <h1 className="font-intergralcf text-4xl font-bold sm:text-6xl">Welcome to <span className="text-5xl sm:text-6xl underline">Flux</span></h1>
                <p className="text-lg">An E-Commerce App you only needed.</p>
            </div>
            <Outlet />
        </div>
    )
}

export default AuthLayout