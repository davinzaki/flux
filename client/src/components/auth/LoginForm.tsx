import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { EyeIcon, EyeOffIcon, LockIcon, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useLogin } from "@/hooks/useAuth"


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { mutate } = useLogin()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log('onSubmit', data)
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className="text-white w-[358px] bg-black rounded-3xl p-6 flex flex-col gap-4" >

      <h1 className="font-intergralcf text-4xl font-bold" >Login</h1>
      <p>Doesn't have an account? Register here.</p>

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
          <Button variant="pill" size="pill" className="font-satoshi">
            Login
          </Button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm