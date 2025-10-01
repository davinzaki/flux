import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { EyeIcon, EyeOffIcon, LockIcon, Mail } from 'lucide-react'


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className="text-white w-[358px] bg-black rounded-3xl p-6 flex flex-col gap-4" >

      <h1 className="font-intergralcf text-4xl font-bold" >Login</h1>
      <p>Doesn't have an account? Register here.</p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Input
          type="email"
          placeholder="Enter your email address"
          icon={<Mail className="size-5 text-muted-foreground" />}
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
          />
        </div>
        <Button variant="pill" size="pill" className="font-satoshi">
          Login
        </Button>
      </div>
    </div>
  )
}

export default LoginForm