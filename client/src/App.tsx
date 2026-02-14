import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppRoutes from "./routes/AppRoutes"
import { Toaster } from "sonner"
import { AuthProvider } from "./provider/AuthProvider"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRoutes />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App