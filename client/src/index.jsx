import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { mevlid } from './style/theme.js'
import { GlobalStyle } from './style/GlobalStyle.js'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useTheme from '@/hooks/useTheme.js'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

function AppWrapper() {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={{
      ...mevlid,
      ...theme
    }}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AppWrapper />
    {/* <ReactQueryDevtools /> */}
  </QueryClientProvider>,
)
