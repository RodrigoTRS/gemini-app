import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"

import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routes}/>
    </ThemeProvider>

  )
}
