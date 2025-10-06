import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppRoutes from "./routes/AppRoutes"
import { Toaster } from "sonner"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
      <Toaster />
    </QueryClientProvider>
  )
}

export default App