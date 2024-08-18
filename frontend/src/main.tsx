import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/theme-provider.tsx'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      storageKey="theme"
    >
      <App />
    </ThemeProvider>
  </>,
)
