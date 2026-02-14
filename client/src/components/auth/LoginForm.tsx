import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { EyeIcon, EyeOffIcon, Loader2Icon, LockIcon, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useLogin } from "@/hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "@/context/AuthContext"
import { toast } from "sonner"


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { setAuth } = useAuthContext()
  const navigate = useNavigate()
  const { mutate, isPending } = useLogin(
    {
      onSuccess: (res) => {
        const { accessToken, refreshToken, user } = res.data
        toast.success(`Welcome back, ${user.name}!`)
        setAuth(user, accessToken, refreshToken)

        navigate('/products', { replace: true })
      },
      onError: (err) => {
        console.log('err', err)
        toast.error("Login failed", {
          description: err?.response?.data?.message
        })
        console.error(err)
      }
    }
  )
  const { register, handleSubmit } = useForm({
    defaultValues: {
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
        <h1 className=" text-4xl font-bold" >Login</h1>
        <p>Doesn't have an account? Register <Link to={'/register'}> <span className="underline">here</span> </Link>.</p>

        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-4 w-full max-w-sm">
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

export default LoginForm