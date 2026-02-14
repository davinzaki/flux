import * as React from "react"
import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode
  icon2?: React.ReactNode
}

function Input({ className, type = "text", icon, icon2, ...props }: InputProps) {
  return (
    <div className="relative w-full">
      {icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none">
          {icon}
        </span>
      )}

      <input
        type={type}
        data-slot="input"
        className={cn(
          "h-12 w-full rounded-full border border-gray-300 bg-white text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none",
          icon && "pl-10",
          icon2 && "pr-10",
          className
        )}
        {...props}
      />

      {icon2 && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
          {icon2}
        </span>
      )}
    </div>
  )
}

export { Input }
