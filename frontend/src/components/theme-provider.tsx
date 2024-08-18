import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function setTheme(theme: string) {
  document.documentElement.classList.remove("dark", "light")
  document.documentElement.style.colorScheme = theme
  document.documentElement.classList.add(theme)
}

export function toggleTheme(){
  const currentTheme = document.documentElement.classList.contains("dark") ? "light" : "dark"
  setTheme(currentTheme)
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
