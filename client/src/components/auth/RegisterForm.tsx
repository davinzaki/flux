import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { EyeIcon, EyeOffIcon, Loader2Icon, LockIcon, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useRegister } from "@/hooks/useAuth"
import { Link } from "react-router-dom"


const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { mutate, isPending } = useRegister()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
    })

    const onSubmit = handleSubmit((data) => {
        console.log('onSubmit', data)
        mutate(data)
    })

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="flex flex-col text-white w-[358px] sm:h-screen bg-black rounded-3xl sm:rounded-none sm:justify-center sm:items-center" >
            <div className="flex flex-col p-6 gap-4">
                <h1 className=" text-4xl font-bold" >Register</h1>
                <p>Already have an account? Login <Link to={'/login'}> <span className="underline">here</span> </Link>.</p>

                <form onSubmit={onSubmit}>
                    <div className="flex flex-col gap-4 w-full max-w-sm">
                        <Input
                            type="name"
                            placeholder="Enter your name"
                            icon={<User className="size-5 text-muted-foreground" />}
                            {...register('name')}
                        />
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            icon={<Mail className="size-5 text-muted-foreground" />}
                            {...register('email')}
                        />
                        <div className="flex">
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                icon={<LockIcon className="size-5 text-muted-foreground" />}
                                icon2={<div onClick={togglePasswordVisibility}>
                                    {showPassword ?
                                        <EyeIcon /> : <EyeOffIcon />
                                    }

                                </div>}
                                {...register('password')}
                            />
                        </div>
                        {isPending ?
                            (
                                <Button size="sm" disabled>
                                    <Loader2Icon className="animate-spin" />
                                    Loading
                                </Button>)
                            : (
                                <Button variant="pill" size="pill" className="font-satoshi">
                                    Login
                                </Button>
                            )}


                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm