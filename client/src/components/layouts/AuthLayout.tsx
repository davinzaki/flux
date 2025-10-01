import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <div className="w-full flex flex-col p-4 h-screen">
            <div className=" flex flex-col gap-4">
                <h1 className="font-intergralcf text-4xl font-bold">Welcome to <span className="text-5xl">Flux</span></h1>
                <p className="text-lg">An E-Commerce App you only needed.</p>
            </div>
            <Outlet />
        </div>
    )
}

export default AuthLayout